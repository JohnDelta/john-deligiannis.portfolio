import React from 'react';
import './Jambotron.css';

function Jambotron() {
	return (
		<div className="Jambotron">
			<img class="bg" src="./test3.png" />
			<div class="showcase">
				<div class="background-img">
					<img src="./responsive-template-filled1.png" />
					<img src="./responsive-template-filled2.png" />
				</div>
				<h1 class="title">Hi I'm John, a web developer</h1>
				<h2 class="subtitle">I'am currently studying computer 
					engineering and i enjoy building bluh bluh..</h2>
			</div>
			<a class="show-work" href="#work">
				<p>See my Work</p>
				<i class="fa fa-angle-down" />
			</a>
		</div>
	);
};

export default Jambotron;