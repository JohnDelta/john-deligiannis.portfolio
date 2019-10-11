/*
	style.js contains all .js used to style the page.
*/

/*
	Contains the animation and toggle of navbar (nav-links) in its mobile form
*/
const navButtonClickListener = () => {
    let navButton = document.querySelector(".nav-button");
    navButton.addEventListener("click",()=>{
        navToggle();
    });

};
const navToggle = () => {
    //Move navBar from right(out) to left(in)
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("nav-links-active");

    //Move links from bottom to their normal position
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

/*
	Call this function to update the position of the nav slider.
	If argument is given, it moves the slider in the desired position (in pixels).
	Elsewhere it find the section closer to user's view and move it there.
*/
const updateSliderPos = (x = false) => {
	let slider = document.querySelector(".nav-slider");
	let section = getSectionNumber();

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
};

// Call this function to find the vh height given the scroll height
const vh = (v) => {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (h!==0) ? (v / h)*100 : 0;
}

// Call this function to get the section number which the user is looking at.
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
}

/*
	Enables the proper tab in navbar as the user scrolls in each section.
*/
const navSliderScrollListener = () => {
	updateSliderPos();
	
	let links = document.querySelectorAll(".nav-link");
	let prevSection = -1;
	
	window.onscroll = () => {
		let section = getSectionNumber();
		// Update chosen link
		if(prevSection !== section) {
			links.forEach((link, index) => { //works only in mobile view
				if(index === section) {
					link.classList.add("nav-link-active");
				} else {
					link.classList.remove("nav-link-active");
				}
			});
			updateSliderPos();
			prevSection = section;
		}
	};
};

/*
	Enables mouse over and out listeners.
	Moves nav slider betweeen links when mouse is over on navbar and return it to its place in mouseout.
*/
const navSliderMouseListener = () => {
	let links = document.querySelectorAll(".nav-link");
	// Move slider to tab x axis when the mouse is over
	links.forEach((link, index) => {
		link.addEventListener("mouseover", () => {
			let rect = link.getBoundingClientRect();
			updateSliderPos((rect.left+rect.right-16)/2); //Give the middle of the box.(Approximately)
		});
		
		link.addEventListener("mouseout", () => {
			updateSliderPos();
		});
	});
};

/*
	Keeps the nav slider updated in its position each time the window resizes
*/
const navSliderResizeListener = () => {
	window.onresize = () => {
		updateSliderPos();
	};
};

/*
    Toggle collapse tab in projects when each button or img is pressed
*/
const toggleProjectCollapse = () => {
	let images = document.querySelectorAll(".project img");
	let buttons = document.querySelectorAll(".project .collapse-btn");
	
	images.forEach((img, index) => {
		img.addEventListener("click", ()=>{
			let button = img.nextSibling.nextSibling;
			let collapse = button.nextSibling.nextSibling;
			
			button.classList.toggle("collapse-btn-active");
			if(collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
            } else {
                collapse.style.maxHeight = collapse.scrollHeight+"px";
            }
		});
	});
	
	buttons.forEach((btn, index) => {
		btn.addEventListener("click", ()=>{
			let collapse = btn.nextSibling.nextSibling;
			
			btn.classList.toggle("collapse-btn-active");
			if(collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
            } else {
                collapse.style.maxHeight = collapse.scrollHeight+"px";
            }
		});
	});
};

/*
	Call this function to switch smoothly between images in jambotron gallery.
*/
const imageGallerySwitcher = () => {
	var currentImg = 0;
	var images = document.querySelectorAll(".showcase .background-img img");
	images[0].style.opacity = 1;
	
	var interval = setInterval(() => {
		currentImg++;
		if(currentImg >= images.length) {
			currentImg = 0;
		}
		
		images[currentImg].style.transitionDuration = "2s";
		images[currentImg].style.zIndex = 10;
		images[currentImg].style.opacity = 1;
		
		images.forEach((image, index) => {
			if(index !== currentImg) {
				image.style.transitionDuration = "4s";
				image.style.zIndex = 0;
				image.style.opacity = 0;
			}
		});		
	}, 6000);
};


const runStyle = () => {
	imageGallerySwitcher();

	toggleProjectCollapse();

	navButtonClickListener();

	navSliderResizeListener();
	navSliderMouseListener();
	navSliderScrollListener();
};

runStyle();






