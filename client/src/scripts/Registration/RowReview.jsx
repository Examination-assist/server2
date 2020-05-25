import React, { Component } from 'react'
import autosize from 'autosize'

import axios from 'axios'
const SERVER = require('./config')

export default class Row extends Component {
	state = {}
	componentDidMount() {
		autosize(document.querySelectorAll('textarea'))
		this.setState(
			{
				left: this.props.left,
				right: this.props.right,
				line_counter: this.props.line_counter,
				paragraph: this.props.paragraph,
				count: this.props.count,
				status: this.props.status,
			},
			() => this.audio()
		)
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
		console.log(this.props.count)
	}

	handleAccept() {
		this.setState({ status: 'Accepted' })
		this.setState({ toggleAccept: true })
		this.setState({ toggleReject: false })
		this.setState({ toggleRedo: false })
	}
	handleReject() {
		this.setState({ status: 'Rejected' })
		this.setState({ toggleReject: true })
		this.setState({ toggleAccept: false })
		this.setState({ toggleRedo: false })
	}
	handleRedo() {
		this.setState({ status: 'Change required' })
		this.setState({ toggleRedo: true })
		this.setState({ toggleReject: false })
		this.setState({ toggleAccept: false })
	}
	colors = ['#BFBBFF', '#C4E3FF']
	render() {
		return (
			<React.Fragment>
				<div className='outer'>
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
								fontSize: '1.5rem',
								fontWeight: '700',
							}}
							className='rightcont'
						>
							{this.state.right}
							<div
								className='div'
								style={{
									position: 'absolute',
									bottom: 0,
									borderRadius: 0,
								}}
							>
								<audio
								style={{padding:'20px 0 0'}}
									src={
										this.state.file !== null
											? this.state.file
											: false
									}
									controls
								></audio>
							</div>
						</div>
						<div
							style={{
								width: '10%',
								padding: '20px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'center !important',
							}}
						>
							{this.state.status}
						</div>
						<div
							className='buttonSet'
							style={{
								width: '20%',
								padding: '10px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'left',
							}}
						>
							<div className='accepted'>
								<button
									onClick={() => this.handleAccept()}
									className='button ButtonReview Accept'
								>
									Accept
								</button>
								<br />
								{this.state.toggleAccept && (
									<div className='remarksRequired remarksAccept'>
										<span classname='Remarks'>
											Remarks:{' '}
										</span>
										<br />
										<textarea
											type='text'
											style={{
												width: '90%',
												height: '200px',
											}}
											className='textReview'
										/>
									</div>
								)}
							</div>
							<div className='rejected'>
								<button
									onClick={() => this.handleReject()}
									className='button ButtonReview Reject'
								>
									Reject
								</button>
								<br />
								{this.state.toggleReject && (
									<div className='remarksRequired'>
										<span classname='Remarks'>
											Remarks:{' '}
										</span>
										<br />
										<textarea
											type='text'
											style={{
												width: '90%',
												height: '200px',
											}}
											className='textReview'
										/>
									</div>
								)}
							</div>
							<br />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
