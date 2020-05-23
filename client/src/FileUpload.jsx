import React from 'react'
import axios from 'axios'

class FileUploadForm extends React.Component {
	UPLOAD_ENDPOINT = 'http://127.0.0.1:8080/'
	constructor(props) {
		super(props)
		this.state = {
			file: null,
			data: '',
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.uploadFile = this.uploadFile.bind(this)
	}
	async onSubmit(e) {
		e.preventDefault()
		let res = await this.uploadFile(this.state.file)
		this.setState({ data: res.data.text })
		// console.log(res.data)
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

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.onSubmit}>
					<h1> React File Upload Example</h1>
					<input type='file' onChange={this.onChange} />
					<button type='submit'>Upload File</button>
				</form>
            {this.state.data}
            </React.Fragment>
		)
	}
}

export default FileUploadForm
