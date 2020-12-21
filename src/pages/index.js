import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobas from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"


export default () => {
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
