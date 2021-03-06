import React from "react"
import { FaPlusCircle, FaUikit } from "react-icons/fa"
import PageLinks from "../constants/links"
import {Link} from 'gatsby'


const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">

        {/* THE SECTION OF THE NAV HEADER LOGO */}
        <div className="nav-header">
          <Link to="/">
            <button type="button" className="logo-btn">
              <FaUikit/>
            </button>
          </Link>
        </div>

        {/* THE SECTION OF THE TOGGLE BUTTON */}
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaPlusCircle/> 
        </button>

        {/* THE SECTION OF THE PAGE LINKS */}
        <PageLinks styleClass="nav-links"/>
      </div>
    </nav>
  )
}

export default Navbar
