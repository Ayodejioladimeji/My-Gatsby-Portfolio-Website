import React from 'react'
import image from '../assets/imag.jpeg'
import { motion } from 'framer-motion'


const Gallery = () => {
    return (
        <div className="gallery-container" >
            <div className="gallery">
                <motion.div className="gallery__item gallery__item--1" data-aos="fade-right"
                     whileHover={{ scale:1.1}}
                     whileTap={{
                         scale:0.8,
                         rotate:-90,
                         borderRadius:"100%"
                     }}
                >
                    <img src={image} alt="" className="gallery__img"/>
                </motion.div>

                <motion.div className="gallery__item gallery__item--2" data-aos="fade-down"
                    whileHover={{ scale:1.1}}
                    whileTap={{
                        scale:0.8,
                        rotate:90,
                        borderRadius:"100%"
                    }}
                >
                    <img src={image} alt="" className="gallery__img"/>
                </motion.div>

                <motion.div className="gallery__item gallery__item--3" data-aos="fade-up" 
                    whileHover={{ scale:1.1}}
                    whileTap={{
                        scale:0.8,
                        rotate:-90,
                        borderRadius:"100%"
                    }}
                >
                    <img src={image} alt="" className="gallery__img"/>
                </motion.div>

                <motion.div className="gallery__item gallery__item--4" data-aos="fade-left"
                   whileHover={{ scale:1.1}}
                   whileTap={{
                       scale:0.8,
                       rotate:90,
                       borderRadius:"100%"
                   }}
                >
                    <img src={image} alt="" className="gallery__img"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Gallery
