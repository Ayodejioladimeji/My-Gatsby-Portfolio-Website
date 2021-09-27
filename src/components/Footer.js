import React from "react"
import SocialLinks from "../constants/socialLinks"
import ScrollToTop from "react-scroll-to-top"

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollToTop smooth className="scroll" />
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> AYODEJI OLADIMEJI </span>
        </h4>
        <small className="layo">
          Developed By @LayoBright{" "}
          <span aria-label role="img">
            &#128526;
          </span>
        </small>
      </div>
      {/* <ScrollToTop/> */}
    </footer>
  )
}

export default Footer
