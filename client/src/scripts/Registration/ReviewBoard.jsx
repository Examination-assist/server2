import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ReviewBoard extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'
	constructor() {
		super()
		this.state = { data: [] }
	}

	async componentDidMount() {
		const result = await axios.post(
			this.UPLOAD_ENDPOINT + 'show_documents_review',
			{},
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)

		this.setState({ data: result.data.docs })

		console.log(this.statestate)
	}

	render() {
		return (
			<div>
				<h1>Review Documents</h1>
				{this.state.data.map((elem) => {
					return (
						<React.Fragment key={elem.doc_id}>
							<p>
								<span style={{ padding: '0 10px' }}>
									{elem.doc_id}
								</span>
								<span style={{ padding: '0 10px' }}>
									{elem.name}
								</span>
								<span style={{ padding: '0 10px' }}>
									{elem.status}
								</span>
								<span style={{ padding: '0 10px' }}>
									<Link to={`/review?doc_id=${elem.doc_id}`}>
										Visit
									</Link>
								</span>
							</p>
						</React.Fragment>
					)
				})}
				<p style={{ padding: '0 10px' }}>
					<Link to='/login'>
						<button className='button'>
							<div className='buttonText'>
								Logout from dashboard
							</div>
						</button>
					</Link>
				</p>{' '}
			</div>
		)
	}
}
