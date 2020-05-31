import React, { Component } from 'react'

import axios from 'axios'

const ENDPOINT = require('./config')

class Assign extends Component {
	state = { discipline: [], course: [] }
	async componentDidMount() {
		const discipline = await axios.post(ENDPOINT + 'courses?get=discipline')
		console.log(discipline)
		this.setState({ discipline: discipline.data })
	}

	async execute(e) {
		const disp = e.target.value
		const course = await axios.post(
			ENDPOINT + 'courses?get=course_name&discipline=' + disp
		)
		this.setState({ course: course.data })
	}
	render() {
		return (
			<React.Fragment>
				<div className='card'>
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
						<select n class='dropbtn' name='Course' id='Course'>
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
							<option value='Language 3'>Hindi</option>
							<option value='Language 4'>Bengali</option>
							<option>Marathi</option>
							<option value='Language 2'>Telugu</option>
							<option value='Language 1'>Tamil</option>
							<option value='Language 4'>Gujarati</option>
							<option>Kannada</option>
							<option>Malayalam</option>
						</select>
					</div>
					<br />
					<br />
					<button className='button1 '>
						<span
							className='buttonText'
							style={{ padding: ' 0 10px' }}
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
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Translator
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Translator
										</div>
									</button>
								</td>
							</tr>
						</table>
					</div>
					<div className='rightAssign'>
						<h3>Chapters</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Chapters</th>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Chapter Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Chapter Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Chapter Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Chapter Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Chapter Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Chapter Name
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
