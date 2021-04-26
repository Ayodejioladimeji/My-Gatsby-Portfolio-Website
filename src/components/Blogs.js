import React, { useState, useEffect } from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import data from '../constants/Blog'

import round from '../assets/round.gif'


export const Blogs = () => {

  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState(data);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  }, [])


  if (loading) {
    return (
      <section className="loading">
        <h1>Loading Blogs...</h1>
        <img src={round} alt="roller" data-aos="fade-right" />
        <p data-aos="flip-right">Please check your Internet Connection</p>
      </section>
    )
  }


  return (
    <section className="section blog-section">
      <Title data-aos="fade-down" title="My Blogs" />
      <div className="section-center blogs-center">
        {blogs.map((blog, index) => {
          return <Blog key={index} {...blog} />
        })}
      </div>
      <Link to="/blog" className="btn center-btn" data-aos="fade-down">
        My Blogs
      </Link>
    </section>
  )
}
export default Blogs