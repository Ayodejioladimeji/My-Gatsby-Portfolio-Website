import React, {useState, useEffect} from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

import roll from '../assets/roll.gif'


const url = "https://api.mocki.io/v1/c83dca7c"


const Projects = ({title}) => {

  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([]);


  const fetchProject = async ()=>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setTimeout(()=>{
      setProjects(newJobs)
      setLoading(false)
    },12000);
  }

  useEffect(() => {
    fetchProject()
  }, [])


  if(loading){
    return(
      <section className="loading" data-aos="zoom-in">
        <h1 data-aos="fade-down"> My Projects Loading...</h1>
        <img src={roll} alt="roller" data-aos="fade-right"/>
      </section>
    )
  }


  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
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
