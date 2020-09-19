import React from 'react';
import './Showcase.css';

const baseUrl = "./images/";

class Showcase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndexPath: 0,
            selectedImage: baseUrl+this.props.projectName+"_"+0+".png"
        };
        this.nextImage = this.nextImage.bind(this);
    }

    nextImage(e) {
        let selectedIndexPath = this.state.selectedIndexPath;
        
        let op = e.target.id.split("_")[1];
        if(op === "prev") {
            selectedIndexPath++;
            if(selectedIndexPath >= this.props.projectNumberOfImages) {
                selectedIndexPath = 0;
            }
        } else if (op === "next") {
            selectedIndexPath--;
            if(selectedIndexPath < 0) {
                selectedIndexPath = this.props.projectNumberOfImages-1;
            } 
        }

        this.setState({
            selectedIndexPath: selectedIndexPath,
            selectedImage: baseUrl+this.props.projectName+"_"+selectedIndexPath+".png"
        });
    }

    render() {
        return (
            <div className="Showcase">
                <div className="images">
                    <button onClick={this.props.toggleShowcase} >x</button>
                    <img src={require(`${this.state.selectedImage}`)} alt="project's image" />
                </div>
                <div className="buttons">
                    <button id={"changeImage_next"} onClick={this.nextImage} > {"<"} </button>
                    <button id={"changeImage_prev"} onClick={this.nextImage} > {">"} </button>
                </div>
            </div>
        );
    }

} export default Showcase;