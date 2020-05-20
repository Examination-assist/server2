import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import RowReview from './RowReview'

const qs = require('query-string')

export default class Translate extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'

	constructor() {
		super()
		this.state = {
			doc_id: '',
			result: '',
			lines: [],
			back: false,
		}

		this.save = this.save.bind(this)

		this.back = this.back.bind(this)
	}
	back() {
		this.setState({ back: true })
	}

	async save() {
	}

	async componentDidMount() {
		// console.log('ok')
		let doc_id = qs.parse(this.props.location.search)['doc_id']
		this.setState({ doc_id: doc_id })

		let result = await axios.post(
			'http://localhost:8000/api/about_document',
			{
				doc_id: doc_id,
			}
		)

		this.setState({ result: JSON.stringify(result.data) })

		let data = await axios.post(
			'http://localhost:8000/api/view_lines',
			{ doc_id: this.state.doc_id },
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)

		this.setState({
			lines: data.data.translate.sort((a, b) => a.count < b.count),
		})
	}


	render() {
		return (
			<React.Fragment>
				{this.state.doc_id === undefined ? (
					<Redirect to='/'></Redirect>
				) : (
					<div>
						{this.state.lines.map((line) => {
							return (
								<React.Fragment key={line.translate_id}>
									{line.line_counter === 1 ? <br /> : ''}
									<RowReview
									status={line.status}
										line_counter={line.line_counter}
										count={line.count}
										left={line.input}
										right={line.output}
									/>
									
								</React.Fragment>

							)
						})}
						{/* <p style={{ textAlign: 'center' }}>
							<span style={{ width: '40%' }}>
								<input
									type='button'
									value='Save as draft'
									onClick={() => this.save()}
								/>
							</span>
							<span style={{ width: '40%' }}>
								<input
									type='button'
									value='Save and Back'
									onClick={async () => {
										this.save()
										this.back()
										this.forceUpdate()
									}}
								/>
							</span>
							<span style={{ width: '40%' }}>
								<input
									type='button'
									value='Send for final review'
									onClick={async () => {
										this.save()
										axios.post(
											'http://localhost:8000/api/review_document',
											{
												doc_id:this.state.doc_id
											},
											{
												headers: {
													user_id: localStorage.getItem(
														'user_id'
													),
												},
											}
										)
										this.back()
									}}
								/>
							</span>
						</p> */}
						<div className="outerreview">
						<h1>Review Complete Document</h1>
						<button
									className='button ButtonReview ButtonReviewneeche Accept'
								>
									Send for final review
								</button>	
							
								<button
									
									className='button  ButtonReview ButtonReviewneeche Reject'
								>
									Reject
								</button>	

						</div>
						
						{this.state.back === true ? (
							<Redirect to='/dashboard'></Redirect>
						) : (
							''
						)}
					</div>
				)}
			</React.Fragment>
		)
	}
}
