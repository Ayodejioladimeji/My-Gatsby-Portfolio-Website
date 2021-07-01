import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { motion } from "framer-motion"


const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services"/>
      <div className="section-center services-center">
        {services.map((service)=>{
          const {id, icon, title, text} = service;
          return(
            <article key={id} className="service" data-aos="zoom-in" data-aos-once="true">
              {icon}
              <h4 data-aos="fade-up" data-aos-once="true">{title}</h4>
              <div data-aos="fade-right" data-aos-once="true" className="underline"></div>
              <p data-aos="fade-down" data-aos-once="true">{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
