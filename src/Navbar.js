import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
	constructor() {
		super();
		
		// Toggle navbar on mobile view
		this.toggleNavbar = this.toggleNavbar.bind(this);

		/*
			Call this function to update the position of the nav slider.
			If argument is given, it moves the slider in the desired position (in pixels).
			Elsewhere it find the section closer to user's view and move it there.
		*/
		this.updateSliderPos = this.updateSliderPos.bind(this);

		// Call this function to find the vh height given the scroll height
		this.vh = this.vh.bind(this);

		// Call this function to get the section number which the user is looking at.
		this.getSectionNumber = this.getSectionNumber.bind(this);

		// Marks the proper tab in navbar as the user scrolls in each section.
		this.navSliderScrollListener = this.navSliderScrollListener.bind(this);

		// Keeps the nav slider updated in its position each time the window resizes
		this.navSliderResizeListener = this.navSliderResizeListener.bind(this);

		/*
			Enables mouse over and out listeners.
			Moves nav slider betweeen links when mouse is over on navbar and return it to its place in mouseout.
		*/
		this.navSliderOnMouseOverListener = this.navSliderOnMouseOverListener.bind(this);
		this.navSliderOnMouseLeaveListener = this.navSliderOnMouseLeaveListener.bind(this);
	}

	componentDidMount() {
		this.navSliderResizeListener();
		this.navSliderScrollListener();
	}

	toggleNavbar() {
		// Move navBar from right(out) to left(in)
		let navLinks = document.querySelector(".nav-links");
		navLinks.classList.toggle("nav-links-active");
	
		// Move links from bottom to their normal position
		let navLink = document.querySelectorAll(".nav-link");
		navLink.forEach((link, index) => {
			if(link.style.animation === "") {
				link.style.animation = "nav-link-active-anim "+(index/7+0.5)+"s ease-out forwards";
			} else {
				link.style.animation = "";
			}
		});
	
		//Move bars of nav-button
		let navButtonLines = document.querySelectorAll(".nav-button div");
		navButtonLines.forEach((line, index) => {
			line.classList.toggle("nav-button-line"+(index+1)+"-active");
		});
	}

	updateSliderPos(x = false) {
		let slider = document.querySelector(".nav-slider");
		let section = this.getSectionNumber();
	
		// Hide slider if its the main section(jambotron)
		if(section === -1 && x === false) {
			slider.style.opacity = "0";
			section = 0;
		} else {
			slider.style.opacity = "1";
		}
		
		if(x === false) {
			// Return the slider in its selected tab
			let links = document.querySelectorAll(".nav-link");
			links.forEach((link, index) => {
				if(index === section) {
					let rect = link.getBoundingClientRect();
					slider.style.left = ((rect.left+rect.right-16)/2)+"px"; //Find the middle of the box.(Approximately)
				}
			});
		} else {
			slider.style.left = x+"px";
		}
	}

	vh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (h!==0) ? (v / h)*100 : 0;
	}

	getSectionNumber() {
		let enabledSection = {
			index: -1,
			offset: 1000
		};
		let documentScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop || 0);
		let sections = document.querySelectorAll(".section-container");
		
		sections.forEach((section, index) => {
			let sectionScrollTop = Math.max(section.offsetTop || 0);
			let fromTopVh = this.vh(documentScrollTop);
			let offsetBetween = Math.abs(documentScrollTop - sectionScrollTop);
	
			/*
				Update enabled section only if the offset between from top scroll and section from top height 
				have the smallest difference AND the user is not in the first section (jambotron).
			*/
			if(enabledSection.offset > offsetBetween) {
				enabledSection = {
					index: index,
					offset: offsetBetween
				}
				if(fromTopVh < 80) {
					enabledSection = {
						index: -1,
						offset: 1000
					}
				}
			}
		});
		return enabledSection.index;
	}

	navSliderScrollListener() {
		this.updateSliderPos();
	
		let links = document.querySelectorAll(".nav-link");
		let prevSection = -1;
		
		window.onscroll = () => {
			let section = this.getSectionNumber();
			// Update chosen link
			if(prevSection !== section) {
				links.forEach((link, index) => { //works only in mobile view
					if(index === section) {
						link.classList.add("nav-link-active");
					} else {
						link.classList.remove("nav-link-active");
					}
				});
				this.updateSliderPos();
				prevSection = section;
			}
		};
	}

	navSliderResizeListener() {
		window.onresize = () => {
			this.updateSliderPos();
		};
	}

	navSliderOnMouseOverListener(e) {
		let link = e.target;
		let rect = link.getBoundingClientRect();
		this.updateSliderPos((rect.left+rect.right-16)/2); //Give the middle of the box.(Approximately)
	}

	navSliderOnMouseLeaveListener() {
		this.updateSliderPos();
	}

	render() {
		return (
			<div className="Navbar">
				<div className="nav-header">
					<img className="nav-logo" src={require('./images/logo.svg')} alt="John Deligiannis's Logo" />
					<p className="name">John Deligiannis</p>
					<p className="title">Web Developer</p>
					<div className="nav-contact">
					  <a 
						href="https://github.com/JohnDelta"
						target="_blank" 
						title="Visit my github profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-github" /> 
					  </a>
					  <a 
						href="https://github.com/JohnDelta"
						target="_blank" 
						title="Visit my github profile!"
						rel="noopener noreferrer" >
							<i className="fa fa-linkedin-square" /> 
					  </a>
					</div>
				</div>
			  <div className="nav-button" onClick={this.toggleNavbar}>
				<div />
				<div />
				<div />
			  </div>
			  <ul className="nav-links">
				<li> 
					<a 
						className="nav-link" 
						href="#work" 
						onMouseOver={this.navSliderOnMouseOverListener}
						onMouseLeave={this.navSliderOnMouseLeaveListener} >
							Work
					</a> 
				</li>
				<li> 
					<a 
						className="nav-link" 
						href="#skills" 
						onMouseOver={this.navSliderOnMouseOverListener}
						onMouseLeave={this.navSliderOnMouseLeaveListener} >
							Skills
					</a> 
				</li>
				<li> 
					<a 
						className="nav-link" 
						href="#contact" 
						onMouseOver={this.navSliderOnMouseOverListener}
						onMouseLeave={this.navSliderOnMouseLeaveListener} >
							Contact
					</a> 
				</li>
			  </ul>
			  <div className="nav-slider"><i className="fa fa-angle-up" /></div>
			</div>
		);
	}
	
};

export default Navbar;