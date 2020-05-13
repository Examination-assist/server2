import React, { Component } from 'react'
import './Record.css'
import Microphone from './Microphone'

class Record extends Component {
	state = {}
	render() {
		return (
			<div className='outer'>
				<h1 class='RecordText'>
					<textarea
						disabled
						name=''
						className='textArea'
						value={this.props.text}
						id=''
						cols='90'
						rows='40'
					></textarea>
				</h1>
				<Microphone />
			</div>
		)
	}
}
export default Record
