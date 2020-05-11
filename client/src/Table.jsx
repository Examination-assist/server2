import React, { Component } from 'react'
import autosize from 'autosize'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'

let fromData = [
	{
		lines: [
			'The shutting down of several newspapers’ print editions amid the coronavirus lockdown has magnified the problem of Google and Facebook snatching up news content from media organisations and making a profit for themselves.',
			'A pittance is paid to the publishers through Google’s and Facebook’s advertisements on the web pages it disseminates.',
		],
	},
	{
		lines: [
			'In fact, once the duopoly of Google and Facebook was established over the years, news organisations were made to compete with each other to get on Google News’ top results by paying to be displayed prominently.',
			'Google also introduced Google amp, whereby the web page would load faster but with a Google dominant url and Google ads served along with the content.',
		],
	},
	{
		lines: [
			'Similarly, Facebook forced news websites to accept a “revenue-sharing” model by which the social media outfit would pick up and share news content.',
			'The condition was that Facebook would be allowed to post advertisements along with it, a percentage of whose revenue would go to the media outfit.',
		],
	},
	{
		lines: [
			'Granted that Google and Facebook give news content legs.',
			'They take the story beyond the geographical limits of the newspaper’s reach.',
			'But if the disseminator makes nearly all the profits and shares mere peanuts with the producer of the content, how long will news production survive?',
		],
	},
	{
		lines: [
			'This question was not seriously asked by news organisations scrambling to cope with finding a revenue model on the internet in the early 2000s and getting nowhere, and therefore trying to best each other to get more clicks and shares by paying Google and Facebook.',
			'But now with no print advertising in the time of corona to cushion losses from having their content shared around for free, governments are stepping in on behalf of news organisations and telling Google and Facebook to play fair, and share.',
		],
	},
]

