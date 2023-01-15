import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar  = () => {

	useEffect(() => {
		navSliderScrollListener();
	}, []);

	const toggleNavbar = () => {
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
	};

	const vh = (v) => {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (h!==0) ? (v / h)*100 : 0;
	};

	const getSectionNumber = () => {
		let enabledSection = {
			index: -1,
			offset: 1000
		};
		let documentScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop || 0);
		let sections = document.querySelectorAll(".section-container");
		
		sections.forEach((section, index) => {
			let sectionScrollTop = Math.max(section.offsetTop || 0);
			let fromTopVh = vh(documentScrollTop);
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
	};

	const navSliderScrollListener = () => {
		let links = document.querySelectorAll(".nav-link");
		let prevSection = -1;
		
		window.onscroll = () => {
			let section = getSectionNumber();
			// Update chosen link
			if(prevSection !== section) {
				links.forEach((link, index) => { //works only in mobile view
					if(index === section) {
						link.classList.add("nav-link-active");
						//window.location.href = "#" + link.innerHTML.toLocaleLowerCase();
					} else {
						link.classList.remove("nav-link-active");
					}
				});
				prevSection = section;
			}
		};
	};

	return (
		<div className="Navbar">
			<div className="nav-header">
				<img className="nav-logo" src={require(`${"./images/logo-2.png"}`)} alt="John Deligiannis's Logo" />
				<p className="name">John Deligiannis</p>
				<p className="title">Software Engineer</p>
				<div className="nav-contact">
					<a 
					href="https://github.com/JohnDelta"
					target="_blank" 
					title="Visit my Github profile!"
					rel="noopener noreferrer" >
						<i className="fa fa-github" /> 
					</a>
					<a 
					href="https://www.linkedin.com/in/john-deligiannis-917736196/"
					target="_blank" 
					title="Visit my LinkedIn profile!"
					rel="noopener noreferrer" >
						<i className="fa fa-linkedin-square" /> 
					</a>
				</div>
			</div>
			<div className="nav-button" onClick={toggleNavbar}>
			<div />
			<div />
			<div />
			</div>
			<ul className="nav-links">
			<li><a className="nav-link" href="#work">Work</a></li>
			<li><a className="nav-link" href="#skills">Skills</a></li>
			<li><a className="nav-link" href="#contact">Contact</a></li>
			</ul>
		</div>
	);
};

export default Navbar;