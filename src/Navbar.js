import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<div className="Navbar">
			<div className="nav-header">
				<img className="nav-logo" src={require('./images/logo.png')} />
				<p className="name">John Deligiannis</p>
				<p className="title">Web Developer</p>
				<div className="nav-contact">
				  <a 
					href="https://github.com/JohnDelta"
					target="_blank" 
					title="Visit my github profile!"
					rel="noopener noreferrer" >
						<i className="fa fa-github" /> 
				  </a>
				  <a 
					href="https://github.com/JohnDelta"
					target="_blank" 
					title="Visit my github profile!"
					rel="noopener noreferrer" >
						<i className="fa fa-linkedin-square" /> 
				  </a>
				</div>
			</div>
		  <div className="nav-button">
			<div />
			<div />
			<div />
		  </div>
		  <ul className="nav-links">
			<li> <a className="nav-link" href="#work">Work</a> </li>
			<li> <a className="nav-link" href="#skills">Skills</a> </li>
			<li> <a className="nav-link" href="#contact">Contact</a> </li>
		  </ul>
		  <div className="nav-slider"><i className="fa fa-angle-up" /></div>
		</div>
	);
};

export default Navbar;