import React, { useEffect, useState } from 'react'
import darkImg from "../../assets/website/dark-mode-button.png"
import lightImg from '../../assets/website/light-mode-button.png'
const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light")
    const element = document.documentElement
    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    },[theme])
    const changeTheme = ()=>{
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
  return (

    <div>
        <div className='relative'>
            {
                theme === "light" ? (
                    <img src={lightImg} onClick={changeTheme} className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' alt="" />
                ) : (
                    <img src={darkImg} onClick={changeTheme} className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' alt="" />
                )
            }
           
           
        </div>
    </div>
  )
}

export default DarkMode