import React, { Component } from 'react'
// import autosize from 'autosize'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'
import Microphone from './Microphone'
import Record from './Record'
import './App.css'

// let fromData = [
// 	{
// 		lines: [
// 			'The shutting down of several newspapers’ print editions amid the coronavirus lockdown has magnified the problem of Google and Facebook snatching up news content from media organisations and making a profit for themselves.',
// 			'A pittance is paid to the publishers through Google’s and Facebook’s advertisements on the web pages it disseminates.',
// 		],
// 	},
// 	{
// 		lines: [
// 			'In fact, once the duopoly of Google and Facebook was established over the years, news organisations were made to compete with each other to get on Google News’ top results by paying to be displayed prominently.',
// 			'Google also introduced Google amp, whereby the web page would load faster but with a Google dominant url and Google ads served along with the content.',
// 		],
// 	},
// 	{
// 		lines: [
// 			'Similarly, Facebook forced news websites to accept a “revenue-sharing” model by which the social media outfit would pick up and share news content.',
// 			'The condition was that Facebook would be allowed to post advertisements along with it, a percentage of whose revenue would go to the media outfit.',
// 		],
// 	},
// 	{
// 		lines: [
// 			'Granted that Google and Facebook give news content legs.',
// 			'They take the story beyond the geographical limits of the newspaper’s reach.',
// 			'But if the disseminator makes nearly all the profits and shares mere peanuts with the producer of the content, how long will news production survive?',
// 		],
// 	},
// 	{
// 		lines: [
// 			'This question was not seriously asked by news organisations scrambling to cope with finding a revenue model on the internet in the early 2000s and getting nowhere, and therefore trying to best each other to get more clicks and shares by paying Google and Facebook.',
// 			'But now with no print advertising in the time of corona to cushion losses from having their content shared around for free, governments are stepping in on behalf of news organisations and telling Google and Facebook to play fair, and share.',
// 		],
// 	},
// ]

// let dataConvertTest = [
// 	[
// 		'कोरोनोवायरस लॉकडाउन के बीच कई अखबारों के प्रिंट संस्करणों को बंद करने से Google और फेसबुक की समस्या बढ़ गई है और मीडिया संगठनों से समाचार सामग्री छीनकर अपने लिए लाभ कमा रहे हैं।',
// 		'प्रकाशकों को Google के फेसबुक और फेसबुक के विज्ञापनों के माध्यम से भुगतान किया जाता है, यह उन वेब पेजों पर प्रसारित होता है।',
// 	],
// 	[
// 		'वास्तव में, एक बार जब Google और फेसबुक का द्वंद्व स्थापित हो गया था, तब समाचार संगठनों को एक-दूसरे के साथ प्रतिस्पर्धा करने के लिए Google समाचार के शीर्ष परिणामों को प्रमुखता से प्रदर्शित करने के लिए बनाया गया था।',
// 		'Google ने Google amp भी पेश किया, जिससे वेब पेज तेजी से लोड होगा लेकिन Google प्रमुख url और Google विज्ञापनों की सामग्री के साथ सेवा की जाएगी।',
// 	],
// 	[
// 		'इसी तरह, फेसबुक ने समाचार वेबसाइटों को एक "राजस्व-साझाकरण" मॉडल स्वीकार करने के लिए मजबूर किया, जिसके द्वारा सोशल मीडिया संगठन समाचार सामग्री को उठाएगा और साझा करेगा।',
// 		'शर्त यह थी कि फेसबुक को इसके साथ ही विज्ञापन पोस्ट करने की अनुमति होगी, जिसका प्रतिशत मीडिया के संगठन में जाएगा।',
// 	],
// 	[
// 		'दी है कि Google और Facebook समाचार सामग्री पैर देते हैं।',
// 		'वे समाचार पत्र की पहुंच की भौगोलिक सीमाओं से परे की कहानी लेते हैं।',
// 		'लेकिन अगर प्रसारकर्ता लगभग सभी लाभ कमाते हैं और सामग्री के निर्माता के साथ महज मूंगफली साझा करते हैं, तो समाचार उत्पादन कब तक जीवित रहेगा?',
// 	],
// 	[
// 		'यह सवाल गंभीरता से नहीं पूछा गया था कि समाचार संगठनों द्वारा 2000 के दशक की शुरुआत में इंटरनेट पर एक राजस्व मॉडल खोजने और कहीं नहीं मिलने का सामना करने के लिए, और इसलिए Google और फेसबुक को भुगतान करके अधिक क्लिक और शेयर प्राप्त करने के लिए एक दूसरे को सबसे अच्छा करने की कोशिश कर रहा था।',
// 		'लेकिन अब कोरोना के समय में कोई प्रिंट विज्ञापन नहीं होने के कारण, उनकी सामग्री को मुफ्त में साझा करने से लेकर गद्दी खोने तक, सरकारें समाचार संगठनों की ओर से कदम बढ़ा रही हैं और Google और फेसबुक को निष्पक्ष और साझा करने के लिए कह रही हैं।',
// 	],
// ]

