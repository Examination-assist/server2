import React, { Component } from 'react'
class Assign extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='cardReport card'>
					<h2> Reporting</h2>
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
							</option>
						</select>
					</div>
					<div class='dropdown'>
						<select
							n
							class='dropbtn'
							name='CourseName'
							id='CourseName'
						>
							<option value='CourseName 1'>
								QUANTUM MECHANICS I
							</option>
							<option value='CourseName 2'>
								ENGINEERING GRAPHICS
							</option>
							<option value='CourseName 3'>
								TECHNICAL ENGLISH FOR ENGINEERS
							</option>
							<option value='CourseName 4'>
								INTRODUCTION TO PROFESSIONAL SCIENTIFIC
								COMMUNICATION
							</option>
							<option value='CourseName 1'>
								INTRODUCTION TO PROTEOMICS
							</option>
							<option value='CourseName 2'>
								BIOINFORMATICS: ALGORITHMS AND APPLICATIONS
							</option>
							<option value='CourseName 3'>
								COMPUTER AIDED DRUG DESIGN
							</option>
							<option value='CourseName 4'>
								TISSUE ENGINEERING
							</option>
							<option value='CourseName 1'>
								MASS TRANSFER OPERATIONS- II
							</option>
							<option value='CourseName 2'>
								FLUID AND PARTICLE MECHANICS
							</option>
						</select>
					</div>
					<div class='dropdown'>
						<select n class='dropbtn' name='Language' id='Language'>
							<option value='Language 1'>Hindi</option>
							<option value='Language 2'>Bengali</option>
							<option value='Language 3'>Tamil</option>
							<option value='Language 4'>Teleugu</option>
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
					<div className='Reporting'>
						<h3>Details</h3>
						<table className='tableAssign'>
							<tr>
								<th>Discipline Name</th>
								<th>Course Name</th>
								<th>Language</th>
								<th>Total Lectures</th>
								<th>Finished Lectures</th>
								<th>Percentage </th>
								<th>Translators</th>
								<th>Approvers</th>
								<th>Status</th>
								<th>Comments</th>
								<th>Delete</th>
							</tr>

							<tr>
								<td>BASIC SCIENCE</td>

								<td>QUANTUM MECHANICS I</td>
								<td>Bengali</td>
								<td>20</td>
								<td>14</td>
								<td>70%</td>
								<td>Translator 1</td>
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
								<td>CIVIL ENGINEERING</td>
								<td>ENGINEERING GRAPHICS</td>
									<td>Tamil</td>
								<td>16</td>
								<td>8</td>
								<td>50%</td>
								<td>Translator 2</td>
								<td>Approver 3</td>
								<td>In Progress</td>
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
