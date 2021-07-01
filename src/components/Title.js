import React from "react"

const Title = ({title}) => {
  return (
    <div className="section-title">
      <h2 data-aos="fade-down" data-aos-once="true">{title || "Featured Projects"}</h2>
      <div data-aos="fade-right" data-aos-once="true" className="underline"></div>
    </div>
  )
}

export default Title
