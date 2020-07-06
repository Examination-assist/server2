import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const qs = require('query-string')
const SERVER = require('./config')

export default class Store extends Component {
	UPLOAD_ENDPOINT = SERVER

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
			inputarea: ``,
			translate: [],
		}
	}

	async save() {
		const result = await axios.post(
			this.UPLOAD_ENDPOINT + 'save_lines',
			{
				translate: this.state.translate,
				doc_id:this.state.doc_id,
				user_id: localStorage.getItem('user_id')
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
			SERVER+'about_document',
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
						{/* {this.state.result} */}
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
