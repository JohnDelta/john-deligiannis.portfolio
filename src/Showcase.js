import React from 'react';
import './Showcase.css';

class Showcase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imagePaths: []
        };
    }
// IMAGES WITH NAME NAME_INDEX like junior-workers_0
    componentDidMount() {
        if(this.props.projectName) {
            let paths = [];
            for(let i = 0; i < this.props.projectNumberOfImages; i++) {
                paths.push(
                    "./images/"+this.props.projectName+"_"+i
                );
            }
        }
    }

    render() {

        let images = [];
        this.state.imagePaths.forEach((path, pIndex) => {
            images.push(
                <img src={require(path)} key={"img_showcase_"+pIndex} />
            );
        });

        return (
            <div className="Showcase">
                <div className="images">
                    <button onClick={this.props.toggleShowcase} >x</button>
                    {images}
                </div>
                <div className="buttons">
                    <button> {"<"} </button>
                    <button> {">"} </button>
                </div>
            </div>
        );
    }

} export default Showcase;