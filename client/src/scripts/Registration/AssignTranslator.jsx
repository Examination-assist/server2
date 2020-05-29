import React, { Component } from 'react'
class Assign extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='card'>
					<h2> Assign Translator</h2>
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
							<option value='Discipline 2'>BIOTECHNOLOGY</option>
							<option value='Discipline 1'>BIOTECHNOLOGY</option>
							<option value='Discipline 2'>BIOTECHNOLOGY</option>
							<option value='Discipline 3'>
								CHEMICAL ENGINEERING
							</option>
							<option value='Discipline 4'>
								CHEMICAL ENGINEERING
							</option>{' '}
						</select>
					</div>
					<div class='dropdown'>
						<select n class='dropbtn' name='Course' id='Course'>
						<option value='CourseName 1'>QUANTUM MECHANICS I</option>
							<option value='CourseName 2'>ENGINEERING GRAPHICS</option>
							<option value='CourseName 3'>TECHNICAL ENGLISH FOR ENGINEERS</option>
							<option value='CourseName 4'>INTRODUCTION TO PROFESSIONAL SCIENTIFIC COMMUNICATION</option>
							<option value='CourseName 1'>INTRODUCTION TO PROTEOMICS</option>
							<option value='CourseName 2'>BIOINFORMATICS: ALGORITHMS AND APPLICATIONS</option>
							<option value='CourseName 3'>COMPUTER AIDED DRUG DESIGN</option>
							<option value='CourseName 4'>TISSUE ENGINEERING</option>
							<option value='CourseName 1'>MASS TRANSFER OPERATIONS- II</option>
							<option value='CourseName 2'>FLUID AND PARTICLE MECHANICS</option>
						</select>
					</div>
					<div class='dropdown'>
						<select n class='dropbtn' name='Language' id='Language'>
						<option value='Language 1'>Tamil</option>
							<option value='Language 2'>Telugu</option>
							<option value='Language 3'>Hindi</option>
							<option value='Language 4'>Bengali</option>
							<option value='Language 4'>Gujarati</option>
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
