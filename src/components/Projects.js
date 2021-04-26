import React, { useState, useEffect } from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import data from '../constants/projects'

import roll from '../assets/roll.gif'



const Projects = ({ title }) => {

  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState(data);
  let featuredProjects = projects.filter(item=> item.featured === true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
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
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {featuredProjects.map((project, index) => {
          return <Project key={index} {...project} />
        })}
      </div>

      <Link to="/projects" className="btn center-btn" data-aos="fade-up">
        projects
      </Link>
    </section>
  )
}


export default Projects
