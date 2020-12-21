import React, {useEffect} from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

import Aos from 'aos';
import "aos/dist/aos.css";

import Particles from 'react-particles-js'

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
       <Particles id="particles-js"
          params={{ 
            "particles": {
              "number": {
                "value": 150,
                "density": {
                  "enable": true,
                  "value_area": 700
                }
              },
              "color": {
                "value": "#00ff00"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#d919ce",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1.5782952832645452,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
          }} 
        /> 
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1 data-aos="zoom-in">I'm LayoBright</h1>
            <h4 data-aos="fade-right">Web Developer, Designer & Programmer</h4>

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
