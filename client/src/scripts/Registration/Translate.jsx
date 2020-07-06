import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import Row from './Row'

import SpeechRecognition from 'react-speech-recognition'

import axios from 'axios'
const qs = require('query-string')
const SERVER = require('./config')

class Translate extends Component {
	UPLOAD_ENDPOINT = SERVER

	constructor() {
		super()
		this.state = {
			doc_id: '',
			result: '',
			lines: [],
			back: false,
			change: true,
			document_about: {},
			lang: 'mr-IN',
			transcript: '',
			startListening: '',
			browserSupportsSpeechRecognition: '',
			resetTranscript: '',
		}
		this.updateRow = this.updateRow.bind(this)

		this.save = this.save.bind(this)

		this.back = this.back.bind(this)
	}
	back() {
		this.setState({ back: true })
	}

	async save() {
		let translate = []
		console.log(this.state.lines)
		this.state.lines.map((line) => {
			let obj = {
				translate_id: line.translate_id,
				output: line.output,
			}
			translate.push(obj)
		})
		// console.log(translate)
		const data = await axios.post(
			require('./config')+'update_lines',
			{ translate: translate, user_id: localStorage.getItem('user_id') },
			{
				headers: {
					user_id: localStorage.getItem('user_id'),
				},
			}
		)
	}

	async componentDidMount() {
		// let {
		// 	// transcript,
		// 	startListening,
		// 	stopListening,
		// 	browserSupportsSpeechRecognition,
		// 	// resetTranscript,
		// } = this.props
		// this.setState({
		// 	// transcript: transcript,
		// 	startListening: startListening,
		// 	browserSupportsSpeechRecognition: browserSupportsSpeechRecognition,
		// })
		// if (!browserSupportsSpeechRecognition) {
		// 	return null
		// }

		// console.log('ok')
		let doc_id = qs.parse(this.props.location.search)['doc_id']
		this.setState({ doc_id: doc_id })

		let result = await axios.post(SERVER + 'about_document', {
			doc_id: doc_id,
		})
		this.setState({ document_about: result.data })

		this.setState()
		if (result.data.status === 'Under Review') {
			this.setState({ change: false })
		}
		this.setState({ result: JSON.stringify(result.data) })

		let data = await axios.post(
			SERVER + 'view_lines',
			{
				doc_id: this.state.doc_id,
				user_id: localStorage.getItem('user_id'),
			},
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)

		this.setState({
			lines: data.data.translate.sort((a, b) => a.count < b.count),
		})
	}

	updateRow(count, val) {
		let line = this.state.lines[count - 1]
		line.output = val
		// console.log(this.state.lines[count - 1].output)
	}

	render() {
		let { transcript, resetTranscript } = this.props
		this.props.recognition.lang = this.state.lang
		return (
			<React.Fragment>
				{this.state.doc_id === undefined ? (
					<Redirect to='/'></Redirect>
				) : (
					<div>
						{/* {transcript} */}
						<p>
							{(transcript) => {
								localStorage.setItem('transcript', transcript)
								console.log(transcript)
							}}
						</p>
						<p
							style={{
								width: '80%',
								margin: '80px auto 20px',
								fontWeight: 700,
							}}
						>
							{/* <button
								className='ButtonRecording'
								onClick={() => {
									// start()
									// setActive('name')
								}}
							>
								Start
							</button> */}
							{this.state.document_about === {} ? (
								''
							) : (
								<React.Fragment>
									{`Course Discipline: ${this.state.document_about.name}`}
									<br />
									{`Course Name: ${this.state.document_about.book_name}`}
									<br />
									{`Lecture Number: ${this.state.document_about.chapter_number}`}
								</React.Fragment>
							)}
						</p>
						{this.state.lines.map((line) => {
							return (
								<React.Fragment key={line.translate_id}>
									{line.line_counter === 1 ? (
										<React.Fragment>
											<br />
											<p
												style={{
													width: '80%',
													margin: '0 auto',
													fontWeight: 700,
												}}
											>
												PARAGRAPH {line.para} <br />
											</p>
										</React.Fragment>
									) : (
										''
									)}
									<Row
										doc_id={this.state.doc_id}
										change={this.state.change}
										updateRow={this.updateRow}
										line_counter={line.line_counter}
										count={line.count}
										left={line.input}
										right={line.output}
										transcript={transcript}
										resetTranscript={
											this.props.resetTranscript
										}
									></Row>
								</React.Fragment>
							)
						})}
						{this.state.change === true ? (
							<React.Fragment>
								<p style={{ textAlign: 'center' }}>
									<span style={{ width: '40%' }}>
										<input
											type='button'
											value='Save as draft'
											onClick={() => this.save()}
										/>
									</span>
									<span style={{ width: '40%' }}>
										<input
											type='button'
											value='Save and Back'
											onClick={async () => {
												this.save()
												this.back()
												this.forceUpdate()
											}}
										/>
									</span>
									<span style={{ width: '40%' }}>
										<input
											type='button'
											value='Send for review'
											onClick={async () => {
												this.save()
												axios.post(
													require('./config')+'review_document',
													{
														doc_id: this.state
															.doc_id,
													},
													{
														headers: {
															user_id: localStorage.getItem(
																'user_id'
															),
														},
													}
												)
												this.back()
											}}
										/>
									</span>
								</p>
							</React.Fragment>
						) : (
							''
						)}
						{this.state.back === true ? (
							<Redirect to='/dashboard'></Redirect>
						) : (
							''
						)}
					</div>
				)}
			</React.Fragment>
		)
	}
}

const options = {
	lang: 'mr-IN',
	// autoStart: false
}

export default SpeechRecognition(options)(Translate)
