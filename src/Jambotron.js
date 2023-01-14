import React, {useState, useEffect} from 'react';
import './Jambotron.css';

const Jambotron = () => {
	const [sliderInterval, setSliderInterval] = useState(undefined);

	useEffect(() => {
		imageSlider();
		return () => clearInterval(sliderInterval);
	}, []);

	const imageSlider = () => {
		var images = document.querySelectorAll(".showcase .background-img img");
		images[0].style.opacity = "1";
		let currentImageIndex = 1;
		setSliderInterval(
			setInterval(() => {
				images.forEach((image) => {
					image.style.transitionDuration = "4s";
					image.style.zIndex = "0";
					image.style.opacity = "0";
				});
				images[currentImageIndex].style.transitionDuration = "2s";
				images[currentImageIndex].style.zIndex = "10";
				images[currentImageIndex].style.opacity = "1";
				currentImageIndex++;
				if(currentImageIndex >= images.length) { currentImageIndex = 0; }
			}, 6000)
		);
	};

	return (
		<div className="Jambotron">
			<div className="bg" />
			<div className="showcase">
				<div className="background-img">
					<img src={require('./images/responsive-template-filled1.png')} alt="Projects I created!" />
					<img src={require('./images/responsive-template-filled2.png')} alt="Projects I created!" />
					<img src={require('./images/responsive-template-filled3.png')} alt="Projects I created!" />
					<img src={require('./images/responsive-template-filled4.png')} alt="Projects I created!" />
				</div>
				<h1 className="title">Hi I'm John, a Software Engineer</h1>
				<h2 className="subtitle">Recent graduate with an Integrated Master's Degree in Informatics and Computer
					Engineering</h2>
			</div>
			<a className="show-work" href="#work">
				<p>See my Work</p>
				<i className="fa fa-angle-down" />
			</a>
		</div>
	);
};

export default Jambotron;