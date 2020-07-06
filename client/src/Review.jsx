import React, { Component } from 'react'
import 'react-dropdown/style.css'
import axios from 'axios'
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

// const options = [
// 	'Hindi',
// 	'Bengali',
// 	'Gujarati',
// 	'Kannada',
// 	'Malayalam',
// 	'Marathi',
// 	'Tamil',
// 	'Telugu',
// ]
// const defaultOption = options[0]

class Row extends Component {
	state = {
		statusKey:"In Progress",
		toggleAccept: false,
		toggleReject: false,
		toggleRedo: false,
	}
	componentDidMount() {
		this.setState({
			left: this.props.left,
			right: this.props.right,
			counter: this.props.counter,
			paragraph: this.props.paragraph,
		})
	}
	colors = ['#BFBBFF', '#C4E3FF']
	handleAccept(){
		this.setState({statusKey: "Accepted"})
		this.setState({toggleAccept: true})
		this.setState({toggleReject: false})
		this.setState({toggleRedo: false})
	}
	handleReject(){
		this.setState({statusKey: "Rejected"})
		this.setState({toggleReject: true})
		this.setState({toggleAccept: false})
		this.setState({toggleRedo: false})

	}
	handleRedo(){
		this.setState({statusKey: "Change required"})
		this.setState({toggleRedo: true})
		this.setState({toggleReject: false})
		this.setState({toggleAccept: false})
	}
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
								width: '30%',
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
								width: '30%',
								padding: '10px',
								border: '1px solid black',
								overflow: 'hidden',
							}}
							className='rightcont'
						>
							{this.state.left}
						</div>
						<div
							style={{
								width: '16%',
								padding: '10px',
								border: '1px solid black',
								overflow: 'hidden',
							}}
						>
							{this.state.statusKey}
						</div>
						<div
							className='buttonSet'
							style={{
								width: '20%',
								padding: '10px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'left',
							}}
						>
							<div className="accepted">

							<button onClick={() => this.handleAccept()} className='button ButtonReview Accept'>
								Accept
							</button>
							<br />
							{this.state.toggleAccept && (
									<div className="remarksRequired remarksAccept">

									<span classname='Remarks'>Remarks: </span>
									<br />
									<textarea type='text' className='textReview' />
									</div>
								)}
							
							</div>

							<br />
							<div className="rejected">

							<button onClick={() => this.handleReject()} className='button ButtonReview Reject'>
								Reject
							</button>
							<br />
							{this.state.toggleReject && (
									<div className="remarksRequired">

									<span classname='Remarks'>Remarks: </span>
									<br />
									<textarea type='text' className='textReview' />
									</div>
								)}
							
							</div>
							<br />
							<div className="redo">

							<button onClick={() => this.handleRedo()}  className='button ButtonReview Review'>
								Change
							</button>
							<br />
							{this.state.toggleRedo && (
									<div className="remarksRequired">

									<span classname='Remarks'>Remarks: </span>
									<br />
									<textarea type='text' className='textReview' />
									</div>
								)}
							</div>
							
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
			user: 'user 1',
			file: null,
			fileOriginal: null,
			// statusRecorder: False,
			data: '',
			paragraphs: [''],
			toggle: false,
			view: '',
			inputarea: `
			`,
			dataOriginal: '',
			inputareaOriginal: '',
			count: 0,
			convert: [],
			converted: [],
			path_s: '',
			path_both: '',
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onSubmit1 = this.onSubmit1.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onChange1 = this.onChange1.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
		this.updateRow = this.updateRow.bind(this)
		this.save = this.save.bind(this)
		this.getConverted = this.getConverted.bind(this)
		this.handlerecord = this.handlerecord.bind(this)
	}

	componentDidMount() {
		// console.log()
		this.setState({ user: localStorage.getItem('user_id') })
		let k = UserOptions.filter(
			(e) => e.value === localStorage.getItem('user_id')
		)[0]
		// this.setState({ language: k.language })
		console.log(localStorage.getItem('user_id'))

		document.getElementById('after').style.display = 'none'
	}

	updateRow(para, count, value) {
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
	}
	async onSubmit(e) {
		e.preventDefault()
		let res = await this.uploadFile(this.state.file)
		this.setState({ dataOriginal: res.data.text })
		this.setState({ inputareaOriginal: res.data.text })
		// console.log(res.data.text, res)
	}
	async onSubmit1(e) {
		e.preventDefault()
		let res = await this.uploadFile(this.state.fileOriginal)
		// console.log(res)
		this.setState({ data: res.data.text })
		this.setState({ inputarea: res.data.text })
		// console.log(res.data.text, res)
	}
	onChange(e) {
		this.setState({ file: e.target.files[0] })
	}
	onChange1(e) {
		this.setState({ fileOriginal: e.target.files[0] })
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
		// console.log(result.data)
		// console.log(result.data)
		// document.querySelector('#downloadButtons').style.display = 'block'
	}
	handleDropDown(e) {
		this.setState({ language: e.value })
		// console.log(e.language)
	}

	paragraph = -1
	handlerecord() {
		this.setState({ toggle: !this.state.toggle })
		console.log(this.state.toggle)
	}

	render() {
		return (
			<React.Fragment>
				<div className='outerPehle' style={{ margin: '2rem 0' }}>
					<h1>Welcome Evaluator</h1>
					{/* <h1>Translating from English to {this.state.language}</h1> */}
					<div id='before'>
						<div className='uploadFile'>
							<form onSubmit={this.onSubmit}>
								<h3> Upload File</h3>
								<h5>Choose original File</h5>
								<input
									className='buttonTable'
									type='file'
									onChange={this.onChange}
								/>
								<button className='buttonTable' type='submit'>
									Upload File
								</button>
							</form>
							<form onSubmit={this.onSubmit1}>
								{/* <h3> Upload File</h3> */}
								<h5>Choose File to Evaluate </h5>

								<input
									className='buttonTable'
									type='file'
									onChange={this.onChange1}
								/>
								<button className='buttonTable' type='submit'>
									Upload File
								</button>

							</form>
						</div>
						<h5>Original </h5>

						<textarea
							name='inputareaOriginal'
							id='inputareaOriginal'
							cols='30'
							rows='20'
							style={{
								padding: '30px 50px',
							}}
							onChange={(e) =>
								this.setState({
									inputareaOriginal: e.target.value,
								})
							}
							value={this.state.inputareaOriginal}
						></textarea>
						<h5>Submitted Translation </h5>

						<textarea
							name='inputarea'
							id='inputarea'
							cols='30'
							rows='20'
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
							<span className='buttonText'>Save </span>
						</button>
						<br />	
						<button
							className='buttonTable saveButton '
						
							type='submit'
						>
							<span className='buttonText'>Submit For Final Review </span>
						</button>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
