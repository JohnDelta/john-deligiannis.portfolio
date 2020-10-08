import React from 'react';
import './Contact.css';

function Contact() {
	return (
		<div className="Contact section-container" id="contact">
			<div className="section-title">
				<hr /><p>Contact</p>
			</div>
			<div className="contact">
				<p>Find me here</p>
				<div className="info">
					<a 
						href="https://github.com/JohnDelta" 
						target="_blank" 
						title="Visit my Github profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-github"></i> 
					</a>
					<a 
						href="https://www.linkedin.com/in/john-deligiannis-917736196/" 
						target="_blank" 
						title="Visit my LinkedIn profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-linkedin-square"></i> 
					</a>
				</div>
				<p className="email" >Email: john.deligiannis1@gmail.com</p>
			</div>
		</div>
	);
};

export default Contact;