const UserOptions = [
	{
		value: 'User1',
		label: 'User 1 | Engineering |EE BOOK to Telugu',
		language: 'Telugu',
	},
	{
		value: 'User2',
		label: 'User 2 | Engineering |EE BOOK to Tamil',
		language: 'Tamil',
	},
	{
		value: 'User3',
		label: 'User 3 | Yoga | Intro BOOK to Bengali',
		language: 'Bengali',
	},
	{
		value: 'User4',
		label: 'User 4 | Yoga |Yoga 1 BOOK to Hindi',
		language: 'Hindi',
	},
	{
		value: 'User5',
		label: 'User 5 | Self-Paced |Cultural BOOK to Marathi',
		language: 'Marathi',
	},
	{
		value: 'User6',
		label: 'User 6 | Self-Paced |Mind BOOK to Gujurati',
		language: 'Gujurati',
	},
]

const options = [
	'Hindi',
	'Bengali',
	'Gujarati',
	'Kannada',
	'Malayalam',
	'Marathi',
	'Tamil',
	'Telugu',
]
// const defaultOption = options[0]

class Row extends Component {
	state = {}
	componentDidMount() {
		this.setState({
			left: this.props.left,
			right: this.props.right,
			counter: this.props.counter,
			paragraph: this.props.paragraph,
		})
		// autosize(document.querySelectorAll('textarea'))
	}
	colors = ['#BFBBFF', '#C4E3FF']
	render() {
		return (
			<React.Fragment>
				<div className='outer'>
					<div
						style={
							this.state.active
								? {
										display: 'flex',
										width: '100%',
										fontWeight: '600',

										// backgroundColor: 'rgba(0,0,255,0.4)',
								  }
								: {
										display: 'flex',
										width: '100%',
										backgroundColor: `${
											this.colors[this.props.counter % 2]
										}`,
										fontWeight: '500',
								  }
						}
						className={`OuterRow `}
						// ${
						// 	this.props.counter % 2 === 0 ? 'Odd' : 'Even'
						// }
					>
						<div
							style={{
								textAlign: 'center',
								width: '4%',
								padding: '10px 0',
								border: '1px solid black',
								borderRight: '0',
							}}
							className='counter'
						>
							{this.state.counter}
						</div>
						<div
							style={{
								width: '33%',
								padding: '10px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'left',
							}}
							className='leftcont'
						>
							{this.state.left}
						</div>
						<div
							style={{
								width: '33%',
								padding: '10px',
								border: '1px solid black',
								overflow: 'hidden',
							}}
							className='rightcont'
						>
							<textarea
								style={
									this.state.active
										? {
												width: '100%',
												padding: '10px',
												height: '100%',
												outline: 'none',
												border: 'none',
												backgroundColor:
													'rgba(0,0,255,0)',
										  }
										: {
												resize: 'none',
												width: '100%',
												// borderRightColor: 'green',
												// borderRightStyle: 'solid',
												// borderRightWidth: '2px',
												height: '100%',
												outline: 'none',
												border: 'none',
												backgroundColor:
													'rgba(0,0,255,0)',
										  }
								}
								type='text'
								onBlurCapture={(e) => {
									this.props.updateRow(
										this.state.paragraph,
										this.state.counter - 1,
										e.target.value
									)
									this.setState({ active: false })
								}}
								onFocusCapture={() =>
									this.setState({ active: true })
								}
								value={this.props.getConverted(
									this.state.paragraph,
									this.state.counter - 1
								)}
								onChange={(e) =>
									this.props.updateRow(
										this.state.paragraph,
										this.state.counter - 1,
										e.target.value
									)
								}
							/>
						</div>
						<div
							style={{
								width: '30%',
								padding: '20px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'center !important',
							}}
						>
							<Microphone />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default class SplitText extends Component {
	UPLOAD_ENDPOINT =  require('./config')

	constructor(props) {
		super(props)
		this.update = this.update.bind(this)
		this.handleDropDown = this.handleDropDown.bind(this)

		this.state = {
			language: 'Hindi',	
			user: "user 1",
			book: 'book name',
			chapter: 'chapter',
			file: null,
			// statusRecorder: False,
			data: '',
			paragraphs: [''],
			toggle: false,
			view: '',
			inputarea: `
			`,
			count: 0,
			convert: [],
			converted: [],
			path_s: '',
			path_both: '',
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
		this.updateRow = this.updateRow.bind(this)
		this.save = this.save.bind(this)
		this.getConverted = this.getConverted.bind(this)
		this.handlerecord = this.handlerecord.bind(this)
	}

	componentDidMount() {
		console.log()
		this.setState({user : localStorage.getItem('user_id')})
		let k=UserOptions.filter(
				(e) => e.value === localStorage.getItem('user_id')
			)[0]
			this.setState({language:'Hindi'})
		console.log(localStorage.getItem('user_id'))
		
		document.getElementById('after').style.display = 'none'
	}

	updateRow(para, count, value) {
		// console.log(para,count)
		let converted = this.state.converted
		converted[para][count] = value
		this.setState({ converted: converted })
	}

	getConverted(para, count) {
		try {
			if (this.state.converted[para][count] !== undefined)
				return this.state.converted[para][count]
		} catch {
			return ''
		}
		// return this.state.converted[para][count] ? 'a' : 'b'
		// return this.state.converted[para][count]
	}

	update() {
		let paragraphs = this.state.inputarea.trim().split('\n')

		this.setState({ paragraphs: paragraphs })
		let convert = []
		let converted = []
		paragraphs.forEach((element) => {
			let line_converted = []

			let paragraph = { lines: [] }
			let lines = element.trim().split('.')
			lines.forEach((line) => {
				line = line.trim()
				if (line !== '') {
					if (line[line.length - 1] !== '?')
						if (line[line.length - 1] !== '!') line += '.'
					paragraph.lines.push(line)
					line_converted.push([])
				}
			})
			if (paragraph.lines.length > 0) {
				convert.push(paragraph)
				converted.push(line_converted)
			}
		})

		this.setState({ converted: converted })
		this.setState({ convert: convert })
		document.getElementById('after').style.display = 'block'
		document.getElementById('before').style.display = 'none'
		document.getElementById('before').style.visibility = 'hidden'
		this.forceUpdate()

		// this.setState({ converted: dataConvertTest })
		// const row = document.createElement('Row')
		// row.left = 'hello'
		// document.getElementById('after').appendChild(row)
	}
	async onSubmit(e) {
		e.preventDefault()
		let res = await this.uploadFile(this.state.file)
		this.setState({ data: res.data.text })
		this.setState({ inputarea: res.data.text })
		console.log(res.data.text, res)
	}
	onChange(e) {
		this.setState({ file: e.target.files[0] })
	}
	async uploadFile(file) {
		const formData = new FormData()
		formData.append('file', file)
		formData.append('filename', file.name)
		console.log(formData)
		return await axios.post(this.UPLOAD_ENDPOINT + 'upload', formData, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		})
	}

	async save() {
		let convertedParas = []
		for (let index = 0; index < this.state.convert.length; index++) {
			let lines = []
			const element = this.state.convert[index]
			element.lines.map((line) => lines.push(line))
			convertedParas.push(lines)
		}
		// console.log(convertedParas)
		const formData = new FormData()
		formData.append('input', JSON.stringify(convertedParas))
		formData.append('output', JSON.stringify(this.state.converted))
		formData.append('to_', this.state.language)
		formData.append('user_id', this.state.user)
		const result = await axios.post(
			`${this.UPLOAD_ENDPOINT}convert`,
			formData,
			{
				headers: {
					'content-type': 'multipart/form-data',
				},
			}
		)
		// console.log(str)
		this.setState({
			view: result.data.s,
			SingleText: result.data.s1,
			path_s: result.data.path_s,
			path_both: result.data.path_both,
		})
		console.log(result.data)
		// console.log(result.data)
		document.querySelector('#downloadButtons').style.display = 'block'
	}
	handleDropDown(e) {
		this.setState({ language: e.value })
		console.log(e.language)
	}

	paragraph = -1
	handlerecord() {
		this.setState({ toggle: !this.state.toggle })
		// console.log(document.querySelector('#textInButton'))
		// document.querySelector('#textInButton').style.display = 'block'
		console.log(this.state.toggle)
	}

	render() {
		const textSingle = {
			text: this.state.SingleText,
		}
		return (
			<React.Fragment>
				<div className='outerPehle' style={{ margin: '2rem 0' }}>
					<h1>Welcome {this.state.user}</h1>
					<h3>Book: {this.state.book} | Chapter: {this.state.chapter}</h3>
					<h1>Translating from English to {this.state.language}</h1>
					<div id='before'>
						<div className='uploadFile'>
							<form onSubmit={this.onSubmit}>
								
								<h3> Upload File</h3>
								<h5>Choose File to translate </h5>

								<input
									className='buttonTable'
									type='file'
									onChange={this.onChange}
								/>
								<form action="">
									<input type="text">Book Name</input>
									<input type="number">Chapter Number</input>
								</form>
								<button className='buttonTable' type='submit'>
									Upload File
								</button>
								
								<div className='dropDown'>
									<h5>Choose language to translate into:</h5>
									<Dropdown
										className='dropdownInner'
										options={options}
										onChange={this.handleDropDown}
										value={this.state.language}
										placeholder='Select Language'
									/>
								</div>
							</form>
						</div>
						<textarea
							name='inputarea'
							id='inputarea'
							cols='60'
							rows='40'
							style={{
								padding: '30px 50px',
							}}
							onChange={(e) =>
								this.setState({ inputarea: e.target.value })
							}
							value={this.state.inputarea}
						></textarea>
						<br />
						<input
							className='buttonTable'
							type='submit'
							value='Submit'
							onClick={() => this.update()}
						/>
					</div>
					<div id='after' className='after'>
						{this.state.convert.map((elem) => {
							this.paragraph += 1
							let counter = 0
							return elem.lines.map((line) => {
								counter += 1
								if (counter === 1)
									return (
										<React.Fragment>
											<br />
											<Row
												paragraph={this.paragraph}
												counter={counter}
												left={line}
												updateRow={this.updateRow}
												getConverted={this.getConverted}
											></Row>
										</React.Fragment>
									)
								return (
									<Row
										paragraph={this.paragraph}
										counter={counter}
										left={line}
										updateRow={this.updateRow}
										getConverted={this.getConverted}
									></Row>
								)
							})
						})}
						<button
							className='buttonTable saveButton '
							onClick={() => this.save()}
							type='submit'
						>
							<span className='buttonText'>
Save											</span>

							</button>
						<div className='container'>
							<div
								id='downloadButtons'
								className='downloadButtons'
								style={{
									margin: '0 auto',
									width: '80%',
									display: 'none',
								}}
							>
								<a href={this.state.path_s} rel="noopener noreferrer" target='_blank'>
									<button className='halfButton1'>
										Single
									</button>
								</a>{' '}
								<a href={this.state.path_both} rel="noopener noreferrer" target='_blank'>
									<button className='halfButton2'>
										Both
									</button>
								</a>
								<br />
								<div onClick={() => this.handlerecord()}>
									<button
										class='buttonTable'
										onClick={this.handlerecord}
									>
										{!this.state.toggle && (
											<span className='buttonText'>
												Record complete transcript
											</span>
										)}
										{this.state.toggle && (
											<span className='buttonText'>
												Cancel Recording{' '}
											</span>
										)}
									</button>
								</div>

								{this.state.toggle && (
									<Record style={{textAlign: "center"}}  {...textSingle}></Record>
								)}
								<br />
								<textarea
									name=''
									className='textArea'
									value={this.state.view}
									id=''
									cols='90'
									rows='40'
									disabled
								></textarea>
							</div>
						</div>
					</div>
					{/* {this.state.convert === [] ? (
					''
				) : (
					<DisplayText convert={this.state.convert}></DisplayText>
				)} */}
				</div>
			</React.Fragment>
		)
	}
}
