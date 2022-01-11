import React from 'react'
import { Link } from 'react-router-dom'
import websiteIMG from '../assets/website.png'
import calculatorIMG from '../assets/Calculator.png'
import portfolioIMG from '../assets/Portfolio.png'
import { Animated } from 'react-animated-css'

const Projects = () => {
    return (
        <Animated animationIn="fadeInUp" animationInDuration={1200}>
        <section className="projects">
            <h1 id="my-projects">My Projects</h1>
            <article className="container-projects">
                <a href="https://melinacorbalan.github.io/final_project/" target="_blank" rel="noreferrer">
                    <img src={websiteIMG} alt="" />
                </a>
                <a href="https://melinacorbalan.github.io/calculator/" target="_blank" rel="noreferrer">
                    <img src={calculatorIMG} alt="" />
                </a>
                <a href="https://melinacorbalan.github.io/my-portfolio/" target="_blank" rel="noreferrer">
                    <img src={portfolioIMG} alt="" />
                </a>
            </article>
            {/* ARROW */}
            <Link to="/melinacorbalan/contact">
                <span className="arrow-contact"></span>
            </Link>
        </section>
        </Animated>

    )
}

export default Projects
