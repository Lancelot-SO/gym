import React from 'react'
import Image from "../images/gym7.png"
import SectionHead from './SectionHead'
import {GiCutDiamond } from "react-icons/gi"
import { values } from '../data'
import Card from "../UI/Card"


const Values = () => {
  return (
    <div>
      <section className='Value'>
        <div className='container values__container'>
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Values" />
                </div>
            </div>
            <div className='values__right'>
                <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Ad, et libero modi incidunt eligendi obcaecati mollitia laudantium? Nesciunt eligendi libero, tempora optio facere, rerum deserunt veniam, 
                     blanditiis atque inventore nisi.
                </p>
                <div className='values__wrapper'>
                    {
                        values.map(({id, icon, title, desc}) =>{
                            return <Card className="values__value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>

                            </Card>
                        })
                          
                        
                    }
                     
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Values
