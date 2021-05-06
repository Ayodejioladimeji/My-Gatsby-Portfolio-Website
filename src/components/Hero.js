import React, {useEffect} from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

import Aos from 'aos';
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect'

import Particles from './Particles'

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
                // onInit={(typewriter) => {
                //   typewriter.typeString('I Design...')
                //     .pauseFor(2500)
                //     .deleteAll()
                //     .typeString('I Create...')
                //     .pauseFor(2500)
                //     .deleteAll()
                //     .typeString('I Transform...')
                //     .pauseFor(2500)
                //     .deleteAll()
                //     .typeString('Ideas into Reality...')
                //     .pauseFor(2500)
                //     .deleteAll()
                //     .start();
                // }}

                options={{
                  strings: ['I Design...', 'I Create...', 'I transform ideas into Reality...'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <Link to="/contact" className="btn" data-aos="fade-down">
              Get In Touch
            </Link>

            <div data-aos="fade-up">
              <SocialLinks/>
            </div>
           
          </div>
        </article>
          
        <Image fluid={fluid} className="hero-img"/>
      </div>
    </header>
  )
}

export default Hero
