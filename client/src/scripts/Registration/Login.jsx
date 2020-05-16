import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    async componentDidMount(){
        console.log(await axios.post('http://localhost:8000/api/login',{
            'email':'8.aniket.chowdhury@gmail.com',
            'password':'password'
        }))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
