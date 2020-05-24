import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

import './App.css'
import Table from './Table'
// import Record from  './Record'
// import Microphone from  './Microphone'
// import FileUploadForm from './FileUpload';
// import Start from './Start'
import Review from './scripts/Registration/Review'
import Register from './scripts/Registration/Register'
import Login from './scripts/Registration/Login'
import LoginTranslator from './scripts/Registration/LoginTranslator'
import Document from './scripts/Registration/Document'
import Store from './scripts/Registration/Store'
import Dashboard from './scripts/Registration/Dashboard'
import Translate from './scripts/Registration/Translate'
import Text from './scripts/Registration/Text'
import FullReview from './scripts/Registration/FullReview'
import FullCreate from './scripts/Registration/FullCreate'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Dashboard></Dashboard>
						</Route>
						<Route exact path='/table'>
							<Table></Table>
						</Route>
						<Route path='/register' component={Register}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/loginTranslator' component={LoginTranslator}></Route>
						<Route path='/document' component={Document}></Route>
						<Route path='/store_document' component={Store}></Route>
						<Route path='/dashboard' component={Dashboard}></Route>
						<Route path='/translate' component={Translate}></Route>
						<Route path='/review' component={Review}></Route>
						<Route path='/test' component={Text}></Route>
						<Route path='/fullreview' component={FullReview}></Route>
						<Route path='/fullcreate' component={FullCreate}></Route>
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
