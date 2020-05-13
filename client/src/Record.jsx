import React, { Component } from 'react'
import './Record.css'
import Microphone from './Microphone'

class Record extends Component {
	state = {}
	render() {
		return (
			<div className='outer'>
				<div className="left">

				<h1 class='RecordText'>
					<textarea
						disabled
						name=''
						className='textAreaRecord'
						value={this.props.text}
						id=''
						cols='90'
						rows='40'
						></textarea>
				</h1>
						</div>
						<div className="right">
				<Microphone />
						</div>
							
			</div>
		)
	}
}
export default Record
