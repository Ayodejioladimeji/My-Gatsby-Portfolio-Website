import React from "react"


import { FaGithubSquare, FaShareSquare } from "react-icons/fa"


const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      
        <img src={image} alt="project" className="project-img"/>
      
      <div className="project-info">
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          <span>{stack}</span>
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}



export default Project
