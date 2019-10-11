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
						title="Visit my github profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-github"></i> 
					</a>
					<a 
						href="https://github.com/JohnDelta" 
						target="_blank" 
						title="Visit my github profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-linkedin-square"></i> 
					</a>
					<a 
						href="https://github.com/JohnDelta" 
						target="_blank" 
						title="Visit my github profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-at"></i> 
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;