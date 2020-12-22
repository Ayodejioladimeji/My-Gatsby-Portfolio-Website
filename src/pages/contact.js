import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact"/>
      <section className="contact-page">
        <article className="contact-form" data-aos="zoom-out">
          <h3 data-aos="fade-down">Get In Touch</h3>
          <form action="https://formspree.io/f/xpzojybl" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control" data-aos="fade-right" required/>
              <input type="email" name="email" placeholder="email" className="form-control" data-aos="fade-right" required/>
              <textarea name="message" rows="5" placeholder="message" className="form-control" data-aos="fade-right" required/>
            </div>
            <button type="submit" className="submit-btn btn" data-aos="fade-up">Send Me A Message</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
