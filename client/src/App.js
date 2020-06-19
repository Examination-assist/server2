import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
import AssignReviewer from './scripts/Registration/AssignReviewer'
import AssignTranslator from './scripts/Registration/AssignTranslator'
import ReportingCourse from './scripts/Registration/ReportingCourse'
import ReportingTranslator from './scripts/Registration/ReportingTranslator'
import ReportingApprover from './scripts/Registration/ReportingApprover'
import ApproveTranslator from './scripts/Registration/ApproveTranslator'
import CleaningEnglish from './scripts/Cleaning/CleaningEnglish'
import AssignCleaning from './scripts/Cleaning/AssignCleaning'
import ApproveCleaning from './scripts/Cleaning/ApproveCleaning'
import Row from './scripts/Registration/Row'
class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Switch>
						<Route path='/link'>
						
							<Link to='/table'>Table</Link>
							<br/><Link to='/register'>Register</Link>
							<br/><Link to='/login'>Login</Link>
							<br/><Link to='/loginTranslator'>Translator Login</Link>
							<br/><Link to='/document'>Document</Link>
							<br/><Link to='/store_document'>Store Document</Link>
							<br/><Link to='/dashboard'>Dashboard</Link>
							<br/><Link to='/translate'>Translate</Link>
							<br/><Link to='/review'>Review</Link>
							<br/><Link to='/test'>Test</Link>
							<br/><Link to='/fullreview'>Full Review</Link>
							<br/><Link to='/fullcreate'>Full Create</Link>
							<br/><Link to='/assignreviewer'>Assign Reviewer</Link>
							<br/><Link to='/assigntranslator'>Assign Translator</Link>
							<br/><Link to='/reportingcourse'>Assign Course</Link>
							<br/><Link to='/ReportingApprover'>Reporting Approver</Link>
							<br/><Link to='/ReportingTranslator'>Reporting Translator</Link>
							<br/><Link to='/approveTranslator'>Approve Translator</Link>
							<br/><Link to='/cleaningEnglish'>CleaningEnglish</Link>
							<br/><Link to='/assignCleaning'>AssignCleaning</Link>
							<br/><Link to='/approveCleaning'>ApproveCleaning</Link>
							
						</Route>
						<Route exact path='/'>
							<Dashboard></Dashboard>
						</Route>
						<Route exact path='/table'>
							<Table></Table>
						</Route>
						<Route path='/approveTranslator' component={ApproveTranslator}></Route>
						<Route path='/register' component={Register}></Route>
						<Route path='/login' component={Login}></Route>
						<Route
							path='/loginTranslator'
							component={LoginTranslator}
						></Route>
						<Route path='/document' component={Document}></Route>
						<Route path='/store_document' component={Store}></Route>
						<Route path='/dashboard' component={Dashboard}></Route>
						<Route path='/translate' component={Translate}></Route>
						<Route path='/review' component={Review}></Route>
						<Route path='/test' component={Text}></Route>
						<Route
							path='/fullreview'
							component={FullReview}
						></Route>
						<Route
							path='/fullcreate'
							component={FullCreate}
						></Route>
						<Route
							path='/assignreviewer'
							component={AssignReviewer}
						></Route>
						<Route
							path='/assigntranslator'
							component={AssignTranslator}
						></Route>
						<Route
							path='/reportingcourse'
							component={ReportingCourse}
						></Route>
						<Route
							path='/ReportingApprover'
							component={ReportingApprover}
						></Route>
						<Route
							path='/ReportingTranslator'
							component={ReportingTranslator}
						></Route>
	<Route
							path='/cleaningEnglish'
							component={CleaningEnglish}
						></Route>

<Route
							path='/AssignCleaning'
							component={AssignCleaning}
						></Route>
							<Route
							path='/ApproveCleaning'
							component={ApproveCleaning}
						></Route>
<Route
							path='/Row'
							component={Row}
						></Route>





					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
