import React from 'react'
import './Home.css'
import img4 from '../../images/img4.jpg'
import { FaAngleRight } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";

const Home = () => {

    const contactClick = () => {
        window.scrollBy({
            top: window.innerHeight*8.6 + 156*5 - 112,
            behavior: 'smooth'
        });
    }

    const propertiesClick = () => {
        window.scrollBy({
            top: (window.innerHeight*1.5 + 150)*2, // 600vh
            behavior: 'smooth' // This adds a smooth scrolling effect
        });
    }

  return (
    <div className='home-container'>
        <div className="left-sec">
            {/* <div className="left-1">
                <img src={logo} alt="Building" className='logo' />
            </div> */}
            <div className="left-2">
                <h2>BUILDING YOUR DREAMS</h2>
                <h1>Real Estate in Bihar :</h1>
                <h1>Step into the <strong><span className='luxury'>Luxury</span></strong> space</h1>
                <h1>that you truly deserve</h1>
            </div>
            <div className="left-3">
                <button onClick={contactClick} className='left-btn'>
                    <p>Contact us now</p>
                    <TbPhoneCall style={{
                        color: 'rgba(14, 40, 71, 0.9)',
                        height: '36px',
                        width: '36px',
                        borderRadius: '50%',
                        padding: '6px',
                        border: '2px solid rgb(14, 40, 71)'
                    }} />
                </button>
                <button onClick={propertiesClick} className='right-btn'>
                    <p>View all properties</p>
                    <FaAngleRight style={{
                        color: 'rgb(14, 40, 71)',
                        background: 'none',
                        height: '18px',
                        width: '18px'
                    }} />
                </button>
            </div>
        </div>
        <div className="right-sec">
            <img src={img4} alt="Building" className='building-image' />
        </div>
      
    </div>
  )
}

export default Home
