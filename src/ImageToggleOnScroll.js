import React, { useRef } from "react";


const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {

   const imageRef = useRef(null);
    return (
       <img 
            src = {primaryImg} alt="" 
            ref={imageRef} />

    );
};

export default ImageToggleOnScroll;
