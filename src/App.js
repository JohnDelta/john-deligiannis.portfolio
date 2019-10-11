import React from 'react';
import Navbar from './Navbar.js';
import Jambotron from './Jambotron.js';
import Work from './Work.js';
import Footer from './Footer.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Jambotron />
			<Work />
			<Footer />
		</div>
	);
}

export default App;
