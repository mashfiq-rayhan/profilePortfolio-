import React from 'react';

function Projects() {
    return (
        <section id="projectss">
            <div className="projects">
                <h1 id="work">Work</h1>
                <div className="projecttitle">
                    <h1>Some of my projects.</h1>
                </div>
                <div className="cards">
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                            <h5 className="card-title">CinePlex.live</h5>
                            <p className="card-text">Movie Streaming platform built with NodeJS, ExpressJS.</p>
                            <a target="_blank" rel="noreferrer" href="https://github.com/mashfiq-rayhan/CinePlex.live"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce</h5>
                            <p className="card-text">E-Commerce site built with ReactJs, NodeJS, ExpressJS, MaterialUI, Redux etc </p>
                            <a target="_blank" rel="noreferrer" href="https://github.com/mashfiq-rayhan/DoaknTest"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                            <h5 className="card-title">PostRouting</h5>
                            <p className="card-text">Newsletter site built with ReactJs, MaterialUI, Redux, ReactRouter etc </p>
                            <a target="_blank" rel="noreferrer" href="https://github.com/mashfiq-rayhan/postRouting"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                            <h5 className="card-title">BurgerBuilder</h5>
                            <p className="card-text">E-Commerce site built with ReactJs, MaterialUI, Redux, reactRouter etc </p>
                            <a target="_blank" rel="noreferrer" href="https://github.com/mashfiq-rayhan/BurgerBuilder"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
