import React, {useEffect} from "react"
// import Image from "gatsby-image"
import Gallery from './Gallery'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

import Aos from 'aos';
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect'

import Particles from './Particles'
import { motion } from "framer-motion"

const query = graphql`
  {
    file(relativePath:{eq:"image.JPG"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
  }, []);

  const {
    file:{
      childImageSharp:{fluid},
    },
  } = useStaticQuery(query);

  return (
    <header className="hero">
       <Particles/> 
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1 data-aos="zoom-in">I'm LayoBright</h1>
            <h4 data-aos="fade-right">Web Developer, Designer & Programmer</h4>
            <div className="type">
              <Typewriter
                options={{
                  strings: ['I Design...', 'I Create...', 'I transform ideas into Reality...'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <motion.button>
              <Link to="/contact" className="btns effect04" data-aos="fade-down" data-sm-link-text="CLICK" target="_blank">
                <span>Get In Touch</span>
              </Link>
            </motion.button> 

            <div data-aos="fade-up">
              <SocialLinks/>
            </div>
           
          </div>
        </article>
          
          <Gallery/>
        {/* <Image fluid={fluid} className="hero-img"/> */}
      </div>
    </header>
  )
}

export default Hero
