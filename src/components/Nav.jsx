import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav" id="home">
            <Link id="about" to="/aboutme">About me</Link>
            <Link id="projects" to="/projects">Projects</Link>
            <Link id="contact" to="/contact">Contact</Link>
        </nav>
    )
}

export default Nav
