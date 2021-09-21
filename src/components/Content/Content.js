import React from 'react';
import { PreloadImages } from "react-use-images";

import './Content.css';

function Content(props) {

    var result = [];
    var images = [];

    for (var i = 0; i < props.content.length; i++) {

        if (typeof props.content[i] === "string") {
            images.push(props.content[i]);
            result.push(
                <div
                    className="slideshowSlider">
                    <PreloadImages urls={images} >
                        <img className="fade-in-image" key={Date.now() + " " + props.index} src={props.content[i]} alt={"img" + props.index} height="900px" />
                    </PreloadImages>
                </div>
            );
        }
        else {
            result.push(
                <div
                    className="slideshowSlider">
                    <div key={Date.now() + " " + props.index} className="slide">
                        {props.content[props.index]}
                    </div>
                </div>
            );
        }
    }

    return result[props.index];
}

export default Content;