import React from 'react';
import './Jambotron.css';

function Jambotron() {
	return (
		<div className="Jambotron">
			<img className="bg" src={require('./images/test3.png')} />
			<div className="showcase">
				<div className="background-img">
					<img src={require('./images/responsive-template-filled1.png')} />
					<img src={require('./images/responsive-template-filled1.png')} />
				</div>
				<h1 className="title">Hi I'm John, a web developer</h1>
				<h2 className="subtitle">I'am currently studying computer 
					engineering and i enjoy building bluh bluh..</h2>
			</div>
			<a className="show-work" href="#work">
				<p>See my Work</p>
				<i className="fa fa-angle-down" />
			</a>
		</div>
	);
};

export default Jambotron;