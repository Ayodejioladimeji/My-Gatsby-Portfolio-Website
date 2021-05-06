import React from 'react'
import counter from '../constants/counter'

const Counter = () => {
    return (
        <div className="boxs">
        <div className="boxs-center">
           {counter.map(item=>{
               const {id, icon, title, text} = item;
               return(
                <article className="counters"> 
                    {icon}
                    <h2>{title}</h2>
                    <p>{text}</p>
                </article>
               )
           })}
        </div>
    </div>
    )
}

export default Counter
