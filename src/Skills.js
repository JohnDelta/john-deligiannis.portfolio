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
						John has an <strong>Integrated Master's Degree in Informatics and Computer
						Engineering</strong> with a specialty in <strong>Software Engineering</strong>. He has worked as a <strong>full-stack developer</strong> and contributed to the design, development and testing 
						of large projects for a real-world, web-based application. 
					</p>
					<p>
						He is highly motivated to work as a software engineer, eager to learn and follow
						software design principles and patterns, and work on new technologies and solutions.
					</p>
					<p>
						From his work experience and personal projects, he has developed strong fundamentals in
						software development and he acquired knowledge in <strong>OOP</strong> principles with <strong>Java</strong> and <strong>C#</strong>. 
						SQL and NoSQL Databases with <strong>MySQL</strong> and <strong>Microsoft SQL</strong>. Knowledge of web protocols
						and technologies. Web applications that follow <strong>MVC</strong> and <strong>Microservices</strong> designs built with <strong>Java</strong>, <strong>Jsp</strong>, <strong>Spring Boot</strong>, <strong>Spring MVC</strong> and <strong>React</strong>.
						Worked on web-based solutions with <strong>ASP.NET WebForms</strong>, <strong>VB.NET</strong>, <strong>DevExpress</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>JQuery</strong>.
						Experienced with source control systems <strong>(Git)</strong> and hosting services <strong>(GitHub)</strong>.
						Understanding of <strong>unit and integration testing</strong> concepts.
						Was part of a team that worked with the <strong>SCRUMBAN</strong> project management framework.
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
								<li>C#</li>
								<li>SQL</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Technologies</legend>
							<ul>
								<li>RESTful API</li>
								<li>ASP.NET WebForms</li>
								<li>Spring MVC</li>
								<li>JPA</li>
								<li>Maven</li>
								<li>JWT</li>
								<li>JSP</li>
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
							<legend>Project Management</legend>
							<ul>
								<li>Scrumban</li>
							</ul>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;