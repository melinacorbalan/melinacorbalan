import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
    return (
        <section id="title">
            <div className="title anim-typewriter">
                <h1>
                    &#60; Melina Corbalan &#62;
                </h1>
            </div>
            <div id="sub-title">
                <p>Front End Developer</p>
            </div>
            {/* ARROW */}
            <div>
                <Link to="/aboutme">
                    <span className="arrow-about"></span>
                </Link>
            </div>
        </section>
    )
}

export default Title
