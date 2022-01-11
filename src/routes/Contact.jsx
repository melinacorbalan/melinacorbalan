import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import { Animated } from 'react-animated-css'

const Contact = () => {
    return (
        <Animated animationIn="fadeInUp" animationInDuration={1200}>
        <section className="contact">
            <div className="contact-text">
                <h1>Any idea you want to carry out or a project you want me to be part of? </h1> 
                <a href="mailto:melina.corbalan@gmail.com">Contact me ! ☺︎</a> 
                <p>You can also find me on:</p>
            </div>
            <div className="soMe">
                <a href="https://www.linkedin.com/in/melinacorbalan/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/melinacorbalan" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.instagram.com/melcorbalan/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
        </section>
        </Animated>
    )
}

export default Contact
 