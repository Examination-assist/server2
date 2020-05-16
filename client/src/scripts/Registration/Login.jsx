import React, { Component } from 'react'
import axios from 'axios'
import "../../Register.css"
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
			email: '',
            password: '',
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
			<div className="card">
				{!this.state.success ? (
					<div className="">

					<span className='cardTitle login'>Login Here</span>
<br />
<br />
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
					</div>

				) : (
					'Login successful'
				)}
			</div>
		)
	}
}
