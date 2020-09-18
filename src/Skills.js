import React from 'react';
import './Skills.css';

function Skills() {
	return (
		<div className="Skills section-container" id="work">
			<div className="section-title">
				<hr /><p>Skills</p>
			</div>
			<div className="skills">
				<div className="about">
					<div className="about-title">About me</div>
					<p>I am studying... add summary here</p>
				</div>
				<div className="categories">
					<div className="category">
						<i className="fa fa-code" />
						<p className="title">Front-End</p>
						<fieldset>
							<legend>Languages</legend>
							<ul>
								<li><p>HTML5</p></li>
								<li><p>CSS3</p></li>
								<li><p>Javascript</p></li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Frameworks</legend>
							<ul>
								<li><p>React</p></li>
							</ul>
						</fieldset>
					</div>
					<hr />
					<div className="category">
						<i className="fa fa-cogs" />
						<p className="title">Back-End</p>
						<fieldset>
							<legend>Languages</legend>
							<ul>
								<li>Java</li>
								<li>JSP</li>
								<li>PHP</li>
								<li>MySQL</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Technologies</legend>
							<ul>
								<li>REST API (Jax-rs)</li>
								<li>Swing</li>
								<li>Maven</li>
								<li>JWT</li>
							</ul>
						</fieldset>
					</div>
					<hr />
					<div className="category">
						<i className="fa fa-asterisk" />
						<p className="title">Other</p>
						<fieldset>
							<legend>Versioning Systems</legend>
							<ul>
								<li>Github</li>
								<li>Git</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Debug tools</legend>
							<ul>
								<li>Chrome Debug tools</li>
							</ul>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;