import React, { Component } from 'react'
class Assign extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='cardReport card'>
					<h2> Reporting Translator</h2>
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
							<option >COMPUTER SCIENCE AND ENGINEERING </option>
							<option>ELECTRICAL ENGINEERING</option>
							<option>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
							<option>METALLURGICAL ENGINEERING AND MATERIAL SCIENCE</option>
							<option value='Discipline 4'>
								CHEMICAL ENGINEERING
							</option>{' '}
							<option>MECHANICAL ENGINEERING</option>
							<option>Multidisciplinary</option>
						</select>
					</div>
					<div class='dropdown'>
						<select
							n
							class='dropbtn'
							name='CourseName'
							id='CourseName'
						>
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
					<div className='Reporting'>
						<h3>Details</h3>
						<table className='tableAssign'>
							<tr>
								<th>Translator</th>
								<th>Discipline Name</th>
								<th>Course Name</th>
								<th>Language</th>
								<th>Total Lectures</th>
								<th>Finished Lectures</th>
								<th>Percentage </th>
								<th>Approvers</th>
								<th>Status</th>
								<th>Comments</th>
								<th>Delete</th>
							</tr>

							<tr>
								<td>Arjun	Saini</td>
								<td>CHEMICAL ENGINEERING</td>

								<td>Course 1</td>
								<td>Bengali</td>
								<td>20</td>
								<td>14</td>
								<td>70%</td>
								<td>Approver 1</td>
								<td>Under Review</td>
								<td>Working</td>
								<td>
									<button className='button Reject ButtonReview'>
										<span className='buttonText'>
											Delete
										</span>
									</button>
								</td>
							</tr>
							<tr>
								<td>	Madhura	Wagh
	</td>
								<td>BIOTECHNOLOGY</td>

								<td>Course 1</td>
								<td>Bengali</td>
								<td>20</td>
								<td>14</td>
								<td>70%</td>
								<td>Approver 1</td>
								<td>Under Review</td>
								<td>Working</td>
								<td>
									<button className='button Reject ButtonReview'>
										<span className='buttonText'>
											Delete
										</span>
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
