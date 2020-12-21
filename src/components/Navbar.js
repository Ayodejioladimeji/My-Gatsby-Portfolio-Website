import React from "react"
import { FaPlusCircle, FaUikit } from "react-icons/fa"
import PageLinks from "../constants/links"


const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar" style={{backgroundColor:'black'}}>
      <div className="nav-center">

        {/* THE SECTION OF THE NAV HEADER LOGO */}
        <div className="nav-header">
          <button type="button" className="logo-btn">
            <FaUikit/>
          </button>
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
