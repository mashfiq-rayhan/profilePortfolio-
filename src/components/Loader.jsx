import React from 'react'
import name from '../images/name.png';
const Loader = () => {
    window.onload = function(){
        document.getElementById('loader').style.animationName = "fade"
    }
    return (
        <div id="preloader">
            <div id="loader" className="loader-wrapper">
                <div id="name"><img src={name} alt="Mashfiq Rayhan" /></div>
                <div>ReactJS</div>
                <div>NodeJS</div>
                <div>Html5</div>
                <div>Css3</div>
                <div>Javascript</div>
                <div>ExpressJS</div>
                <div>Redux</div>
                <div>MaterialUI</div>
                <div>Python</div>
                <div>MongoDB</div>
                <div>MySql</div>
                <div>Welcome to my portfolio.</div>
            </div>
        </div>
    )
}

export default Loader
