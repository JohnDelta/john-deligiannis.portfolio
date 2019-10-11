import React from 'react';
import './Skills.css';

function Skills() {
	return (
		<div className="Skills section-container" id="work">
			<div className="section-title">
				<hr /><p>Skills</p>
			</div>
			<div className="skills">
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
								<li><p>Bootstrap</p></li>
							</ul>
						</fieldset>
					</div>
					<hr />
					<div className="category">
						<i className="fa fa-code" />
						<p className="title">Back-End</p>
						<fieldset>
							<legend>Languages</legend>
							<ul>
								<li>Java</li>
								<li>PHP</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Frameworks</legend>
							<ul>
								<li>Lavarel</li>
							</ul>
						</fieldset>
					</div>
					<hr />
					<div className="category">
						<i className="fa fa-code" />
						<p className="title">Other</p>
						<fieldset>
							<legend>Versioning Systems</legend>
							<ul>
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