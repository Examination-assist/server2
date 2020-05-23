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

	blobToFile(theBlob, fileName){
		//A Blob() is almost a File() - it's just missing the two properties below which we will add
		theBlob.lastModifiedDate = new Date();
		theBlob.name = fileName;
		return theBlob;
	}

	async uploadFile(file) {
		const formData = new FormData()
		formData.append('file', file)
		formData.append('filename', file.name)
		
		console.log(formData)
		return await axios.post('http://localhost:8080/api/' + 'upload_audio', formData, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		})
		// console.log()
	}

	async handleAudioUpload() {
		let blob = this.state.audioDetails
		// let file=(this.blobToFile(blob.blob,'one.mp3'))
		// let res = await this.uploadFile(file)
		let k=(await blob.blob.text())
		// let form = new FormData()
		// form.append('kkk',blob.blob)
		
		await axios.post('http://localhost:8000/api/upload_audio',{blob:k})
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
