import React from 'react';
import Navbar from './Navbar.js';
import Jambotron from './Jambotron.js';
import Work from './Work.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './App.css';
import getProjectsToJson from './getProjectsToJson.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			projectsToJson : getProjectsToJson()
		}
	}
	
	render() {
		return (
			<div className="App">
				<Navbar />
				<Jambotron />
				<Work projectsToJson={this.state.projectsToJson}/>
				<Skills />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
