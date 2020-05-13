import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
// const optionsDiscipline = [
//     "Engineering & Technology",
//     "Self Paced",
//     "Yoga"
//   ];
const optionsDiscipline = [
	{ value: 'Engineering', label: 'Engineering & Technology' },
	{ value: 'Self', label: 'Self Paced' },
	{ value: 'Yoga', label: 'Yoga' },
]

var Select_List_Data = {
	choices: {
		Engineering: {
			text: [
				'BASIC SCIENCE',
				'ELECTRICAL ENGINEERING',
				'CIVIL ENGINEERING',
				'COMPUTER SCIENCE AND ENGINEERING',
				'HUMANITIES',
			],
			value: [
				'BASIC SCIENCE',
				'ELECTRICAL ENGINEERING',
				'CIVIL ENGINEERING',
				'COMPUTER SCIENCE AND ENGINEERING',
				'HUMANITIES',
				'BIOTECHNOLOGY',
				'METALLURGICAL ENGINEERING AND MATERIAL SCIENCE',
				'ELECTRONICS AND COMMUNICATION ENGINEERING',
				'CHEMICAL ENGINEERING',
				'MECHANICAL ENGINEERING',
			],
		},
		Self: {
			text: ['Multidisciplinary'],
			value: ['Multidisciplinary'],
		},
		Yoga: {
			text: ['Multidisciplinary'],
			value: ['Multidisciplinary'],
		},
	},
}

class Start extends Component {
	constructor() {
		super()
		this.state = { drop2: 'Engineering' }
	}
	componentDidMount() {
		console.log(this.state)
		console.log()
	}
	state = {}
	render() {
		return (
			<div className='totalCard'>
				<h1>Register</h1>
				<div className='start'>
					<div className='dropDownOuter'>
						<h5>Please select Discipline</h5>
						<Dropdown
							className='DropdownStart'
							options={optionsDiscipline}
							onChange={(e) => {
								this.setState({ drop2: e.value }, () => {})
							}}
							placeholder='Select Your Discipline'
						/>
						<br />
						<Dropdown
							className='DropdownStart'
							options={
								Select_List_Data.choices[this.state.drop2].value
							}
							placeholder='Select'
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Start
