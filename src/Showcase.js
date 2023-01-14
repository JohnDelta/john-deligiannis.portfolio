import React, {useState, useEffect} from 'react';
import './Showcase.css';

const baseUrl = "./images/";

const Showcase = ({projects, showcaseProject, setShowcaseProject}) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const nextImage = () => {
        let numberOfImages = projects.filter(project => project.name === showcaseProject)[0].numberOfImages;
        if (selectedImageIndex + 1 >= numberOfImages)
            setSelectedImageIndex(0);
        else
            setSelectedImageIndex(selectedImageIndex + 1);
    };

    const previousImage = () => {
        let numberOfImages = projects.filter(project => project.name === showcaseProject)[0].numberOfImages;
        if (selectedImageIndex - 1 < 0)
            setSelectedImageIndex(numberOfImages - 1);
        else
            setSelectedImageIndex(selectedImageIndex - 1);
    };

    return (
        <div className="Showcase">
            <div className="images">
                <button onClick={() => setShowcaseProject("")}>x</button>
                <img src={require(`${baseUrl + showcaseProject + "_" + selectedImageIndex + ".jpg"}`)} alt="project's image" />
            </div>
            <div className="buttons">
                <button onClick={() => previousImage()}> {"<"} </button>
                <button onClick={() => nextImage()}> {">"} </button>
            </div>
        </div>
    );
}; 

export default Showcase;