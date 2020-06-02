import React, { Component } from 'react'

import axios from 'axios'

const ENDPOINT = require('./config')

class Assign extends Component {
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
	}
	render() {
		return (
			<React.Fragment>
				<div className='card cardTranslator'>
					<h2> Assign Translator</h2>
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
					<div className='leftAssign'>
						<h3>Translator</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Translator</th>
							</tr>
							{this.state.users.map((elem) => {
								return elem.approved === 'Yes' ? (
									<tr>
										<td>
											<button className='buttonAssign'>
												<div className='buttonText'>
													{elem.name}{' '}
												</div>
											</button>
										</td>
									</tr>
								) : (
									''
								)
							})}
						</table>
					</div>
					<div className='rightAssign'>
						<h3>Lectures</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Lectures</th>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Lecture Name 1
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Lecture Name 2
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Lecture Name 3
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Lecture Name 4
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Lecture Name 5
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Lecture Name 6
										</div>
									</button>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Assign
