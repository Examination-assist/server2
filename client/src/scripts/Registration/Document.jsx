import React, { Component } from 'react'

export default class Document extends Component {
	constructor() {
		super()
		this.state = { success: false }
		this.handleChange = this.handleChange.bind(this)
		this.post = this.post.bind(this)
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	async componentDidMount() {
		console.log(
			await axios.post('http://localhost:8000', {
				name: 'Thy Do Mine',
				from_: 'English',
                to_: 'Telegu',
                input:'',
                ouput:''
			})
		)
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
		return <div></div>
	}
}