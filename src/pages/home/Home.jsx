import React from 'react'
import "./home.css"
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQ from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'




const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQ/>
      <Testimonials/>
      
    </>
    
  )
}

export default Home
