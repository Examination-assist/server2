import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './Start.css'
// import Table from './Table'
// import { Route } from 'react-router-dom'
// const optionsDiscipline = [
//     "Engineering & Technology",
//     "Self Paced",
//     "Yoga"
//   ];
const options = [
	{ value: 'User1', label: 'User 1 | Engineering |EE BOOK to Telugu' },
	{ value: 'User2', label: 'User 2 | Engineering |EE BOOK to Tamil' },
	{ value: 'User3', label: 'User 3 | Yoga | Intro BOOK to Bengali' },
	{ value: 'User4', label: 'User 4 | Yoga |Yoga 1 BOOK to Hindi' },
	{ value: 'User5', label: 'User 5 | Self-Paced |Cultural BOOK to Marathi' },
	{ value: 'User6', label: 'User 6 | Self-Paced |Mind BOOK to Gujurati' },
]
const defaultOption = options[0]

// var Select_List_Data = {
// 	choices: {
// 		Engineering: {
// 			text: [
// 				'BASIC SCIENCE',
// 				'ELECTRICAL ENGINEERING',
// 				'CIVIL ENGINEERING',
// 				'COMPUTER SCIENCE AND ENGINEERING',
// 				'HUMANITIES',
// 			],
// 			value: [
// 				'BASIC SCIENCE',
// 				'ELECTRICAL ENGINEERING',
// 				'CIVIL ENGINEERING',
// 				'COMPUTER SCIENCE AND ENGINEERING',
// 				'HUMANITIES',
// 				'BIOTECHNOLOGY',
// 				'METALLURGICAL ENGINEERING AND MATERIAL SCIENCE',
// 				'ELECTRONICS AND COMMUNICATION ENGINEERING',
// 				'CHEMICAL ENGINEERING',
// 				'MECHANICAL ENGINEERING',
// 			],
// 		},
// 		Self: {
// 			text: ['Multidisciplinary'],
// 			value: ['Multidisciplinary'],
// 		},
// 		Yoga: {
// 			text: ['Multidisciplinary'],
// 			value: ['Multidisciplinary'],
// 		},
// 	},
// }

class Start extends Component {
	// constructor() {
	// 	super()
	// 	// this.state = { drop2: 'Engineering' }
	// }
	componentDidMount() {
		// console.log(this.state)
		// console.log()
	}
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='totalCard'>
					<h1>Register</h1>
					<div className='start'>
						<div className='dropDownOuter'>
							<h5>Please select user types</h5>
							<Dropdown
								className='DropdownStart'
								options={options}
								value={defaultOption}
								onChange={(e) => {
									this.setState({ drop2: e.value }, () => {})
									localStorage.setItem('user_id', e.value)
									console.log(e.value)
								}}
								placeholder='Select User Type '
							/>

							<br />

							<a href='./table'>
								<button className='button'>
									<span className='buttonText'>Submit</span>
								</button>
							</a>
							{/* <Dropdown
							className='DropdownStart'
							options={
								Select_List_Data.choices[this.state.drop2].value
							}
							placeholder='Select '
						/> */}
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Start
