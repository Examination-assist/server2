import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

import './App.css'

import Table from './Table'
// import TableRecorder from  './TableRecorder'
// import Microphone from  './Microphone'
// import FileUploadForm from './FileUpload';
import Start from './Start'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Switch>
						<Route path='/'>
							<Start></Start>
						</Route>
						<Route path='/table'>
							<Table></Table>
						</Route>
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
