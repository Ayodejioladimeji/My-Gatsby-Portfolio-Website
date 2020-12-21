import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Dead End" />
      <main className="error-page">
        <div className="error-container">
          <h1>Please do not try to come here next time</h1>
          <p>Kindly go back go and keep Exploring</p>
          <h3>LAYOBRIGHT</h3>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
