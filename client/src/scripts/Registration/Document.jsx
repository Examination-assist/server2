import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Document extends Component {
	constructor() {
		super()
		this.state = { success: false }
		this.handleChange = this.handleChange.bind(this)
		this.post = this.post.bind(this)
		this.state={doc_id:''}
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	async componentDidMount() {
		console.log('ladfhlads')
		const res = await axios.post(
			'http://localhost:8000/api/create_document',
			{
				name: 'Thy Do Mine',
				from_: 'English',
				to_: 'Telegu',
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
		return <div>
			{this.state.doc_id!==''?<Link to={`/store_document?doc_id=${this.state.doc_id}`}>Document</Link>:""}
		</div>
	}
}
