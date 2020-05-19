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
		this.state = {
			doc_id: '',
			name: '',
			language: '',
			name: '',
			book_name: '',
			chapter_number: '',
		}
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleDropDown(e) {
		this.setState({ language: e.value })
		// console.log(this.state.)
	}
	async componentDidMount() {
		console.log('ladfhlads')
	}

	async post() {
		const res = await axios.post(
			'http://localhost:8000/api/create_document',
			{
				name: this.state.doc_name,
				book_name: this.state.book_name,
				chapter_number: this.state.chapter_number,
				from_: 'English',
				to_: this.state.language,
			},
			{
				headers: { user_id: localStorage.getItem('user_id') },
			}
		)
		console.log(res.data.doc_id)
		this.setState({ doc_id: res.data.doc_id })
	}

	render() {
		return (
			<div className='card'>
				<form action=''>
					<input
						type='text'
						placeholder='Document Name'
						name='doc_name'
						onChange={(e) => this.handleChange(e)}
						required
					></input>
					<input
						type='text'
						placeholder='Book Name'
						name='book_name'
						onChange={(e) => this.handleChange(e)}
						required
					></input>
					<input
						name='chapter_number'
						type='number'
						placeholder='Chapter Number'
						onChange={(e) => this.handleChange(e)}
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
					<input type='button' Value='Submit'  onClick={this.post}/>
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
