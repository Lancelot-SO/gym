import React from 'react'
import "./about.css"
import MissionImage from "../../images/story4.jpg"
import VisionImage from "../../images/story2.jpg"
import StoryImage from "../../images/story1.jpg"
import Header from '../../components/Header'
import HeaderImage from "../../images/header1.jpg"



const About = () => {
  return (
    <>
    <Header title="About US" image={HeaderImage}>
      Lorem ipsum dolor sit amet 
      consectetur adipisicing elit.
       Quam nulla suscipit perspiciatis blanditiis libero quisquam,
        culpa laboriosam qui! Nesciunt, vitae!
    </Header>
    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium a, quae fugit deleniti praesentium iure unde maiores magni dolore esse iusto atque illum! Ducimus sequi possimus porro.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime vel cumque iste. 
             Qui, quis aliquid?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium a, quae fugit deleniti praesentium iure unde maiores magni dolore esse iusto atque illum! Ducimus sequi possimus porro.
             Lorem ipsum dolor sit amet.
          </p>
          <p>Lorem ip sum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium.
             
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium a, quae fugit deleniti praesentium iure unde maiores magni dolore esse iusto atque illum! Ducimus sequi possimus porro.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime vel cumque iste. 
             Qui, quis aliquid?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium a, quae fugit deleniti praesentium iure unde maiores magni dolore esse iusto atque illum! Ducimus sequi possimus porro.
             Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className='mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium a, quae fugit deleniti praesentium iure unde maiores magni dolore esse iusto atque illum! Ducimus sequi possimus porro.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime vel cumque iste. 
             Qui, quis aliquid?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium a, quae fugit deleniti praesentium iure unde maiores magni dolore esse iusto atque illum! Ducimus sequi possimus porro.
             Lorem ipsum dolor sit amet.
          </p>
          <p>Lorem ip sum dolor sit amet consectetur adipisicing elit.
             Ut vel molestias laudantium.
             
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About
