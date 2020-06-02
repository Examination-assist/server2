import React, { Component } from 'react'
import FullReviewRecord from './FullReviewRecord'


class FullReview extends Component {
	state = {}


	render() {
		return (
			<div className='outer'>
				<div className='title' style={{ textAlign: 'center' }}>
					<h1>Review Complete Document</h1>
				</div>
				<div className='outBox'>
					
					<FullReviewRecord location={this.props.location} change={false}/>
				</div>
				<div className='outerreview'>
					<br />
					<br />
					<br />
					<br />
					<button
						style={{ marginRight: '10px' }}
						className='button Accept ButtonReview  '
					>
						Accept
					</button>
					<button className='button ButtonReview Reject'>Reject</button>
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
