import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import Row from './Row'

const qs = require('query-string')

export default class Translate extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'

	constructor() {
		super()
		this.state = {
			doc_id: '',
			result: '',
			lines: [],
		}
		this.updateRow = this.updateRow.bind(this)
	}
	async componentDidMount() {
		// console.log('ok')
		let doc_id = qs.parse(this.props.location.search)['doc_id']
		this.setState({ doc_id: doc_id })

		let result = await axios.post(
			'http://localhost:8000/api/about_document',
			{
				doc_id: doc_id,
			}
		)

		this.setState({ result: JSON.stringify(result.data) })

		let data = await axios.post(
			'http://localhost:8000/api/view_lines',
			{ doc_id: this.state.doc_id },
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)

		this.setState({
			lines: data.data.translate.sort((a, b) => a.count < b.count),
		})
	}

	updateRow(count, val) {
		let line = this.state.lines[count-1]
		line.output = val
		// console.log(this.state.lines[count-1].output)
	}

	render() {
		return (
			<React.Fragment>
				{this.state.doc_id === undefined ? (
					<Redirect to='/'></Redirect>
				) : (
					<div>
						{this.state.lines.map((line) => {
							return (
								<React.Fragment key={line.translate_id}>
									{line.line_counter === 1 ? <br /> : ''}
									<Row
										updateRow={this.updateRow}
										line_counter={line.line_counter}
										count={line.count}
										left={line.input}
										right={line.output===null?'':line.output}
									></Row>
								</React.Fragment>
							)
						})}
					</div>
				)}
			</React.Fragment>
		)
	}
}
