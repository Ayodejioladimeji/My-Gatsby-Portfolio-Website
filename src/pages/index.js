import React, {useState, useEffect} from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobas from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

import load from '../assets/dancing.gif'

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 10000);
  },[])

  if(loading){
    return(
      <main>
        <img src={load} alt={load} />
        <p>Please check your internet connection</p>
      </main>
    )
  }
  return(
    <Layout>
        <SEO title="Home" />
        <Hero/>
        <Services/>
        <Jobas/>
        <Projects />
        <Blogs/>
    </Layout>
  )
}
