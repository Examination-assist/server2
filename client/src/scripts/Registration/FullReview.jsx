import React, { Component } from 'react'
import Record from '../../Record'


class FullReview extends Component {
	state = {}


	render() {
		return (
			<div className='outer'>
				<div className='title' style={{ textAlign: 'center' }}>
					<h1>Review Complete Document</h1>
				</div>
				<div className='outBox'>
					{/* <div className='leftBox'>
						<textarea className='box' disabled rows='40'></textarea>
					</div>
					<div className='rightBox'>
						<Record />
					</div> */}
					<Record />
				</div>
				<div className='outerreview'>
					<br />
					<br />
					<br />
					<br />
					<button
						style={{ marginRight: '10px' }}
						className='button  '
					>
						Save and back
					</button>
					<button className='button  '>Submit for approval</button>
					{/* 
							<button className='button  ButtonReview ButtonReviewneeche Reject'>
								Reject
							</button> */}
				</div>
			</div>
		)
	}
}

export default FullReview
