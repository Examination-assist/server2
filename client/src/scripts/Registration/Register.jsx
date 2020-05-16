import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
	async componentDidMount() {
		console.log(await axios.post('http://localhost:8000/api/register', {
			username: 'user',
			password: 'password',
			user_type: 'Translator',
			email:'email@mail.com'
		}))
	}
	render() {
		return <div></div>
	}
}
