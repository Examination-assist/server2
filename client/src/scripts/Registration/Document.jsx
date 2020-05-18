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
		this.handleDropDown = this.handleDropDown.bind(this)
		this.post = this.post.bind(this)
		this.state = { doc_id: '', name: '', language: '' }
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleDropDown(e) {
		this.setState({ language: e.value })
		console.log(this.state)
	}
	async componentDidMount() {
		console.log('ladfhlads')
		const res = await axios.post(
			'http://localhost:8000/api/create_document',
			{
				name: 'hello',
				chapter_number: '',
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
				<form action=''>
					<input type='text' placeholder='Book Name	' required></input>
					<input
						type='number'
						placeholder='Chapter Number'
						required
					></input>
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
					<input type='submit' Value='Submit' />
				</form>
				{this.state.doc_id !== '' ? (
					<Link to={`/store_document?doc_id=${this.state.doc_id}`}>
						<input type='button' Value='Open Document' />
					</Link>
				) : (
					''
				)}
			</div>
		)
	}
}
