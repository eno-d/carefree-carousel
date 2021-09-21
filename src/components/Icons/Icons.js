import React from 'react';

import './Icons.css';

// main function
function Icons({ displayDots, activeSlide, updateIndex, total, showText }) {

    // onClick handle function
    function handle(e) {

        // find the id of the button clicked
        var num = e.target.id.toString().split(" ");

        // update current Index
        updateIndex(Number(num[num.length - 1] - 1));
    }

    // draw circles to represent the pages
    function makeCircles() {

        var result = [];

        for (var i = 1; i < total + 1; i++) {
            if (i - 1 === activeSlide) {
                result.push(<div id={Date.now() + Math.random() + " " + i} className="inside active" title="Viewing"></div>);
            }
            else {
                //eslint-disable-next-line no-loop-func
                result.push(<div id={Date.now() + Math.random() + " " + i} className="inside" onClick={handle}></div>);
            }
        }

        return result;
    }

    // show dots -> show text
    if (displayDots && showText) {
        return (
            <div style={{ display: `flex`, flexDirection: `column` }}>
                <div className="alignment">
                    {makeCircles()}
                    {/* {makeCircles(activeSlide, updateIndex, total)} */}
                </div>

                <div className="alignment">{activeSlide + 1}/{total}</div>

            </div>
        );
    }
    // show dots -> dont show text
    else if (displayDots && !showText) {
        return (
            <div style={{ display: `flex`, flexDirection: `column` }}>
                <div className="alignment">
                    {makeCircles()}
                </div>
            </div>
        );
    }
    // dont show dots -> show text
    else if (!displayDots && showText) {
        return (
            <div style={{ display: `flex`, flexDirection: `column` }}>
                <div className="alignment">{activeSlide + 1}/{total}</div>
            </div>
        );

    }
    // dont show anything
    else {
        return <></>
    }
}

export default Icons;