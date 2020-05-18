import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
	'Hindi',
	'Bengali',
	'Gujarati',
	'Kannada',
	'Malayalam',
	'Marathi',
	'Tamil',
	'Telugu',
]
export default class Document extends Component {
	constructor() {
		super()
		this.state = { success: false }
		this.handleChange = this.handleChange.bind(this)
		this.post = this.post.bind(this)
		this.handleDropDown = this.handleDropDown.bind(this)
		this.state = { doc_id: '' ,language: ''}
	}
	handleDropDown(e) {
		this.setState({ language: e.value })
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
		console.log(e)
	}

	async componentDidMount() {
		console.log('ladfhlads')
		const res = await axios.post(
			'http://localhost:8000/api/create_document',
			{
				book_name: '',
				chapter_number:"",
				from_: 'English',
				to_: this.state.language,
				input: '',
				ouput: '',
			},
			{
				headers: { user_id: localStorage.getItem('user_id') },
			}
		)
		console.log(res.data.doc_id)
		this.setState({ doc_id: res.data.doc_id })
	}

	async post() {
		// const res = await axios.post('http://localhost:8000/api/login', {
		// 	email: this.state.email,
		// 	password: this.state.password,
		// })
		// console.log(res)
		// if (res.status === 200) {
		// 	const token = res.data.token
		// 	localStorage.setItem('AuthToken', token)
		// 	localStorage.setItem('email', res.data.email)
		// 	localStorage.setItem('user_id', res.data.user_id)
		// 	this.setState({ success: true })
		// }
	}

	render() {
		return (
			<div className='card'>
				<input
						type='text'
						onChange={this.handleChange}
						placeholder='Book Name'
						type='book_name'
						name='book_name'
					/>
						<input
						type='number'
						onChange={this.handleChange}
						placeholder='Chapter Number'
						type='chapter_number'
						name='chapter_number'
					/>
					<div className='dropDown'>
									<h5>Choose language to translate into:</h5>
									<Dropdown
										className='dropdownhello'
										options={options}
										onChange={this.handleDropDown}
										value={this.state.language}
										placeholder='Select Language'
									/>
								</div>
					<br />
					<Link to={`/store_document?doc_id=${this.state.doc_id}`}>
						<button className='button'>
							<span className='buttonText'>Open Document </span>
						</button>
					</Link>
			
			</div>
		)
	}
}
