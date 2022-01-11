import React from 'react'
import { Link } from 'react-router-dom'
import profileIMG from '../assets/profile.png'
import { Animated } from "react-animated-css";

const AboutMe = () => {
    return (
        <Animated animationIn="fadeInUp" animationInDuration={1200}>
            <section className="about">
                <h1 id="about-me">About me</h1>
                <div className="about-flex">
                    <p>
                        Hi there! <br />
                        My name is Melina and I'm originally from Buenos Aires, Argentina. After graduating with a degree
                        in Marketing and working a few years in digital advertising, I decided to start my adventure in
                        Germany. <br />
                        After three years between Germany and Denmark, I thought it was time for a professional shift to
                        something I had long aspired to be: a developer. Always in a constant learning process but excited
                        to start a new adventure.<br />
                        Yes, I know what you are thinking: I'm just a newbie! But curious to learn and become a great
                        developer.
                        Here you will find a little bit about me and some of the projects I will be doing. If you find
                        something interesting about me, don't hesitate to contact me. <br />
                        Enjoy!</p>
                    <img src={profileIMG} alt="profile-pic" />
                </div>
                {/* ARROW */}
                <Link to="/melinacorbalan/projects">
                    <span className="arrow-projects"></span>
                </Link>
            </section>
        </Animated>
    )
}

export default AboutMe
