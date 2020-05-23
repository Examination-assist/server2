import React, { Component } from 'react'
import './Record.css'
import Microphone from './Microphone'

class Record extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>

			<div className='outerRecord onPC'>
				<textarea
					name=''
					className='textAreaRecord'
					value={this.props.text}
					id=''
					// cols='90'
					// rows='20'
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
					// cols='50'
					// rows='20'
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
