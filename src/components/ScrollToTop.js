import React, {useEffect, useState} from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'
import {useWindowScroll} from 'react-use'

const ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll();
    const [visible, setVisibility] = useState(false);
  
    useEffect(()=> {
      if(pageYOffset > 400){
        setVisibility(true)
      }
      else{
        setVisibility(false)
      }
    }, [pageYOffset])
  
    const scrollToTop = () => window.scrollTo({ top:0, behaviour:"smooth"});
  
    if(!visible){
      return false
    }
    return (
        <div className="scroll" onClick={scrollToTop}>
            <FaAngleDoubleUp className="icon-scroll"/>
        </div>
    )
}

export default ScrollToTop
