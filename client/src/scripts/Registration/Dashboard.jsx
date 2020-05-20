import React, { Component } from 'react'
import UserDashboard from './UserDashboard'
import ReviewBoard from './ReviewBoard'

export default class Dashboard extends Component {
	constructor() {
		super()
		this.state = { type: '' }
	}
	componentDidMount() {
		// this.setState({type:localStorage.getItem('type_id')})
		let type = localStorage.getItem('type_id')
		this.setState({ type: type }, () => console.log(this.state))
	}
	render() {
		return (
			<div>
				<div className='carddash'>
					{this.state.type === '3' ? (
						<UserDashboard />
					) : (
						<ReviewBoard />
					)}
				</div>
			</div>
		)
	}
}
