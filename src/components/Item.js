import { motion } from 'framer-motion'
import React from 'react'

const spring = {
    type:"spring",
    stiffness:500,
    damping:30
}

const Item = ({color, isSelected, onClick}) => {
    return (
        <li className="colo" onClick={onClick} style={{backgroundColor:color}}>
            {isSelected && (
                <motion.div layoutId="outline" className="outline" initial={false} animate={{borderColor:color}} transition={spring}/>
            )}
            
        </li>
    )
}

export default Item
