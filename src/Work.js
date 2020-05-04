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
			let utilized = [];
			project.utilized.forEach((tech, index)=>{
				utilized.push(
					<div className="tag">{tech}</div>
				)
			});

			let notAvailable;
			if(project.viewLink === "") 
				notAvailable = {"pointerEvents":"none", "opacity":"0.5"};

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
							href={project.sourceLink} 
							rel="noopener noreferrer" 
							target="_blank" >
								<i className="fa fa-code" />
								<p>Code</p>
						</a>
						<a 
							className="button"
							style={notAvailable}
							href={project.viewLink} 
							rel="noopener noreferrer"  
							target="_blank" >
								<i className="fa fa-play-circle" />
								<p>Demo</p>
						</a>
						<p className="description">{project.description}</p>
						<div className="technologies">
							<p>Utilized</p>
							{utilized}
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