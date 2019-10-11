import React from 'react';
import './Work.css';

class Work extends React.Component {
	constructor() {
		super();
		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	toggleCollapse(e) {
		let element = e.target;
		let button, collapse = undefined;

		if(element.name === "btn") {
			button = element;
			collapse = button.nextSibling;
		} else if(element.name === "img") {
			button = element.nextSibling;
			collapse = button.nextSibling;
		}

		button.classList.toggle("collapse-btn-active");
		if(collapse.style.maxHeight) {
			collapse.style.maxHeight = null;
		} else {
			collapse.style.maxHeight = collapse.scrollHeight+"px";
		}
	}

	render() {
		let projects = [];
		this.props.projectsToJson.forEach((project, index) => {
			projects.push(
				<div className="project" key={"project"+index}>
					<img 
						name="img"
						src={require(`${project.imagePath}`)}
						onClick={this.toggleCollapse} alt="project" 
					/>
					
					<button name="btn" className="collapse-btn" onClick={this.toggleCollapse} >
						<div className="arrow">
							<i className="fa fa-angle-down" />
						</div>
						<div className="title">{project.title}</div>
					</button>
					
					<div className="collapse">
						<a 
							className="button" 
							href="https://github.com/JohnDelta" 
							rel="noopener noreferrer" 
							target="_blank" >
								<i className="fa fa-code" />
								<p>Code</p>
						</a>
						<a 
							className="button" 
							href="https://github.com/JohnDelta" 
							rel="noopener noreferrer"  
							target="_blank" >
								<i className="fa fa-play-circle" />
								<p>Demo</p>
						</a>
						<p className="description">{project.description}</p>
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
			);
		});

		return (
			<div className="Work section-container" id="work">
				<div className="section-title">
					<hr /><p>Work</p>
				</div>
				<div className="projects">
					{projects}
				</div>
			</div>
		);
	}
};

export default Work;