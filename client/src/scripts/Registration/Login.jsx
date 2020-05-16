import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
	async componentDidMount() {
		const res = await axios.post('http://localhost:8000/api/login', {
			email: '8.aniket.chowdhury@gmail.com',
			password: 'password',
		})
		if (res.status === 200) {
			const token = res.data.token
			localStorage.setItem('AuthToken',token)
			localStorage.setItem('user_id',res.data.email)
		}
	}

	render() {
		return <div></div>
	}
}
