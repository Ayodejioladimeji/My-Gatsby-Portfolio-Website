import React from "react"
import check from '../assets/check.svg'
import cloud from '../assets/cloud.svg'
import happy from '../assets/happy.svg'
import practice from '../assets/practice.svg'

export default [
  {
    id: 1,
    icon: <img src={check} alt={check} className="count-images services-icon" />,
    title: "3+",
    text: `Years Experience`,
  },
  {
    id: 2,
    icon: <img src={happy} alt={happy} className="count-images services-icon" />,
    title: "10+",
    text: `Happy Clients`,
  },
  {
    id: 3,
    icon: <img src={practice} alt={practice} className="count-images services-icon"/>,
    title: "13",
    text: 'Projects Done',
  },
  {
    id: 4,
    icon: <img src={cloud} alt={cloud} className="count-images services-icon" />,
    title: "22",
    text: `Download`,
  },
]
