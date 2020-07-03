import React, { Component } from 'react'
import Microphone from './Microphone'
import autosize from 'autosize'
import axios from 'axios'
// import SpeechRecognition from 'react-speech-recognition'
const SERVER = require('./config')
const langs = require('../supportedLanguages.js')
let googleTransliterate = require('google-input-tool')

class Row extends Component {
	state = {
		name: '',
		interval: '',
		lang: 'mr-IN',
		record: false,
		transliterate: [],
	}
	tran = (e) => {
		var sourceText = e
		// console.log(sourceText)
		var inputLanguage = 'hi-t-i0-und'
		var maxResult = 1
		var request = new XMLHttpRequest()
		// var tran
		// import "../transliteration-input.bundle"
		googleTransliterate(request, sourceText, inputLanguage, maxResult).then(
			(response) => {
				console.log(sourceText)
				console.log('Transliterated Text: ', response)
				// tran = response
				this.setState({ transliterate: response[0][0] })
			}
		)
	}
	componentDidMount() {
		autosize(document.querySelectorAll('textarea'))
		this.setState(
			{
				left: this.props.left,
				right: this.props.right,
				name:this.props.right,
				line_counter: this.props.line_counter,
				paragraph: this.props.paragraph,
				count: this.props.count,
				change: this.props.change,
				doc_id: this.props.doc_id,
				transcript: this.props.transcript,
			},
			async () => {
				await this.audio()
			}
		)

		// setInterval(() => {
		// 	console.log(this.state.trans())
		// }, 300)
	}

	// setActive(name) {
	// 	clearInterval(this.state.interval)
	// 	let interval = setInterval(() => {
	// 		this.setState({ [name]: this.state.transcript })
	// 	}, 300)
	// 	this.setState({ interval: interval })
	// }
	execute() {
		this.audio()
	}

	async audio() {
		const result = await axios.post(`${SERVER}get_audio`, {
			doc_id: this.props.doc_id,
			count: this.props.count,
		})
		if (result.data.length !== 0) this.setState({ file: result.data })
		else {
			this.setState({ file: null })
		}
		// console.log(result)
	}
	// start(transcript) {
	try() {}
	stop() {
		clearInterval(this.state.interval)
	}
	colors = ['#BFBBFF', '#C4E3FF']
	render() {
		// let {
		// 	transcript,
		// 	startListening,
		// 	stopListening,
		// 	browserSupportsSpeechRecognition,
		// 	resetTranscript,
		// } = this.props
		// this.props.recognition.lang = this.state.lang
		// if (!browserSupportsSpeechRecognition) {
		// 	return null
		// }

		let { transcript, resetTranscript } = this.props
		// let transcript = ''
		// function
		return (
			<React.Fragment>
				<div className='outer'>
					{/* {this.state.transliterate} */}
					<div
						style={
							this.state.active
								? {
										display: 'flex',
										width: '100%',
										fontWeight: '600',
								  }
								: {
										display: 'flex',
										width: '100%',
										backgroundColor: `${
											this.colors[
												this.props.line_counter % 2
											]
										}`,
										fontWeight: '500',
								  }
						}
						className={`OuterRow `}
					>
						{/* <input
							type='hidden'
							name='hidden'
							id='hidden'
							value={transcript}
						/> */}
						<div
							style={{
								textAlign: 'center',
								width: '4%',
								padding: '10px 0',
								border: '1px solid black',
								borderRight: '0',
							}}
							className='line_counter'
						>
							{this.state.line_counter}
						</div>
						<div
							style={{
								width: '33%',
								padding: '10px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'left',
								fontSize: '1.5rem',
								fontWeight: '700',
							}}
							className='leftcont'
						>
							{this.state.left}
						</div>
						<div
							style={{
								width: '33%',
								padding: '10px',
								border: '1px solid black',
								overflow: 'hidden',
							}}
							className='rightcont'
						>
							{/* <textarea
								disabled={
									this.state.change === true ? false : true
								}
								style={
									this.state.active
										? {
												width: '100%',
												padding: '10px',
												height: '100%',
												outline: 'none',
												border: 'none',
												fontSize: '1.5rem',
												fontWeight: '700',
												backgroundColor:
													'rgba(0,0,255,0)',
										  }
										: {
												resize: 'none',
												width: '100%',
												height: '100%',
												outline: 'none',
												border: 'none',
												fontSize: '1.5rem',
												fontWeight: '700',
												backgroundColor:
													'rgba(0,0,255,0)',
										  }
								}
								type='text'
								onBlurCapture={(e) => {
									this.props.updateRow(
										this.state.count,
										e.target.value
									)
									this.setState({ active: false })
								}}
								onFocusCapture={() =>
									this.setState({ active: true })
								}
								value={this.state.right}
								onChange={(e) =>
									this.props.updateRow(
										this.state.count,
										e.target.value
									)
								}
							/> */}
							<div className='entry'>
								<button
									className='ButtonRecording'
									onClick={(e) => {
										this.setState({ record: true })
									}}
								>
									{this.state.record === true ? (
										<p>Restart</p>
									) : (
										<p>Start</p>
									)}
									{/* Start */}
								</button>
								{this.state.record === true ? (
									<div className=''>
										<strong>Preview:</strong>{' '}
										<p>{transcript}</p>
									</div>
								) : (
									''
								)}
								<textarea
									id='h'
									className='inputFieldSpeech'
									required
									rows='10	'
									id='outlined-basic'
									label='Owner Name'
									variant='outlined'
									type='text'
									value={this.state.name}
									onChange={(e) => {
										this.tran(e.target.value)
										clearInterval(this.state.interval)
										this.setState({
											name: [e.target.value],
										})
									}}
									onBlurCapture={(e) => {
										console.log(e)
										this.props.updateRow(
											this.state.count,
											e.target.value
										)
										this.setState({ active: false })
									}}
									onFocusCapture={(e) =>{
										console.log('capture')

										this.setState({ active: true })
									}}
								/>
								<button
									className='ButtonRecording'
									onClick={() => {
										this.setState({
											name: transcript,
											record: false,
										})
										this.props.resetTranscript()

										// resetTranscript()
										// stop()
										// clearInterval(this.state.interval)
									}}
								>
									{this.state.record === true ? (
										<p>Confirm</p>
									) : (
										<p>Stop</p>
									)}
								</button>
							</div>
						</div>
						<div
							style={{
								width: '30%',
								padding: '20px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'center !important',
							}}
						>
							{this.state.change === true ? (
								<React.Fragment>
									{/* <a
										href={
											this.state.file !== null
												? this.state.file
												: false
										}
										target='_blank'
										rel='noopener noreferrer'
									> */}
									<audio
										src={
											this.state.file !== null
												? this.state.file
												: false
										}
										controls
									></audio>
									<Microphone
										audio={this.execute}
										doc_id={this.props.doc_id}
										line_counter={this.props.line_counter}
										paragraph={this.props.paragraph}
										count={this.props.count}
										count={this.props.count}
										doc_id={this.props.doc_id}
									/>
								</React.Fragment>
							) : (
								<audio
									src={
										this.state.file !== null
											? this.state.file
											: false
									}
									controls
								></audio>
							)}
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const options = {
	lang: 'mr-IN',
	// autoStart: false
}

export default Row
