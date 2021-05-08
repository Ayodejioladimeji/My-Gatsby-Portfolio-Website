import React, {useState} from 'react'
import {AnimateSharedLayout} from "framer-motion"
import Item from './Item';

const Colors = () => {
    const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00","#ff0066", "#0077ff", "#22cc99", "#00ff00","#ff1133", "#2288ff"];
    const names = ['L', 'A', 'Y', 'O', 'B', 'R', 'I', 'G', 'H', 'T']
    const [selected, setSelected] = useState(colors[0]);
    return (
        <AnimateSharedLayout>
            <ul className="colors">
                {colors.map(color=> (
                    <Item key={color} color={color} isSelected={selected === color} onClick={()=> setSelected(color)}/>
                ))}
            </ul>
        </AnimateSharedLayout>
    )
}

export default Colors
