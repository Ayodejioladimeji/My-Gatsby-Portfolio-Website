import React, { useState, useEffect } from "react"
import Title from "../components/Title"
import Project from "../components/Project"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const url = "https://api.mocki.io/v1/e5dc5572"

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);


  const fetchProject = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setProjects(newJobs)
  }

  useEffect(() => {
    fetchProject()
  }, [])



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





