import React, { Component } from 'react'
class Assign extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='card'>
					<h2> Assign Reviewers</h2>
					<div class='dropdown'>
						<select n class='dropbtn' name='Discipline' id='Discipline'>
							<option value='Discipline 1'>Discipline 1</option>
							<option value='Discipline 2'>Discipline 2</option>
							<option value='Discipline 3'>Discipline 3</option>
							<option value='Discipline 4'>Discipline 4</option>
						</select>
					</div>

					<div class='dropdown'>
						<select n class='dropbtn' name='Language' id='Language'>
							<option value='Language 1'>Language 1</option>
							<option value='Language 2'>Language 2</option>
							<option value='Language 3'>Language 3</option>
							<option value='Language 4'>Language 4</option>
						</select>
					</div>
					<br />
					<br />
					<button className="button1 ">
						<span className="buttonText" style={{padding:" 0 10px"}}>

						Submit
						</span>
					</button>
					<br />
					<div className='leftAssign'>
						<h3>Reviewers</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Reveiwers</th>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Reviewer
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Reviewer
										</div>
									</button>
								</td>
							</tr>
						</table>
					</div>
					<div className='rightAssign'>
						<h3>Courses</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Courses</th>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Course Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Course Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Course Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Course Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Course Name
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											Course Name
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
