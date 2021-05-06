import React from "react"
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blogs"/>
      <section className="blog-page">
        <Blogs/>
      </section>
    </Layout>
  )
}

export default Blog