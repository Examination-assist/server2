import React from 'react'
import { Recorder } from 'react-voice-recorder'
import './Microphone.css'
import axios from 'axios'

// const qs = require('query-string')
const SERVER = require('./config')


export default class Microphone extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			audioDetails: {
				url: null,
				blob: null,
				chunks: null,
				duration: {
					h: 0,
					m: 0,
					s: 0,
				},
			},
		}
	}

	componentDidMount() {
		this.setState({
			doc_id: this.props.doc_id,
			line_counter: this.props.line_counter,
			paragraph: this.props.paragraph,
			count: this.props.count,
		})
	}
	handleAudioStop(data) {
		this.setState({ audioDetails: data })
	}

	async handleAudioUpload() {
		console.log(this.state)
		let blob = this.state.audioDetails.blob

		let fd = new FormData()
		fd.append('upl', blob, 'audio.wav')

		fd.append('count', this.state.count)
		fd.append('doc_id', this.state.doc_id)

		console.log(blob)
		console.log(fd)
		let data=(
			await axios.post(`${SERVER}upload_audio`, fd)
		)
		this.setState({file:data.data})
		// this.props.audio()
	}
	handleRest() {
		const reset = {
			url: null,
			blob: null,
			chunks: null,
			duration: {
				h: 0,
				m: 0,
				s: 0,
			},
		}
		this.setState({ audioDetails: reset })
	}

	render() {
		return (
			<div
				style={{ width: '100%', textAlign: 'center' }}
				className='Recorder1'
			>
				<Recorder
					record={true}
					audioURL={this.state.audioDetails.url}
					showUIAudio
					handleAudioStop={(data) => this.handleAudioStop(data)}
					handleAudioUpload={() => this.handleAudioUpload()}
					handleRest={() => this.handleRest()}
				/>
			</div>
		)
	}
}
