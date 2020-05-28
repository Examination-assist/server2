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
							<option value='Discipline 1'>Discipline 1</option>
							<option value='Discipline 2'>Discipline 2</option>
							<option value='Discipline 3'>Discipline 3</option>
							<option value='Discipline 4'>Discipline 4</option>
						</select>
					</div>
					<div class='dropdown'>
						<select
							n
							class='dropbtn'
							name='CourseName'
							id='CourseName'
						>
							<option value='CourseName 1'>CourseName 1</option>
							<option value='CourseName 2'>CourseName 2</option>
							<option value='CourseName 3'>CourseName 3</option>
							<option value='CourseName 4'>CourseName 4</option>
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
								<th>Percentage 		</th>
								<th>Translators</th>
								<th>Approvers</th>
								<th>Status</th>
								<th>Comments</th>
								<th>Delete</th>
							</tr>

							<tr>
							<td>Discippline 1</td>

								<td>Course 1</td>
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

								<td>Course 2</td>
								<td>Gujurati</td>
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
