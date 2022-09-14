import React from 'react'
import "./trainers.css"
import {trainers} from "../../data"
import HeaderImage from "../../images/gym2.jpg"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import Header from "../../components/Header"
import Trainer from '../../components/Trainer'


const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Similique eligendi repudiandae consectetur dolor necessitatibus et.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) =>{
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]} 
              ]
            }/>
          })
        }
      </div>
    </section>

    
    </>
  )
}

export default Trainers
