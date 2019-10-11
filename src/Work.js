import React from 'react';
import './Work.css';

function Work() {
	return (
		<div className="Work section-container" id="work">
			<div className="section-title">
				<hr /><p>Work</p>
			</div>
			<div className="projects">
			
				<div className="project">
					<img src={require('./images/markdown-desktop.png')} />
					<button className="collapse-btn">
						<div className="arrow">
							<i className="fa fa-angle-down" />
						</div>
						<div className="title">Pomodoro Clock</div>
					</button>
					<div className="collapse">
						<a className="button" href="#">
							<i className="fa fa-code" />
							<p>Code</p>
						</a>
						<a className="button" href="#">
							<i className="fa fa-play-circle" />
							<p>Demo</p>
						</a>
						<p className="description">
							Description. This is the description of the project
							which is goin to be displayed on this space. I have
							no idea what to write now so i write shit like this.
						</p>
						<p className="title">Technologies Used</p>
						<div className="technologies">
							<p className="sub-title">Front-End</p>
							<ul>
								<li><i className="fa fa-code" />Javascript</li>
								<li><i className="fa fa-code" />Javascript</li>
								<li><i className="fa fa-code" />Javascript</li>
							</ul>
						</div>
						<div className="technologies">
							<p className="sub-title">Back-End</p>
							<ul>
								<li><i className="fa fa-code" />Javascript</li>
								<li><i className="fa fa-code" />Javascript</li>
								<li><i className="fa fa-code" />Javascript</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;