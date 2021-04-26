import React, {useState} from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"


const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false)
  const toggleSidebar = ()=>{
    setisOpen(!isOpen)
  } 

  return (
    <>
      <Navbar toggleSidebar = {toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar = {toggleSidebar}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
