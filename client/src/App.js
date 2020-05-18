import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

import './App.css'

import Table from './Table'
// import Record from  './Record'
// import Microphone from  './Microphone'
// import FileUploadForm from './FileUpload';
import Review from './Review';
import Start from './Start'
import Register from './scripts/Registration/Register';
import Login from './scripts/Registration/Login';
import Document from './scripts/Registration/Document';
import Store from './scripts/Registration/Store';
import Dashboard from './scripts/Registration/Dashboard';
import Translate from './scripts/Registration/Translate';

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
						<Route path='/register' component={Register}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/document' component={Document}></Route>
						<Route path='/store_document' component={Store}></Route>
						<Route path='/dashboard' component={Dashboard}></Route>
						<Route path='/translate' component={Translate}></Route>
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
