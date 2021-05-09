import { motion } from 'framer-motion';
import React, {useState, useEffect} from 'react'

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
  

const Toggle = () => {
    const [theme, setTheme] = useState(getStorageTheme());
    const[isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn)

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

    return (
      <div className="switch togg" data-isOn={isOn} onClick={() => {toggleSwitch() ;  toggleTheme()}}>
        <motion.div style={{background:isOn ? "blue" : "#00ff00"}} className="handle" layout transition={spring}/>
      </div>
        // <button className="togg" onClick={toggleTheme}>
        //     SWITCH
        // </button>
    )
}

export default Toggle

const spring = {
  type:"spring",
  stiffness:700,
  damping:30
};