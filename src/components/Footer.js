import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> AYODEJI OLADIMEJI </span>
        </h4>
        <small className="layo">Developed By @LayoBright &#128526; </small>
      </div>
    </footer>
  )
}

export default Footer