import React from "react";

const Header = () =>{
    return (
        <section id="header">
            <div className="content">
                <h1>making my dreams become true by<br/><span className="glow">Full Stack</span><br/><span className="glow">Engineering</span></h1>
                <h3>I build highly interactive sites
                with javascript,
                the languages well known for me are
                <code>Javacript, Python, C, java, C++, Html, Css, </code>, the tools and frameworks I use are
                <code> React, NodeJS, ExpressJS, MaterialUI, MySQL, MongoDB, Git Bash, VsCode,</code></h3>
            </div>
            <div className="circle-container"><div className="circle"></div></div>
            
        </section>
    )
}
export default Header
