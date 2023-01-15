import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Jambotron from './Jambotron';
import Work from './Work';
import GetProjects from './GetProjects.js';
import Showcase from './Showcase';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
	const [showcaseProject, setShowcaseProject] = useState("");
	return (
		<div className="App">
			<div className='bg' />
			<Navbar />	
			<Jambotron />
			<Work projects={GetProjects()} setShowcaseProject={setShowcaseProject} />
			{(showcaseProject !== "") ? <Showcase projects={GetProjects()} showcaseProject={showcaseProject} setShowcaseProject={setShowcaseProject} /> : []}
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
