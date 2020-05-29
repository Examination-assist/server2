import React, { Component } from 'react'

const names = [
	'AVDHESH	TYAGI',
	'Babruvan Ramrao	Solunke',
	'Dinesh	Kulkarni',
	'Jayachandran 	Thangarasu',
	'Jeyali Laseetha	',
	'Jitendra M	Bakliwal',
	'Madumathi	K',
	'MAHESH SAKHARAM	NARKHEDE',
	'Nitin Pandurang	Sonaje',
	'Praveen Kumar	Padigela',
]
class Assign extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='card'>
					<h2> Assign Reviewers</h2>
					<div class='dropdown'>
						<select
							n
							class='dropbtn'
							name='Discipline'
							id='Discipline'
						>
							<option value='Discipline 1'>BASIC SCIENCE</option>
							<option value='Discipline 2'>
								CIVIL ENGINEERING
							</option>
							<option value='Discipline 3'>HUMANITIES</option>
							<option value='Discipline 4'>HUMANITIES</option>
							<option value='Discipline 1'>BIOTECHNOLOGY</option>
							<option>COMPUTER SCIENCE AND ENGINEERING </option>
							<option>ELECTRICAL ENGINEERING</option>
							<option>
								ELECTRONICS AND COMMUNICATION ENGINEERING
							</option>
							<option>
								METALLURGICAL ENGINEERING AND MATERIAL SCIENCE
							</option>
							<option value='Discipline 4'>
								CHEMICAL ENGINEERING
							</option>{' '}
							<option>MECHANICAL ENGINEERING</option>
							<option>Multidisciplinary</option>
						</select>
					</div>

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
					<br />
					<div className='leftAssign'>
						<h3>Reviewers</h3>
						<table className='tableAssign'>
							<tr>
								<th>Names of Reveiwers</th>
							</tr>
							{names.map((name) => {
								return <tr>
									<td>
										<button className='buttonAssign'>
											<div className='buttonText'>
												{name}
											</div>
										</button>
									</td>
								</tr>
							})}

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
											TISSUE ENGINEERING
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											QUANTUM MECHANICS I
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											ENGINEERING GRAPHICS
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											INTRODUCTION TO PROFESSIONAL
											SCIENTIFIC COMMUNICATION
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											INTRODUCTION TO PROTEOMICS
										</div>
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button className='buttonAssign'>
										<div className='buttonText'>
											BIOINFORMATICS: ALGORITHMS AND
											APPLICATIONS
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
