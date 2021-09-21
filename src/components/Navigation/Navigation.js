import React from 'react';

import "./Navigation.css";

// click = unused functionality
// helper that keeps track of which index the user is on
function handleClick(from, ind, changeInd, total, click) {

    var index = ind;

    // previous click
    if (from) {

        if (index === 0) {
            index = total - 1;
        }
        else {
            index = index - 1;
        }

        click = "l";

    }
    // next click
    else {

        if (index === total - 1) {
            index = 0;
        }
        else {
            index = index + 1;
        }

        click = "r";
    }

    // rerender page with new index
    changeInd(index);
}

// helper function to display arrows

// displayNav = show arrows on the side
// index = the index of the current thing
// setIndex = the function to update index
// total = total content length
// left = image for left arrow
// right = image for right arrow
// click = the function to update click status
function Navigation({ displayNav, index, setIndex, total, left, right, click }) {

    if (displayNav) {
        return (
            <div className="navigation">
                <div className="centerArrow" onClick={() => handleClick(true, index, setIndex, total, click)}>
                    <img className="imageLeft" src={left} alt={"previous"} width={50} height={50} />
                </div>

                <div className="centerArrow" onClick={() => handleClick(false, index, setIndex, total, click)}>
                    <img className="imageRight" src={right} alt={"next"} width={50} height={50} />
                </div>
            </div>
        );
    }
    else {
        return <></>
    }
}

export default Navigation;