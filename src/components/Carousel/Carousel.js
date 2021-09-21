// import react hooks and react libraries
import React, { useState, useRef, useEffect } from 'react';

// import prop-types library for error-checking
import PropTypes from 'prop-types';

// import the css styling for this component
import './Carousel.css';

// needed to import default svgs from directory
import lArrow from '../../public/assets/arrow-left.svg';
import rArrow from '../../public/assets/arrow-right.svg';

// import side components
import Navigation from '../Navigation/Navigation';
import Content from '../Content/Content';
import Icons from '../Icons/Icons';

// main component
function Carousel(props) {

    // get prop values
    var auto = props.autoPlay;
    var delay = props.delayTime;
    var start = props.startIndex;

    var toggle_dots = props.toggleDots;
    var toggle_nav = props.toggleNav;

    var nav_img = props.navImg;
    var content_arr = props.content;
    var text = props.slideText;

    // check for empty values
    if (auto === null || auto === undefined) {
        auto = false;
    }

    if (delay === null || delay === undefined) {
        delay = 3000; //3s
    }

    // load content before error checking starting index
    if (content_arr === null || content_arr === undefined || content_arr.length === 0) {
        content_arr = [
            "https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1541417904950-b855846fe074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1558102822-da570eb113ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ];
    }

    // error checking if unreasonable inputs for starting index
    if (start === null || start === undefined || start < 0 || start > content_arr.length - 1) {
        start = 0;
    }

    if (toggle_dots === null || toggle_dots === undefined) {
        toggle_dots = false;
    }

    if (toggle_nav === null || toggle_nav === undefined) {
        toggle_nav = true;
    }

    if (text === null || text === undefined) {
        text = true;
    }

    if (nav_img === null || nav_img === undefined || nav_img.length === 0 || nav_img.length !== 2) {
        nav_img = [lArrow, rArrow];
    }

    // check for proptype errors
    var anyErrors = false;

    // define props for error checking
    const myPropTypes = {
        /* 
            Auto scroll the slides?
        */
        autoPlay: PropTypes.bool,
        /* 
            Display dot navigation?
        */
        toggleDots: PropTypes.bool,
        /* 
            Display arrow navigation?
        */
        toggleNav: PropTypes.bool,
        /* 
            Specify a time (in seconds) to AutoPlay slides
        */
        delayTime: PropTypes.number,
        /* 
            Start the slides at a specific index.
        */
        startIndex: PropTypes.number,
        /* 
            Provide custom images for arrow navigation.
        */
        navImg: PropTypes.arrayOf(PropTypes.any),
        /* 
            Provide content to display.
        */
        content: PropTypes.any,

        /*
            Toggle displaying current page text?
        */
        slideText: PropTypes.bool
    }

    // load the variables to state
    const [autoPlay,] = useState(auto);

    const [delayTime,] = useState(delay);
    const [index, setIndex] = useState(start);

    // render content
    const [navImg,] = useState(nav_img);
    const [content,] = useState(content_arr);

    // toggle extra pagination
    const [toggleNav,] = useState(toggle_nav);
    const [toggleDots,] = useState(toggle_dots);
    const [toggleText,] = useState(text);

    // used for delaytime
    const timeoutRef = useRef(null);

    // used for determining which navigation the user clicked
    const [clicked, setClicked] = useState("r");

    // function that uses delaytime
    useEffect(() => {
        resetTimeout();

        // only change slides if autoPlay is on!
        if (autoPlay) {

            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === content.length - 1 ? 0 : prevIndex + 1
                    ),
                delayTime
            );
        }

        return () => {
            resetTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    // check for errors
    var saveMessage = [];
    console.error = function (message) {
        saveMessage.push(message);
        anyErrors = true;
    }

    // check manually proptypes
    PropTypes.checkPropTypes(myPropTypes, props, "", 'Carousel');

    // return more than once
    PropTypes.resetWarningCache();

    const helperMessage = saveMessage.map((e) => <div className="error">{e}<br /></div>)

    // these errors are prop errors
    if (anyErrors) {
        return <p>{helperMessage}</p>
    }

    // helper function to reset time
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    // return normal content
    return (
        <div className="wrapperAll" >

            <Content draggable={false} index={index} content={content} clicked={clicked} />
            {checkDisplayNavigation(toggleNav, navImg, index, setIndex, content.length, setClicked)}
            {checkDisplayIcons(toggleDots, index, setIndex, content.length, toggleText)}
        </div>
    );
}

// function that handles navigation visibility
function checkDisplayNavigation(nav, arrows, ind, updateIndex, total, click) {
    return <Navigation draggable={false} key={"navcontent" + Date.now()} displayNav={nav} index={ind} setIndex={updateIndex} total={total} left={arrows[0]} right={arrows[1]} setClick={click} />
}

//function that handles icons
function checkDisplayIcons(dots, ind, updateIndex, total, text) {

    return <Icons key={"iconscontent" + Date.now()} displayDots={dots} activeSlide={ind} updateIndex={updateIndex} total={total} showText={text} />
}

export default Carousel;