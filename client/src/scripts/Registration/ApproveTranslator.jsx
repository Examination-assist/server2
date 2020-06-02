import React, { Component } from 'react'

import axios from 'axios'

const ENDPOINT = require('./config')

export default class ApproveTranslator extends Component {
	state = { discipline: [], course: [], users: [] }
	async componentDidMount() {
		const discipline = await axios.post(ENDPOINT + 'courses?get=discipline')
		console.log(discipline)
		this.setState({ discipline: discipline.data })

		const course = await axios.post(
			ENDPOINT + 'courses?get=course_name&discipline=' + 'BASIC SCIENCE'
		)
		this.setState({ course: course.data })

		this.handleSubmit()
	}

	async execute(e) {
		const disp = e.target.value
		const course = await axios.post(
			ENDPOINT + 'courses?get=course_name&discipline=' + disp
		)
		this.setState({ course: course.data })
	}

	async handleSubmit() {
		const elems = []
		Array.prototype.slice
			.call(document.querySelectorAll('select'))
			.map((e) => {
				elems.push(e.value)
			})

		const data = await axios.post(ENDPOINT + 'get_user_data', {
			discipline: elems[0],
			course_name: elems[1],
			language: elems[2],
		})
		this.setState({ users: data.data })
		// console.log(data)
	}

	async toggle(user_id) {
		console.log(user_id)
		const data = await axios.post(ENDPOINT + 'approve', {
			user_id: user_id,
		})
		console.log(data)
		const users = this.state.users
		users.filter((elem) => {
			if (elem.user_id === user_id) {
				elem.approved = data.data
			}
		})
		console.log(users)
		this.setState({ users: users })
	}
	render() {
		return (
			<React.Fragment>
				<div className='card'>
					<h2> Approve Translator</h2>
					<div class='dropdown'>
						<select
							class='dropbtn'
							name='Discipline'
							id='Discipline'
							onClick={(e) => this.execute(e)}
						>
							{this.state.discipline.map((elem) => (
								<option value={elem.discipline}>
									{elem.discipline}
								</option>
							))}
						</select>{' '}
					</div>
					<div class='dropdown'>
						<select class='dropbtn' name='Course' id='Course'>
							{this.state.course.map((elem) => (
								<option value={elem.course_name}>
									{elem.course_name}
								</option>
							))}
						</select>
					</div>
					<br></br>
					<br></br>
					<div class='dropdown'>
						<select n class='dropbtn' name='Language' id='Language'>
							<option value='Hindi'>Hindi</option>
							<option value='Bengali'>Bengali</option>
							<option value='Marathi'>Marathi</option>
							<option value='Telugu'>Telugu</option>
							<option value='Tamil'>Tamil</option>
							<option value='Gujarati'>Gujarati</option>
							<option value='Kannada'>Kannada</option>
							<option value='Malayalam'>Malayalam</option>
						</select>
					</div>
					<br />
					<br />
					<button className='button1 '>
						<span
							className='buttonText'
							style={{ padding: ' 0 10px' }}
							onClick={(e) => this.handleSubmit()}
						>
							Submit
						</span>
					</button>
					<br />{' '}
					<div className=''>
						<h3>Translator</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Translator</th>
							</tr>
							{this.state.users.map((elem) => {
								return (
									<tr>
										<td>
											<button
												className='buttonAssign'
												style={{ display: 'flex' }}
											>
												<div className='buttonText'>
													{elem.name}{' '}
												</div>
												<div
													className='flex'
													style={{
														display: 'flex',
														width: '100%',
														justifyContent:
															'flex-end',
													}}
												>
													<button
														onClick={() =>
															this.toggle(
																elem.user_id
															)
														}
													>
														Toggle
													</button>
													{elem.approved}
												</div>
											</button>
										</td>
									</tr>
								)
							})}
						</table>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
