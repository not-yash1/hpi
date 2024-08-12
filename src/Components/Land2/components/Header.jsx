import React from 'react'
import './Header.css'
import BoardOfDirectors from './BoardOfDirectors'
import MainContent from './MainContent'

const Header = () => {
  return (
    <div className='about-header'>
        <div className="header-left">
            {/* <img src={buildingImage} alt="Building" className='building-img' /> */}
        </div>
        <div className="header-right">
            <div className="header-text">
                <p>A Real Estate association with a vision to serve customers and communities by consistently producing developments of lasting value. Committed to the finest quality parameters, the group believes in Team-Work, Innovation, and Professionalism.</p>
            </div>
            {/* <div className="bod">
                <BoardOfDirectors />
            </div> */}
            <div className="main-content">
                <MainContent />
            </div>
        </div>
    </div>
  )
}

export default Header
