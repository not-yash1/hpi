import React, { useEffect, useRef, useState } from 'react'
import './Slider.css'

const Slider = () => {

    const divRef = useRef(null);
    const [slides, setSlides] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
    const [once, setOnce] = useState(false);

  return (
    <div className='slider-contain'>
        <div ref={divRef} className="slider-box">
            {slides.map((slide, index) => (
                <div key={index} className={`slider slider${slide}`}>
                    <div className="framer1 framer"></div>
                    {(index !== 0 || index !== 5) && <div className="framer2 framer"></div>}
                </div>
            ))}
            {/* {slides.map((slide, index) => (
                <div key={slide} className={`slider slider${slide}`}>
                    <div className="framer1 framer"></div>
                    {index !== 0 && <div className="framer2 framer"></div>}
                </div>
            ))} */}


            {/* <div className="slider slider1">
                <div className="framer1 framer"></div>
            </div>
            <div className="slider slider2">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider3">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider4">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider5">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider1">
                <div className="framer1 framer"></div>
            </div>
            <div className="slider slider2">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider3">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider4">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div>
            <div className="slider slider5">
                <div className="framer1 framer"></div>
                <div className="framer2 framer"></div>
            </div> */}
        </div>
    </div>
  )
}

export default Slider
