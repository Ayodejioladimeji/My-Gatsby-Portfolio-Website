import React from "react"


const Blog = ({ title, image, slug, desc }) => {
  return (
      <article className="blog">
        <img src={image} alt="blog-post" className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
           <a href="#" target="_blank">
            <p>{slug}</p>
           </a>
          </div>
        </div>
      </article>
  )
}


export default Blog
