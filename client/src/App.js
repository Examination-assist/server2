import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

import './App.css'

import Table from './Table'
// import Record from  './Record'
// import Microphone from  './Microphone'
// import FileUploadForm from './FileUpload';
import Review from './Review';
import Start from './Start'
import Login from './Registration/Login';

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
						<Route exact path='/review'>
							<Review></Review>
						</Route>
						<Route path='/login' component={Login}></Route>
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
