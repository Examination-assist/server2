import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const qs = require('query-string')

export default class Translate extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'

	constructor() {
		super()
		this.state = {
            doc_id: '',
            result:''
		}
    }
    async componentDidMount() {
		let doc_id = qs.parse(this.props.location.search)['doc_id']
		this.setState({ doc_id: doc_id })

		const result = await axios.post(
			'http://localhost:8000/api/about_document',
			{
				doc_id: doc_id,
			}
        )
        console.log(result)
		this.setState({ result: JSON.stringify(result.data) })
	}
	render() {
		return (<React.Fragment>
            {this.state.doc_id === undefined ? (
				<Redirect to='/'></Redirect>
				) : (
                    <div>
                        {this.state.result}
                    </div>
                )}
        </React.Fragment>)
	}
}
