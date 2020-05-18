import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserDashboard extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'
	constructor() {
		super()
		this.state = { data: [] }
	}
	async componentDidMount() {
		const result = await axios.post(
			this.UPLOAD_ENDPOINT + 'show_documents',
			{},
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)

		this.setState({ data: result.data.docs })
	}
	render() {
		return (
			<div>
				<p style={{ padding: '0 10px' }}>
					<h1>User Dashboard</h1>
					<Link to='/document'>
						<button className='button'>
							<div className='buttonText'>
								Create new Document
							</div>
						</button>
					</Link>
				</p>
			
				<h2>Your documents</h2>
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
									<Link
										to={`/translate?doc_id=${elem.doc_id}`}
									>
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
							<div className='buttonText'>Logout from dashboard</div>
						</button>
					</Link>
				</p>
			</div>
		)
	}
}