import React, { Component } from 'react'
import Microphone from './Microphone'

export default class Row extends Component {
	state = {}
	componentDidMount() {
		this.setState({
			left: this.props.left,
			right: this.props.right,
			counter: this.props.counter,
			paragraph: this.props.paragraph,
		})
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
											this.colors[this.props.counter % 2]
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
							className='counter'
						>
							{this.state.counter}
						</div>
						<div
							style={{
								width: '33%',
								padding: '10px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'left',
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
							<textarea
								style={
									this.state.active
										? {
												width: '100%',
												padding: '10px',
												height: '100%',
												outline: 'none',
												border: 'none',
												backgroundColor:
													'rgba(0,0,255,0)',
										  }
										: {
												resize: 'none',
												width: '100%',
												height: '100%',
												outline: 'none',
												border: 'none',
												backgroundColor:
													'rgba(0,0,255,0)',
										  }
								}
								type='text'
								onBlurCapture={(e) => {
									this.props.updateRow(
										this.state.paragraph,
										this.state.counter - 1,
										e.target.value
									)
									this.setState({ active: false })
								}}
								onFocusCapture={() =>
									this.setState({ active: true })
								}
								value={this.props.getConverted(
									this.state.paragraph,
									this.state.counter - 1
								)}
								onChange={(e) =>
									this.props.updateRow(
										this.state.paragraph,
										this.state.counter - 1,
										e.target.value
									)
								}
							/>
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
							<Microphone />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
