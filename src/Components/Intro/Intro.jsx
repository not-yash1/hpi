import React, { useEffect, useRef, useState } from 'react'
import './Intro.css'
// import logo from '../../images/logoTop.png'
import logo from '../../images/logob.svg'
import vid from '../../images/vid1.mp4'
import vid2 from '../../images/vid21.mp4'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Intro = () => {

    const vidRef1 = useRef(null)
    const vidRef2 = useRef(null)

    const [isLeft, setIsLeft] = useState(true);

    const handleLeftClick = () => {
        const slide = document.querySelector(`.intro-box`);
        if(slide){
            slide.style.transform = `translateX(0vw)`
            setIsLeft(true);
        }
    }

    const handleRightClick = () => {
        const slide = document.querySelector(`.intro-box`);
        if(slide){
            slide.style.transform = `translateX(-120vw)`
            setIsLeft(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const slide = document.querySelector(`.intro-box`);

            if(slide){
                if(isLeft){
                    slide.style.transform = `translateX(-120vw)`
                    setIsLeft(false);
                } else {
                    slide.style.transform = `translateX(0vw)`
                    setIsLeft(true);
                }
            }
        }, 60000)
  
        return () => clearInterval(interval)
  
    }, [isLeft])

  return (
    <div className='intro-container'>
        <button className={`lef-btn ${isLeft ? "vis-btn" : ""}`} onClick={handleLeftClick} disabled={isLeft}><FaAngleLeft 
        style={{
            background: 'none',
            marginLeft: '-2px',
            marginBottom: '-2px',
        }}
        /></button>
        <button className={`righ-btn ${!isLeft ? "vis-btn" : ""}`} onClick={handleRightClick} disabled={!isLeft}><FaAngleRight 
        style={{
            background: 'none',
            marginLeft: '-2px',
            marginBottom: '-2px',
        }}
        /></button>
        <div className="intro-box">
            <img src={logo} alt="Logo" />
            <video className='vid1' ref={vidRef1} src={vid} autoPlay playsInline muted loop alt="Intro Video">Your browser does not support the video tag</video>
            <img src={logo} alt="Logo" className='logo'/>
            <video className='vid2' ref={vidRef2} src={vid2} autoPlay playsInline muted loop alt="Intro Video">Your browser does not support the video tag</video>
        </div>
    </div>
  )
}

export default Intro
