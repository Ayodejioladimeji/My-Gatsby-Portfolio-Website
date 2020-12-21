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

// import React,{useState, useEffect} from "react"
// import Title from "./Title"
// import Blog from "./Blog"
// import { Link } from "gatsby"

// import round from '../assets/round.gif'


// const url = 'https://api.mocki.io/v1/cf128040'

// export const Blogs = () => {

//   const [loading, setLoading] = useState(true)
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlog = async ()=>{
//     const response = await fetch(url)
//     const newJobs = await response.json()
//     setTimeout(()=>{
//       setBlogs(newJobs)
//       setLoading(false)
//     },500);
//   }

//   useEffect(() => {
//     // fetchBlog()
//   }, [])


//   if(loading){
//     return(
//       <section className="loading">
//         <h1>Loading Blogs...</h1>
//         <img src={round} alt="roller"/>
//         <p>Please check your Internet Connection...</p>
//       </section>
//     )
//   }


//   return (
//     <section className="section blog-section">
      
//       <Link to="/blog" className="btn center-btn">
//         My Blogs
//       </Link>
//     </section>
//   )
// }
// export default Blogs