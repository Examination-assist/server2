import React from 'react'
import { Recorder } from 'react-voice-recorder'
import './Microphone.css'
import axios from 'axios'

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
	handleAudioStop(data) {
		this.setState({ audioDetails: data })
		console.log(data)
	}

	async handleAudioUpload() {
		let blob = this.state.audioDetails.blob
		
		let fd = new FormData()
		fd.append('upl',blob,'audio.wav')
		console.log(blob)
		console.log(fd)
		console.log(await axios.post('http://localhost:8000/api/upload_audio',fd))
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
