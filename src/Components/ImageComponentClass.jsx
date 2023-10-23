import { Component } from "react"; 

class ImageComponentClass extends Component{
    render(){
        return(
            <>
            <img src={this.props.ImgSrc} alt={this.props.ImgAlt} />
            </>
        )
    }
}

export default ImageComponentClass