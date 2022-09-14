import React from 'react'
import "./gallery.css"
import HeaderImage from "../../images/header3.jpg"
import Header from '../../components/Header'




const Gallery = () => {
  const galleryLength = 15;
  const images=[]
  
  for(let i = 1; i<= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Similique eligendi repudiandae consectetur dolor necessitatibus et.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) =>{
            return <article key={index}>
              <img src={image} alt={`Gallery  ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery
