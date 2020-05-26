import React, { Component } from 'react'
import axios from 'axios'
import '../../Register.css'
import { Redirect } from 'react-router'
const SERVER = require('./config')
export default class LoginTranslator extends Component {
	constructor() {
		super()
		this.state = { success: false }
		this.handleChange = this.handleChange.bind(this)
		this.post = this.post.bind(this)
		this.state = { err: '' }
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
		try {
			const res = await axios.post(`${SERVER}login`, {
				email: this.state.email,
				password: this.state.password,
			})
			if (res.status === 200) {
				const token = res.data.token
				console.log(res.data)
				localStorage.setItem('AuthToken', token)
				localStorage.setItem('email', res.data.email)
				localStorage.setItem('user_id', res.data.user_id)
				localStorage.setItem('type_id', res.data.type_id)
				this.setState({ success: true })
			}
			if (res.status) {
				console.log(res)
				this.setState({ err: res })
			}
			if (res.status === 403) {
				this.setState({ err: 'Username or password incorrect' })
			}
		} catch (error) {
			console.log(error)
			this.setState({ err: 'Username or password missing' })
		}
	}

	render() {
		return (
			<div className='card'>
				{!this.state.success ? (
					<div className=''>
						<h1>
							Translators 
						</h1>
						<span className='cardTitle login'>Login Here</span>
						
						<br />
						<br />
						<form method='post'>
							<input
								onChange={this.handleChange}
								placeholder='Email'
								type='email'
								name='email'
								required
							/>
							<br />
							<input
								onChange={this.handleChange}
								placeholder='Password'
								type='password'
								name='password'
								required
							/>

							<p className='red' style={{ color: 'red' }}>
								{this.state.err}
							</p>
							<input
								type='button'
								value='Submit'
								className="formButton"
								onClick={this.post}
							/>
						</form>
						<br />
						<br />
						<a href="./login">
						<span className=' '>Are you a reviewer?</span>
						</a>
					</div>
				) : (
					<Redirect to='/dashboard'></Redirect>
				)}
			</div>
		)
	}
}
