import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

import './App.css'

import Table from './Table'
// import Record from  './Record'
// import Microphone from  './Microphone'
// import FileUploadForm from './FileUpload';
import Start from './Start'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Start></Start>
						</Route>
						<Route exact path='/table'>
							<Table></Table>
						</Route>
						{/* <Route exact path='/record'>
							<Record></Record>
						</Route> */}
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
