import React, { Component } from 'react'

import axios from 'axios'
const ENDPOINT = require('../Registration/config')

class CleaningEnglish extends Component {
	state = {
		courses: [],
		users: [],
		all_data: [],
		lectures: [],
		ytd: 'tgbNymZ7vqY',
	}
	async componentDidMount() {
		const all_data = await axios.post(ENDPOINT + 'links')
		console.log(all_data.data[0].course_name)
		this.setState({ all_data: all_data.data })

		let courses = []

		this.state.all_data.forEach((element) => {
			// console.log(element.course_name)
			if (!courses.includes(element.course_name))
				courses.push(element.course_name)
		})
		console.log(courses)
		this.setState({ courses: courses })

		// const course = await axios.post(
		// 	ENDPOINT + 'courses?get=course_name&discipline=' + 'BASIC SCIENCE'
		// )
		// this.setState({ course: course.data })

		// this.handleSubmit()
	}

	async execute(e) {
		let lectures = []
		const course = e.target.value
		this.state.all_data.forEach((element) => {
			if (element.course_name === course) {
				lectures.push(element)
			}
		})
		console.log(lectures[0])
		this.setState({ lectures: lectures })
		this.state.lectures.map((elem) => console.log(elem.lectureId))
	}

	async YTD(e) {
		let lec_id = e.target.value
		this.state.lectures.forEach((elem) => {
			// console.log(lec_id,elem)
			if (lec_id === elem.lectureId) {
				this.setState({ ytd: elem.YouTubeId })
			}
		})
		// let parent = document.getElementById('if-outer')
		// let child = document.getElementById('child')
		// parent.removeChild(child)
		// child = document.createElement('iframe')
		// child.setAttribute('width', '540')
		// child.setAttribute('height', '315')
		// child.setAttribute(
		// 	'src',
		// 	`https://www.youtube.com/embed/${this.state.ytd}`
		// )
		// parent.appendChild(child)
		// console.log(parent)
		// console.log(this.state.ytd)
		// this.forceUpdate()
	}

	// async handleSubmit() {
	// 	const elems = []
	// 	Array.prototype.slice
	// 		.call(document.querySelectorAll('select'))
	// 		.map((e) => {
	// 			elems.push(e.value)
	// 		})

	// 	const data = await axios.post(ENDPOINT + 'get_user_data', {
	// 		discipline: elems[0],
	// 		course_name: elems[1],
	// 		language: elems[2],
	// 	})
	// 	this.setState({ users: data.data })
	// }
	render() {
		return (
			<React.Fragment>
				<div className='card cardTranslator'>
					<div className='overflowCard'>
						<h2> English Cleaning</h2>
						<div class='dropdown'>
							<select
								onChange={(e) => this.execute(e)}
								class='dropbtn'
								name='Course'
								id='Course'
							>
								{this.state.courses.map((elem) => (
									<option value={elem}>{elem}</option>
								))}
							</select>
						</div>
						<div class='dropdown'>
							<select
								onChange={(e) => this.YTD(e)}
								class='dropbtn'
								name='lecture_name'
								id='lecture_name'
							>
								{this.state.lectures.map((elem) => (
									<option value={elem.lectureId}>
										{elem.lectureId}
									</option>
								))}
							</select>
						</div>
						<br />
						<br />

						<br></br>
						<br></br>
						<div id='if-outer'>
							<iframe
								id='child'
								width='540'
								height='315'
								src={`https://www.youtube.com/embed/${this.state.ytd}`}
							></iframe>
						</div>

						<div className='outer'>
							<div
								className='title'
								style={{ textAlign: 'center' }}
							>
								<h1>Review Complete Document</h1>
							</div>
							<div className='outBox'>
								<div className='leftBox'>
								<iframe 
								title = "Transcript"
								src="https://drive.google.com/file/d/102oxEXCaKcnHhAQVA9M01az86p-yvrDE/preview" className="box docBox"></iframe>
								</div>
								<div className='rightBox'>
									<textarea
										className='box'
										// rows='20'
									></textarea>
								</div>
							</div>

							<button className='buttonSubmit'>Submit</button>
						</div>
					</div>{' '}
				</div>
			</React.Fragment>
		)
	}
}

export default CleaningEnglish
