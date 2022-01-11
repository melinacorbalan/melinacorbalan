import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.png'

const Footer = () => {


    const [visible, setVisible] = useState(false);

    const visibility = () => {
        if (document.documentElement.scrollTop > 5) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", visibility);
        return () => {
            window.removeEventListener("scroll", visibility);
        }
    }, []);


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    };


    return (
        <footer>
            <p>©2021
                <a href="https://www.linkedin.com/in/melinacorbalan/" target="_blank" rel="noreferrer" > Melina Corbalán</a>
            </p>
            {visible &&
                <Link to="/">
                    <img className="home-arrow" src={arrow} alt="arrow-home" onClick={scrollUp}/>
                </Link>
            }
        </footer>


    )
}

export default Footer
