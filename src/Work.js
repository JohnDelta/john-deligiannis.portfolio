import React from 'react';
import './Work.css';
import Showcase from './Showcase.js';

class Work extends React.Component {
	constructor() {
		super();
		this.state = {
			showcaseFlag: false,
			projectName: "",
			projectNumberOfImages: 0
		};
		this.toggleCollapse = this.toggleCollapse.bind(this);
		this.toggleShowcase = this.toggleShowcase.bind(this);
	}

	toggleShowcase(e) {
		this.setState({
			showcaseFlag: !this.state.showcaseFlag
		});
		if(this.state.showcaseFlag) {
			let projectName = e.target.id.split("_")[1];
			let projectNumberOfImages = e.target.id.split("_")[2];
			this.setState({
				projectName: projectName,
				projectNumberOfImages: projectNumberOfImages
			});
		}
	}

	toggleCollapse(e) {
		let element = e.target;
		let button, collapse = undefined;

		if(element.name === "btn") {
			button = element;
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
					<div className="img-wrapper" onClick={this.toggleShowcase} id={"wrapper_"+project.name+"_"+project.numberOfImages} >
						<img 
							name="img"
							src={require(`${project.imagePath}`)}
						/>

						<i className="fa fa-search search" />
					</div>
					
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

		let showcaseDiv = "";
		if(this.state.showcaseFlag) {
			showcaseDiv = <Showcase 
				toggleShowcase={this.toggleShowcase} 
				projectName={this.state.projectName} 
				projectNumberOfImages={this.state.projectNumberOfImages}
			/>;
		}

		return (
			<div className="Work section-container" id="work">
				{showcaseDiv}
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