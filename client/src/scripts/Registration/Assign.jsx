import React, { Component } from 'react'
class Assign extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='card'>
					<h2> Assign</h2>
					<div class='dropdown'>
						<button class='dropbtn'>Discipline</button>
						<div class='dropdown-content'>
							<a href='#'>Discipline 1</a>
							<a href='#'>Discipline 2</a>
							<a href='#'>Discipline 3</a>
						</div>
					</div>

					<div class='dropdown'>
						<button class='dropbtn'>Language</button>
						<div class='dropdown-content'>
							<a href='#'>Language 1</a>
							<a href='#'>Language 2</a>
							<a href='#'>Language 3</a>
						</div>
					</div>
					<br />
					<div className='leftAssign'>
						<table className='tableAssign'>
							<tr>
								<th>Hello</th>
							</tr>
							<tr>
								<td>Jill</td>
							</tr>
						</table>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Assign
