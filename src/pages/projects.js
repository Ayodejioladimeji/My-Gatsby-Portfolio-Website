import React, { useState, useEffect } from "react"
import Title from "../components/Title"
import Project from "../components/Project"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import data from '../constants/projects'
import roll from '../assets/roll.gif'



const ProjectsPage = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 10000);
  }, [])


  if (loading) {
    return (
      <section className="loading" data-aos="zoom-in">
        <h1 data-aos="fade-down"> My Projects Loading</h1>
        <img src={roll} alt="roller" data-aos="fade-right" />
      </section>
    )
  }


  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Title title="All Projects" data-aos="fade-up" />
        <div className="section-center projects-center">
          {projects.map((project, index) => {
            return <Project key={index} {...project} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage





