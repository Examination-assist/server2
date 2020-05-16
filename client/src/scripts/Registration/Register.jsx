import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
	async componentDidMount() {
		console.log(await axios.post('http://localhost:8000/api/register', {
			first_name: 'Aniket',
			// last_name: 'Chowdhury',
			username: 'aniketbiprojit',
			password: 'password',
			user_type: 'Translator',
			email:'8.aniket.chowdhury@gmail.com'
		}))
	}
	render() {
		return <div></div>
	}
}
