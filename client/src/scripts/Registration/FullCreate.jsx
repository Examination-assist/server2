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
					
					<Record location={this.props.location}/>
				</div>
				<div className='outerreview'>
					<h1>Review Complete Document</h1>
					<button className='button ButtonReview ButtonReviewneeche Accept'>
						Send for final review
					</button>

					<button className='button  ButtonReview ButtonReviewneeche Reject'>
						Reject
					</button>
				</div>
			</div>
		)	
	}
}

export default FullReview
