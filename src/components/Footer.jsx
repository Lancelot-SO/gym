import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logo6.png"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"




const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Deleniti nobis aliquam laborum voluptatum dolores saepe?
                </p>
                <div className='footer__socials'>
                    <a href='https://www.linkedin.com/in/felix-sowah/' target="_blank" rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>

                    <a href='https://www.facebook.com/lancelot.hanisburg' target="_blank" rel='noreferrer noopener'>
                        <FaFacebook/>
                    </a>

                    <a href='https://www.twitter.com/lancelot_hans' target="_blank" rel='noreferrer noopener'>
                        <AiOutlineTwitter/>
                    </a>

                    <a href='https://www.instagram.com/_lan.celot/' target="_blank" rel='noreferrer noopener'>
                        <AiOutlineInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Me</Link>
                <Link to="/s">Support</Link>

            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 Felix  Projects &copy; All Rights Reserved</small>
        </div>
      
    </footer>
  )
}

export default Footer
