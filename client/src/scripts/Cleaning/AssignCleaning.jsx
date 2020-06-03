import React, { Component } from 'react'
import axios from 'axios'

const ENDPOINT = require('./config')

const names = [
	'AVDHESH	TYAGI',
	'Babruvan Ramrao	Solunke',
	'Dinesh	Kulkarni',
	'Jayachandran 	Thangarasu',
	'Jeyali Laseetha	','AVDHESH	TYAGI',
	'Babruvan Ramrao	Solunke',
	'Dinesh	Kulkarni',
	'Jayachandran 	Thangarasu',
	'Jeyali Laseetha	','AVDHESH	TYAGI',
	'Babruvan Ramrao	Solunke',
	'Dinesh	Kulkarni',
	'Jayachandran 	Thangarasu',
	'Jeyali Laseetha	',
	
]
class Assign extends Component {
	state = { discipline: [], course: [] }
	async componentDidMount() {
		const discipline = await axios.post(ENDPOINT + 'courses?get=discipline')
		console.log(discipline)
		this.setState({ discipline: discipline.data })

		const course = await axios.post(
			ENDPOINT + 'courses?get=course_name&discipline=' + 'BASIC SCIENCE'
		)
		this.setState({ course: course.data })
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
					<h2> Assign Cleaners</h2>
					<div class='dropdown'>
						<select
							n
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
						</select>
					</div>
					{/* <div class='dropdown'>
						<select class='dropbtn' name='Course' id='Course'>
							{this.state.course.map((elem) => (
								<option value={elem.course_name}>
									{elem.course_name}
								</option>
							))}
						</select>
					</div> */}

				
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
					<br />
					<div className='leftAssign'>
						<h3>Teachers</h3>
							<div className="divTableOuter">
						<table className='tableAssign'>
							<tr>
								<th>Names of Teachers</th>
							</tr>

							{names.map((name) => {
								return (
									<tr>
										<td>
											<button className='buttonAssign'>
												<div className='buttonText'>
													{name}
												</div>
											</button>
										</td>
									</tr>
								)
							})}

							
						</table>
							</div>
					</div>
					<div className='rightAssign'>
						<h3>Courses</h3>
						<div className="divTableOuter">

						<table className='tableAssign'>
							<tr>
								<th>Names of Courses</th>
							</tr>
							{this.state.course.map((elem) => {
								return (
									<tr>
										<td>
											<button className='buttonAssign'>
												<div className='buttonText'>
													{elem.course_name}
												</div>
											</button>
										</td>
									</tr>
								)
							})}
						</table>
					</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Assign
