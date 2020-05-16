import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.post = this.post.bind(this)
		this.state = { success: false }
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	async componentDidMount() {
		this.setState({
			first_name: '',
			last_name: '',
			username: '',
			password: '',
			user_type: 'Translator',
			email: '',
		})
	}

	async post() {
		const res = await axios.post('http://localhost:8000/api/register', {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
			password: this.state.password,
			user_type: this.state.user_type,
			email: this.state.email,
			success: false,
		})
		console.log(res)
		if (res.status === 200) {
			this.setState({ success: true })
		}
	}

	render() {
		return (
			<div>
				{!this.state.success ? (
					<form method='post'>
						<br />
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
							placeholder='first_name'
							type='text'
							name='first_name'
						/>
						<br />
						<input
							onChange={this.handleChange}
							placeholder='last_name'
							type='text'
							name='last_name'
						/>
						<br />
						<input
							onChange={this.handleChange}
							placeholder='username'
							type='text'
							name='username'
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
					'Registered'
				)}
			</div>
		)
	}
}
