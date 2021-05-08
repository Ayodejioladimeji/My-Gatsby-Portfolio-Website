import React, {useState, useEffect} from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobas from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Counter from "../components/Counter"
import Create from "../components/Create"
import Colors from "../components/Colors"
import SEO from "../components/SEO"
import Typewriter from 'typewriter-effect'

import load from '../assets/dancing.gif'


export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 5600);
  },[])

  if(loading){
    return(
      <main>
        
        <img src={load} alt={load} />
        <p>
          <Typewriter
            options={{
              strings: ['Thank you for contacting Layobright'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <small>site loading</small>
      </main>
    )
  }
  return(
    <Layout>
        <SEO title="Home" />
        <Hero/>
        <Services/>
        <Counter/>
        <Colors/>
        <Jobas/>
        <Create/>
        <Projects />
        <Blogs/>
    </Layout>
  )
}
