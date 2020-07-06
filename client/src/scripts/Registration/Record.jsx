import React, { Component } from 'react'
import './Record.css'
import Microphone from '../../Microphone'

import axios from 'axios'
const qs = require('query-string')

const SERVER = require('./config')

class Record extends Component {
	state = { text: '' }
	async componentDidMount() {
		// console.log('ok')

		let doc_id = qs.parse(this.props.location.search)['doc_id']
		this.setState({ doc_id: doc_id })

		let result = await axios.post(
			SERVER+'about_document',
			{
				doc_id: doc_id,
			}
		)
		this.setState({ document_about: result.data })

		this.setState()
		if (result.data.status === 'Under Review') {
			this.setState({ change: false })
		}
		this.setState({ result: JSON.stringify(result.data) })

		let data = await axios.post(
			SERVER+'view_lines',
			{ doc_id: this.state.doc_id,user_id: localStorage.getItem('user_id') },
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)

		this.setState(
			{
				lines: data.data.translate.sort((a, b) => a.count < b.count),
			},
			() => {
				let m = ''
				this.state.lines.map((line) => {
					if (line.output !== null) m += line.output + '\n'
				})
				this.setState({ text: m })
			}
		)
	}
	render() {
		return (
			<React.Fragment>
				<div className='outerRecord onPC'>
					<textarea
						name=''
						className='textAreaRecord'
						value={this.state.text}
						disabled={this.props.change?false:true}
						id=''
					></textarea>
					<div className='mic'>
						<div className='recorder'>
							<Microphone className='completeRecord' />
						</div>
					</div>
				</div>
				<div className='outerRecord onPhone'>
					<textarea
						disabled
						name=''
						className='textAreaRecordPhone'
						value={this.props.text}
						id=''
					></textarea>
					<br />
					<br />
					<div className='mic miconPhone'>
						<div className='recorderPhone'>
							<Microphone className='completeRecord' />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default Record
