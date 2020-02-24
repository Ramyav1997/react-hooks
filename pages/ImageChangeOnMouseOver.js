import React from "react";
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
    <div>
        <ImageToggleOnMouseOver primaryImg = "/static/images/rose.jpeg" 
                                secondaryImg = "/static/images/roseclr.jpeg"
                                 alt="" />
        &nbsp; &nbsp; &nbsp; 
        <ImageToggleOnMouseOver primaryImg = "/static/images/track.jpeg"
                                secondaryImg = "/static/images/download.jpeg" 
                                alt="" />
    </div>
    );
};

export default ImageChangeOnMouseOver;
