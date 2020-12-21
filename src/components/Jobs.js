import React, {useState, useEffect} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"
import Particles from 'react-particles-js'
import gear from '../assets/gear.gif'


const url = 'https://api.mocki.io/v1/ef42c429'

const Jobas = () => {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [seeMore, setSeeMore] = useState('See More');

  const fetchJobs = async ()=>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setTimeout(()=>{
      setJobs(newJobs)
      setLoading(false)
    },15000);
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if(loading){
    return(
      <section className="loading" data-aos="fade-out">
        <h1>Work Experience Loading...</h1>
        <img src={gear} alt="gear"/>
      </section>
    )
  }

  const clickHandler = ()=>{
    setSeeMore("Loading...")
  }

    const {company, dates, duties, title } = jobs[value]
    return (
      <section className="section jobs">
        <Title title="Work Experience"/>
        <Particles id="particles-js"
          params={{ 
            particles: { 
              number: { 
                value: 200, 
                density: { 
                  enable: true, 
                  value_area: 731
                } 
              },
              color:{
                value:"#de1ac7"
              },
              lineLinked:{
                enable:true,
                distance:50,
                color:"#e819c3",
                opacity:0.4,
                width:1
              } 
            }, 
          }} 
        /> 
        <div className="jobs-center">
  
          <div className="btn-container">
            {jobs.map((item, index)=>{
              return(
                <button onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
              )
              
            })}
          </div>
  
          {/* THE SECTION OF THE JOB INFORMATION */}
          <article className="job-info">  
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index)=>{
              return(
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
            {/* <Link to="/"> */}
              <button className="btn-info" onClick={clickHandler}>{seeMore}</button>
            {/* </Link> */}
          </article>
        </div>
      </section>
    )
}

export default Jobas
