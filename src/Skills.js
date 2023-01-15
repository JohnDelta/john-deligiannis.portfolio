import React from 'react';
import './Skills.css';

const Skills = () => {
	return (
		<div className="Skills section-container" id="skills">
			<div className="section-title">
				<hr /><p>Skills</p>
			</div>
			<div className="skills">
				<div className="about">
					<div className="about-title">About me</div>
					<p>
						Recent graduate with an Integrated Master's Degree in Informatics and Computer
						Engineering having a specialty in Software Engineering.
					</p>
					<p>
						Highly motivated to work as a software engineer, eager to learn and follow
						software design patterns and work with new technologies and solutions.
					</p>
					<p>
						With background knowledge including analysis, design and development of 
						information systems written in Java and web-based applications developed
						using HTML, CSS, React, REST APIs and MySQL.
					</p>
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
								<li>PHP</li>
								<li>MySQL</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Technologies</legend>
							<ul>
								<li>REST API</li>
								<li>Spring</li>
								<li>JPA</li>
								<li>Hibernate</li>
								<li>Maven</li>
								<li>JWT</li>
								<li>JSP</li>
								<li>Servlet</li>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;