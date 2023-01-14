import React from 'react';
import './Work.css';

const Work = ({projects, setShowcaseProject}) => {

	const toggleCollapse = (e) => {
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
	};

	return (
		<div className="Work section-container" id="work">
			<div className="section-title">
				<hr /><p>Work</p>
			</div>
			<div className="projects">
				{projects.map((project, projectIndex) =>
					<div className="project" key={"project" + projectIndex}>
						<div className="img-wrapper">
							<img 
								onClick={() => setShowcaseProject(project.name)} 
								id={"wrapper_" + project.name + "_" + project.numberOfImages}
								name="img"
								src={require(`${project.imagePath}`)}
							/>
							<i className="fa fa-search search" />
						</div>
						
						<button name="btn" className="collapse-btn" onClick={(e) => toggleCollapse(e)} >
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
								style={(project.viewLink === "") ? {"pointerEvents":"none", "opacity":"0.5"} : {}}
								href={project.viewLink} 
								rel="noopener noreferrer"  
								target="_blank" >
									<i className="fa fa-play-circle" />
									<p>Demo</p>
							</a>
							<p className="description">{project.description}</p>
							<div className="technologies">
								<p>Utilized</p>
								{project.utilized.map((technology, techIndex) => <div className="tag" key={"keytag_" + techIndex}>{technology}</div>)}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Work;