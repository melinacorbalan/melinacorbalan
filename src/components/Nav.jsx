import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/home-icon-silhouette.png'

const Nav = () => {
    return (
        <nav className="head">
            <Link to="/melinacorbalan" className="iconHome">
                <img src={homeIcon} alt="home icon"/>
            </Link>
            <div className="nav">
                <Link id="about" to="/melinacorbalan/aboutme">About me</Link>
                <Link id="projects" to="/melinacorbalan/projects">Projects</Link>
                <Link id="contact" to="/melinacorbalan/contact">Contact</Link>
            </div>

        </nav>
    )
}

export default Nav
