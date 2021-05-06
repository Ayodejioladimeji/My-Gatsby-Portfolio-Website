import React, { useState } from "react"
import Title from "../components/Title"
import Project from "../components/Project"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import data from '../constants/projects'

const ProjectsPage = () => {
  const [projects, setProjects] = useState(data);



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





