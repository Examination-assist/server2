import React, { Component } from 'react'

import axios from 'axios'

const ENDPOINT = require('./config')

export default class ApproveTranslator extends Component {
	state = { discipline: [], course: [], users: [], filtering: 'all' }
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

	setRadio(e) {
		this.setState({ filtering: e.target.value })
		const elems = this.state.users
		// if(this.state.filtering==='approved') {
		// };
		elems.sort((a, b) => {
			if (a.approved === 'Yes') return -1
		})
		console.log(elems)
	}

	search() {
		var input, filter, table, tr, td, i, txtValue
		input = document.getElementById('search_input')
		filter = input.value.toUpperCase()
		table = document.getElementById('Table')
		tr = table.getElementsByTagName('tr')
		console.log(input)
		for (i = 0; i < tr.length; i++) {
			td = tr[i].getElementsByTagName('span')[0]
			if (td) {
				txtValue = td.textContent || td.innerText
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = ''
				} else {
					tr[i].style.display = 'none'
				}
			}
		}
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
					<br />
					<input
					className="Search"
						type='text'
						id='search_input'
						onKeyUp={(e) => this.search(e)}
						placeholder='Search for names..'
					></input>
					<br />
					<div
						style={{ textAlign: 'left' }}
						onChange={(event) => this.setRadio(event)}
					>
						<input
							style={{ width: '20px' }}
							type='radio'
							id='All'
							name='approve-radio'
							value='all'
						/>
						<label for='all'>All</label>
						<br />
						<input
							style={{ width: '20px' }}
							type='radio'
							id='Approved'
							name='approve-radio'
							value='approved'
						/>
						<label for='approved'>Approved</label>
						<br />
						<input
							style={{ width: '20px' }}
							type='radio'
							id='Unapproved'
							name='approve-radio'
							value='unapproved'
						/>
						<label for='unapproved'>Unapproved</label>
					</div>
					<div className='ApproveTranslator'>
						<h3>Translator</h3>
						<table id='Table' className='tableApprove	'>
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
													<span>{elem.name} </span>
												</div>
												<div className='flexApproval'>
													<button
														onClick={() =>
															this.toggle(
																elem.user_id
															)
														}
														style={{
															margin: '0 20px',
														}}
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