let dataConvertTest = [
	[
		'कोरोनोवायरस लॉकडाउन के बीच कई अखबारों के प्रिंट संस्करणों को बंद करने से Google और फेसबुक की समस्या बढ़ गई है और मीडिया संगठनों से समाचार सामग्री छीनकर अपने लिए लाभ कमा रहे हैं।',
		'प्रकाशकों को Google के फेसबुक और फेसबुक के विज्ञापनों के माध्यम से भुगतान किया जाता है, यह उन वेब पेजों पर प्रसारित होता है।',
	],
	[
		'वास्तव में, एक बार जब Google और फेसबुक का द्वंद्व स्थापित हो गया था, तब समाचार संगठनों को एक-दूसरे के साथ प्रतिस्पर्धा करने के लिए Google समाचार के शीर्ष परिणामों को प्रमुखता से प्रदर्शित करने के लिए बनाया गया था।',
		'Google ने Google amp भी पेश किया, जिससे वेब पेज तेजी से लोड होगा लेकिन Google प्रमुख url और Google विज्ञापनों की सामग्री के साथ सेवा की जाएगी।',
	],
	[
		'इसी तरह, फेसबुक ने समाचार वेबसाइटों को एक "राजस्व-साझाकरण" मॉडल स्वीकार करने के लिए मजबूर किया, जिसके द्वारा सोशल मीडिया संगठन समाचार सामग्री को उठाएगा और साझा करेगा।',
		'शर्त यह थी कि फेसबुक को इसके साथ ही विज्ञापन पोस्ट करने की अनुमति होगी, जिसका प्रतिशत मीडिया के संगठन में जाएगा।',
	],
	[
		'दी है कि Google और Facebook समाचार सामग्री पैर देते हैं।',
		'वे समाचार पत्र की पहुंच की भौगोलिक सीमाओं से परे की कहानी लेते हैं।',
		'लेकिन अगर प्रसारकर्ता लगभग सभी लाभ कमाते हैं और सामग्री के निर्माता के साथ महज मूंगफली साझा करते हैं, तो समाचार उत्पादन कब तक जीवित रहेगा?',
	],
	[
		'यह सवाल गंभीरता से नहीं पूछा गया था कि समाचार संगठनों द्वारा 2000 के दशक की शुरुआत में इंटरनेट पर एक राजस्व मॉडल खोजने और कहीं नहीं मिलने का सामना करने के लिए, और इसलिए Google और फेसबुक को भुगतान करके अधिक क्लिक और शेयर प्राप्त करने के लिए एक दूसरे को सबसे अच्छा करने की कोशिश कर रहा था।',
		'लेकिन अब कोरोना के समय में कोई प्रिंट विज्ञापन नहीं होने के कारण, उनकी सामग्री को मुफ्त में साझा करने से लेकर गद्दी खोने तक, सरकारें समाचार संगठनों की ओर से कदम बढ़ा रही हैं और Google और फेसबुक को निष्पक्ष और साझा करने के लिए कह रही हैं।',
	],
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
		autosize(document.querySelectorAll('textarea'))
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
								width: '48%',
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
								width: '48%',
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
												borderRightColor: 'green',
												borderRightStyle: 'solid',
												borderRightWidth: '2px',
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
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default class SplitText extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/upload'

	constructor() {
		super()
		this.update = this.update.bind(this)
		// this.handleDropDown = this.handleDropDown.bind(this);

		this.state = {
			language: 'Hindi',
			file: null,
			data: '',
			paragraphs: [''],
			inputarea: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare odio non scelerisque finibus. Donec at erat ac libero finibus fermentum id lacinia orci. Suspendisse interdum libero mollis, vulputate lectus laoreet, vehicula quam. Vestibulum velit felis, consequat ac ullamcorper vitae, malesuada nec mi. Maecenas venenatis ligula vel facilisis semper. Vestibulum rhoncus purus et facilisis rhoncus. Quisque eu sapien feugiat tellus interdum maximus id eget turpis. Ut laoreet ipsum nisi, eget vehicula tellus aliquet eget. Donec euismod lorem et vestibulum faucibus. Fusce euismod tempor diam, volutpat molestie nibh sollicitudin vitae. Cras nec finibus nisl.

Nullam et nisi tortor. Maecenas euismod nunc aliquet urna blandit laoreet. Praesent ut tortor nisi. Integer et ex mauris. Quisque eu metus sed dui viverra molestie et eget libero. Sed egestas leo quis sem ultricies mollis. Fusce eget efficitur tellus, iaculis molestie nisi.
        
Ut vestibulum ornare malesuada. Fusce tristique euismod nisi ac dapibus. Proin arcu sapien, pharetra et lacus non, posuere molestie elit. Quisque venenatis nibh non elit porta auctor. Aenean quis justo sem. Fusce suscipit nibh eu cursus varius. Vivamus facilisis sed odio sit amet tincidunt. Cras fringilla massa pharetra orci tincidunt, at molestie nunc dapibus. Cras at sem dolor. Vestibulum luctus neque ac mauris ultrices iaculis. Ut ac tempor nulla. Suspendisse malesuada sem ut bibendum sagittis. Maecenas ultrices est ac urna dictum, a blandit dui porttitor. Donec elit eros, malesuada at nunc a, faucibus vestibulum nisi.
        
Curabitur eget tempor urna, bibendum aliquet ipsum. Nullam viverra, mauris ut efficitur mollis, odio sem viverra metus, fermentum condimentum libero turpis vel magna. In et ultricies mi. Morbi vestibulum, purus sit amet hendrerit commodo, augue metus maximus mi, eget condimentum dui orci a ante. Nam pretium turpis lacus, tempus pretium mi eleifend at. Cras nec leo et elit fringilla accumsan sit amet et lectus. Pellentesque vitae ante sem. In hac habitasse platea dictumst.
        
Curabitur iaculis quis erat quis feugiat. Pellentesque metus purus, scelerisque tempus ullamcorper id, consequat a elit. Praesent efficitur vehicula tempus. Pellentesque in ultricies enim, a molestie massa. Vivamus vitae consectetur risus. In vel ullamcorper augue, tincidunt efficitur ipsum. Cras cursus sapien nec laoreet tempus.
        
Cras augue ipsum, finibus eu feugiat in, vehicula eget nunc. Mauris interdum purus eu velit euismod tristique. Etiam ultrices ut nunc vel tincidunt. Etiam eu dui sem. Fusce eget tortor in elit vestibulum congue quis vitae ligula. Nam interdum, purus vel facilisis dignissim, ex ligula cursus metus, sit amet posuere leo sapien non eros. Integer efficitur, purus quis ornare aliquam, nulla dui dictum tellus, ut vestibulum nisi massa nec est. Cras malesuada vitae dui in ullamcorper. Quisque dictum interdum nunc, ut mollis eros ullamcorper eu. Sed viverra, libero id laoreet rhoncus, nibh leo egestas ligula, ac congue ipsum tellus et mauris.
        
Cras libero turpis, convallis pellentesque viverra consequat, tristique vitae quam. Vivamus ipsum tellus, fermentum quis massa at, consequat auctor nulla. Nulla ultricies nunc ut posuere volutpat. Aliquam cursus, justo varius efficitur cursus, eros nisl faucibus ante, eu congue lectus lectus fermentum lorem. Ut eget scelerisque urna. Pellentesque maximus felis ac turpis faucibus, dapibus pharetra tellus aliquet. Aliquam vel commodo enim. Sed placerat neque elit, sit amet pellentesque odio maximus ut. Duis sollicitudin ullamcorper odio eu bibendum. Aliquam non feugiat mauris.
        
Mauris fermentum purus tellus, eu volutpat turpis viverra in. Proin pulvinar urna ac mauris luctus, vitae accumsan dui rhoncus. Duis lobortis pellentesque arcu, at egestas nisi tincidunt nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer imperdiet venenatis est. Praesent id tincidunt diam. Pellentesque facilisis nec massa in laoreet. Phasellus ut leo tincidunt massa vestibulum condimentum eu eget turpis. Duis quis ex consectetur, mollis orci id, varius nisl. Mauris porttitor, eros et molestie luctus, velit tellus consequat enim, vitae volutpat nisl odio quis neque. Mauris tincidunt scelerisque enim sed tempus. Duis sit amet enim libero. Proin scelerisque dolor diam, ornare varius nulla mollis at. Duis blandit vestibulum sem, id mollis libero vehicula eget. Aliquam accumsan vel nisl id venenatis. Maecenas vitae lectus efficitur, sagittis nunc volutpat, dapibus mi.
        
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dapibus est in odio luctus varius. Vivamus a eros quam. Suspendisse in felis in neque sagittis viverra. Duis vestibulum et lorem non egestas. Nam efficitur nisl non tellus cursus feugiat. Suspendisse sapien nisi, interdum quis ex id, malesuada commodo lorem. Aliquam lobortis mauris quis tortor imperdiet, eget mollis quam feugiat. Etiam in tellus ex. Cras molestie lacinia vulputate. Nulla et elit volutpat, hendrerit ipsum sit amet, dapibus lorem.
        
Proin quis molestie turpis. Etiam bibendum lobortis mauris, sit amet posuere purus tempus quis. Suspendisse auctor, nunc eget ornare vulputate, quam sapien dapibus sem, rutrum sagittis velit turpis sed augue. Maecenas convallis nulla lobortis, tempor turpis sit amet, pharetra purus. Sed commodo placerat fringilla. In hac habitasse platea dictumst. Proin pharetra et ex a fringilla. Phasellus eros justo, viverra sit amet rhoncus at, dictum id lectus. Nam tincidunt eros non sagittis blandit. Nunc in venenatis erat. Vestibulum dictum velit sit amet commodo ornare.`,
			count: 0,
			convert: [],
			converted: [],
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
		this.updateRow = this.updateRow.bind(this)
		this.save = this.save.bind(this)
	}

	componentDidMount() {
		// document.getElementById('after').style.display = 'none'
	}

	updateRow(para, count, value) {
		// console.log(para,count)
		let converted = this.state.converted
		converted[para][count] = value
		this.setState({ converted: converted })
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
		this.setState({ convert: convert }, () =>
			console.log(JSON.stringify(this.state.convert))
		)
		document.getElementById('after').style.display = 'block'
		document.getElementById('before').style.display = 'none'
		document.getElementById('before').style.visibility = 'hidden'
		this.forceUpdate()

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
		return await axios.post(this.UPLOAD_ENDPOINT, formData, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		})
	}

	save(){
		
	}

	// handleDropDown(e) {
	// 	this.setState({ language: e.target.value });
	// 	console.log(e.target.language)
	//   }
	paragraph = -1

	render() {
		return (
			<React.Fragment>
				<div className='outerPehle' style={{ margin: '2rem 0' }}>
					<div id='before'>
						<div className='uploadFile'>
							<form onSubmit={this.onSubmit}>
								<h1> Upload File</h1>
								<input type='file' onChange={this.onChange} />
								<button type='submit'>Upload File</button>
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
											></Row>
										</React.Fragment>
									)
								return (
									<Row
										paragraph={this.paragraph}
										counter={counter}
										left={line}
										updateRow={this.updateRow}
									></Row>
								)
							})
						})}
					</div>
					{/* {this.state.convert === [] ? (
					''
				) : (
					<DisplayText convert={this.state.convert}></DisplayText>
				)} */}
				<input type="submit" value="Save" onClick={()=>this.save()}/>
				</div>
			</React.Fragment>
		)
	}
}
