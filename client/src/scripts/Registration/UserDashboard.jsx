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
			<div  style = {{textAlign:"center"}}>
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
				<h2>My Work</h2>
				<div className="outer">

				<table>
					<tr>
						<th>Document ID</th>
						<th>Document Name</th>
						<th>Book Name</th>
						<th>Chapter Number</th>
						<th>Status </th>
						<th>Visit </th>
					</tr>

					{this.state.data.map((elem) => {
						return (
							<React.Fragment key={elem.doc_id}>
									<tr>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.doc_id}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.name}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.book_name}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.chapter_number}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.status}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												<Link
													to={`/translate?doc_id=${elem.doc_id}`}
												>
													Visit
												</Link>
											</span>
										</td>
									</tr>
							</React.Fragment>
						)
					})}
				</table>
					</div>
					<br />
				<p style={{ padding: '0 10px' }}>
					<Link to='/login'>
						<button className='button'>
							<div className='buttonText'>
								Logout from dashboard
							</div>
						</button>
					</Link>
				</p>
			</div>
		)
	}
}
