import React, {useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [sentFlag, setSendFlag] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_eigu1au', 'template_hrahja3', form.current, '_Tnn0nvaK0_xhVrhy')
			.then((result) => {
				console.log("Email: " + result.text);
				emailSent();
			}, (error) => {
				console.log("Email: " + error.text);
			});
	};

	const emailSent = () => {
		let userName = document.getElementById("user_name");
		let userEmail = document.getElementById("user_email");
		let message = document.getElementById("message");
		userName.value = "";
		userEmail.value = "";
		message.value = "";
		setSendFlag(true);
	};

	return (
		<div className="Contact section-container" id="contact">
			<div className="section-title">
				<hr /><p>Contact</p>
			</div>
			<div className='contact'>
				<form ref={form} onSubmit={sendEmail}>
					<p className='title'>Send me a message</p>
					{(sentFlag === true) ? <p className='warning'>Message Send!</p> : [] }
					<label htmlFor='user_name'>Name</label>
					<input type="text" name="user_name" id='user_name' />
					<label htmlFor='user_email'>Email</label>
					<input type="email" name="user_email" id='user_email' />
					<label htmlFor='message'>Message</label>
					<textarea name="message" id='message' rows="3"></textarea>
					<input type="submit" className='submit-button' value="Send" />
				</form>
			</div>
			<div className="find-me">
				<p className='title'>Find me here</p>
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
				<div className='email'>
					<i className="fa fa-envelope"></i>
					<p>john.deligiannis1@gmail.com</p> 
				</div>
			</div>
		</div>
	);
};

export default Contact;