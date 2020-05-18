import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const qs = require('query-string')

export default class Store extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'

	constructor() {
		super()
		this.onSubmit = this.onSubmit.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
		this.save = this.save.bind(this)
		this.onChange = this.onChange.bind(this)
		this.state = {
			doc_id: ' ',
			result: '',
			book: 'book name',
			chapter: 'chapter',
			file: null,
			inputarea: `The shutting down of several newspapers’ print editions amid the coronavirus lockdown has magnified the problem of Google and Facebook snatching up news content from media organisations and making a profit for themselves. A pittance is paid to the publishers through Google’s and Facebook’s advertisements on the web pages it disseminates.
In fact, once the duopoly of Google and Facebook was established over the years, news organisations were made to compete with each other to get on Google News’ top results by paying to be displayed prominently. Google also introduced Google amp, whereby the web page would load faster but with a Google dominant url and Google ads served along with the content.
 
Similarly, Facebook forced news websites to accept a “revenue-sharing” model by which the social media outfit would pick up and share news content. The condition was that Facebook would be allowed to post advertisements along with it, a percentage of whose revenue would go to the media outfit.
Granted that Google and Facebook give news content legs. They take the story beyond the geographical limits of the newspaper’s reach. But if the disseminator makes nearly all the profits and shares mere peanuts with the producer of the content, how long will news production survive?
This question was not seriously asked by news organisations scrambling to cope with finding a revenue model on the internet in the early 2000s and getting nowhere, and therefore trying to best each other to get more clicks and shares by paying Google and Facebook. But now with no print advertising in the time of corona to cushion losses from having their content shared around for free, governments are stepping in on behalf of news organisations and telling Google and Facebook to play fair, and share.
Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies alongside Amazon, Apple, and Facebook.
`,
			translate: [],
		}
	}

	async save() {
		const result = await axios.post(
			this.UPLOAD_ENDPOINT + 'save_lines',
			{
				translate: this.state.translate,
				doc_id:this.state.doc_id
			},
			{
				headers: { user_id: localStorage.getItem('user_id') },
			}
		)
		if(result)
		{
			this.setState({success:true})
		}
	}

	update() {
		let paragraphs = this.state.inputarea.trim().split('\n')
		let translate = []
		// this.setState({ paragraphs: paragraphs })
		let para = 1
		let count = 0
		paragraphs.forEach((element) => {
			let paragraph = { lines: [] }
			let lines = element.trim().split('.')

			let line_counter = 0
			lines.forEach((line) => {
				line = line.trim()
				if (line !== '') {
					if (line[line.length - 1] !== '?')
						if (line[line.length - 1] !== '!') line += '.'
					paragraph.lines.push(line)
				}
				if (line.trim() !== '') {
					count += 1
					line_counter += 1
					let obj = {
						count: count,
						para: para,
						line_counter: line_counter,
						input: line,
					}
					translate.push(obj)
				}
			})
			if (paragraph.lines.length > 0) {
				para += 1
			}
		})
		this.setState({ translate: translate }, () => {
			console.log(this.state)
			this.save()
		})
		this.forceUpdate()
	}

	onChange(e) {
		this.setState({ file: e.target.files[0] })
	}

	async onSubmit(e) {
		e.preventDefault()
		let res = await this.uploadFile(this.state.file)
		this.setState({ data: res.data.text })
		this.setState({ inputarea: res.data.text })
		console.log(res.data.text, res)
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
		// console.log()
	}

	async componentDidMount() {
		let doc_id = qs.parse(this.props.location.search)['doc_id']
		this.setState({ doc_id: doc_id })

		const result = await axios.post(
			'http://localhost:8000/api/about_document',
			{
				doc_id: doc_id,
			}
		)
		this.setState({ result: JSON.stringify(result.data) })
	}

	render() {
		return (
			<div>
				{this.state.doc_id === undefined ? (
					<Redirect to='/'></Redirect>
				) : (
					// ''
					<div className='outerPehle' style={{ margin: '2rem 0' }}>
						{this.state.result}
						<div className='uploadFile'>
							<form onSubmit={this.onSubmit}>
								<h3> Upload File</h3>
								<h5>Choose File to translate </h5>

								<input
									className='buttonTable'
									type='file'
									onChange={this.onChange}
								/>

								<button className='buttonTable' type='submit'>
									Upload File
								</button>
								
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
						{this.state.success===true?<Redirect to={`/translate?doc_id=${this.state.doc_id}`}></Redirect>:''}
					</div>
				)}
			</div>
		)
	}
}
