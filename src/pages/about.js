import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import about from '../constants/about'
import stack from '../constants/stack'
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
    <SEO title="About"/>
      <section className="about-page">
        <div className="about-center">
          {about.map((item)=>{
            const {title, info, image} = item
            return(
              <>
                <img src={image} alt="about-me" className="about-img"/>
                <article className="about-text">
                  <Title title={title}/>
                  <p data-aos="flip-right">{info}</p>
                  <div className="about-stack">
                    {stack.map((data)=>{
                      const {id, stack} = data
                      return(
                        <span key={id} data-aos="flip-right">{stack}</span>
                      )
                    })}
                  </div>
                </article>
              </>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default About