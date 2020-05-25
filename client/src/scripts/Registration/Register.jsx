import React, { Component } from 'react'
import axios from 'axios'
import '../../Register.css'

const SERVER = require('./config')

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
		const res = await axios.post(`${SERVER}register`, {
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
				<div className='card'>
					{!this.state.success ? (
						<div className="beforeREG">
					<span className='cardTitle'>Register Here</span>
						<form method='post'>
							<br />

							<input
								onChange={this.handleChange}
								placeholder='Email ID'
								type='email'
								name='email'
								required
							/>
							<br />
							<div className='onPC'>
								<input
									className='name firstName'
									onChange={this.handleChange}
									placeholder='First Name'
									type='text'
									name='first_name'
								/>
								<input
									className='name lastName'
									onChange={this.handleChange}
									placeholder='Last Name'
									type='text'
									name='last_name'
								/>
							</div>
							<div className='onPhone'>
								<input
									className='name firstNamePhone'
									onChange={this.handleChange}
									placeholder='First Name'
									type='text'
									name='first_name'
								/>
								<br />
								<br />
								<input
									className='name lastNamePhone'
									onChange={this.handleChange}
									placeholder='Last Name'
									type='text'
									name='last_name'
								/>
							</div>
							<br className="onPhone" />

							<input
								onChange={this.handleChange}
								placeholder='Username'
								type='text'
								name='username'
							/>
							<br />

							<input
								onChange={this.handleChange}
								placeholder='Password'
								type='password'
								name='password'
								required
							/>
							<br />
							<input
								className='registerButtonPhone onPhone'
								type='button'
								value='Submit'
								onClick={this.post}
							/>
							<input
								className='registerButtonPC onPC'
								type='button'
								value='Submit'
								onClick={this.post}
							/>
						</form>
				</div>
					) : (
						'Registered'
						)}
						</div>
		)
	}
}
