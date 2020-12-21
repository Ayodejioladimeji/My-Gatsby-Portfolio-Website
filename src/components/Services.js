import React from "react"
import Title from "./Title"
import services from "../constants/services"


const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services"/>
      <div className="section-center services-center">
        {services.map((service)=>{
          const {id, icon, title, text} = service;
          return(
            <article key={id} className="service" data-aos="zoom-in">
              {icon}
              <h4 data-aos="fade-up">{title}</h4>
              <div data-aos="fade-right" className="underline"></div>
              <p data-aos="fade-down">{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
