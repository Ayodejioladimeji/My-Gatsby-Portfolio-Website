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
            <motion.article key={id} className="service" data-aos="zoom-in" 
              whileHover={{scale: 1}} 
              whileTap={{
                scale:0.8,
                rotate:-90,
                borderRadius:"100%"
              }}
            >
              {icon}
              <h4 data-aos="fade-up">{title}</h4>
              <div data-aos="fade-right" className="underline"></div>
              <p data-aos="fade-down">{text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
