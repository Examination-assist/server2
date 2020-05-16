import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
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
		this.setState({
			email: '8.aniket.chowdhury@gmail.com',
            password: 'password',
		})
	}

	async post() {
		const res = await axios.post('http://localhost:8000/api/login', {
			email: this.state.email,
			password: this.state.password,
		})
		console.log(res)
		if (res.status === 200) {
			const token = res.data.token
			localStorage.setItem('AuthToken', token)
			localStorage.setItem('email', res.data.email)
			localStorage.setItem('user_id', res.data.user_id)
			this.setState({ success: true })
		}
	}

	render() {
		return (
			<div>
				{!this.state.success ? (
					<form method='post'>
						<input
							onChange={this.handleChange}
							placeholder='email'
							type='email'
							name='email'
							required
						/>
						<br />
						<input
							onChange={this.handleChange}
							placeholder='password'
							type='password'
							name='password'
							required
						/>
						<br />
						<input
							type='button'
							value='Submit'
							onClick={this.post}
						/>
					</form>
				) : (
					'Login successful'
				)}
			</div>
		)
	}
}
