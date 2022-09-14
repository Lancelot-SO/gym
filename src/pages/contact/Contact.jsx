import React from 'react'
import "./contact.css"
import Header from"../../components/Header"
import HeaderImage from "../../images/header2.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"


const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Similique eligendi repudiandae consectetur dolor necessitatibus et.
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='mailto:fsowah001@gmail.com' target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href='https://m.me/lancelot.hanisburg' target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href='https://wa.me/+233556318804' target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>

        </div>
      </div>
    </section>
    
    </>
  )
}

export default Contact
