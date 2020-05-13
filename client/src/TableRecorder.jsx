import React, { Component } from 'react'
import autosize from 'autosize'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Microphone from './Microphone'
import axios from 'axios'
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
							/>
						</div>
						<div
							style={{
								width: '30%',
								padding: '10px',
								border: '1px solid black',
								borderRight: '0',
								textAlign: 'left',
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
	UPLOAD_ENDPOINT = 'http://127.0.0.1:8080/'

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
	}

	componentDidMount() {
		// document.getElementById('after').style.display = 'none'
	}

	updateRow(para, count, value) {
		// console.log(para,count)
		let converted = this.state.converted
		converted[para][count] = value
		this.setState({ converted: converted }, () =>
			console.log(this.state.converted)
		)
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
					paragraph.lines.push(line)
					line_converted.push([])
				}
			})
			if (paragraph.lines.length > 0) {
				convert.push(paragraph)
				converted.push(line_converted)
			}
		})

		this.setState({ converted: converted }, () => console.log(converted))
		this.setState({ convert: convert })
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
		console.log(res.data.text)
	}
	onChange(e) {
		this.setState({ file: e.target.files[0] })
	}
	async uploadFile(file) {
		const formData = new FormData()
		formData.append('avatar', file)
		return await axios.post(this.UPLOAD_ENDPOINT, formData, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		})
	}

	// handleDropDown(e) {
	// 	this.setState({ language: e.target.value });
	// 	console.log(e.target.language)
	//   }
	paragraph = 0

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
							class='submitBefore'
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
				</div>
			</React.Fragment>
		)
	}
}
