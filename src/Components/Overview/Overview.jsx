import React from 'react'
import './Overview.css'
import frame from '../../images/frame.svg'
import veg from '../../images/veg.svg'


const Overview = () => {
  return (
    <div className='overview-container'>
        <div className="overview-header">
            <h4>GREEN LIVING</h4>
            <h1>Sustainable Homes</h1>
        </div>
        <div className="overview-body">
            <div className="body-left">
                <div className="left-header">
                    <div className="frame">
                        <img src={frame} alt="Frame" />
                    </div>
                    <h2>For healthier living environment, Hira Panna Infra follows :</h2>
                </div>
                <div className="left-content">
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <div className="sub-content">
                            <h4>Eco-friendly practices</h4>
                            <h6>Passive Solar Design, Insulation, Recycled and Reclaimed Materials, Drought-Resistant Landscaping, Natural Ventilation, Daylighting</h6>
                        </div>
                    </div>
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <div className="sub-content">
                            <h4>Sustainable design</h4>
                            <h6>Low carbon footprint and reduced demand for natural resources. Improved indoor air quality and reduced exposure to toxins</h6>
                        </div>
                    </div>
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <div className="sub-content">
                            <h4>Green spaces</h4>
                            <h6>Installing vegetation on roofs and walls to improve insulation, reduce urban heat islands, and enhance air quality</h6>
                        </div>
                    </div>

                </div>
            </div>
            <div className="body-right"></div>
        </div>
      
    </div>
  )
}

export default Overview
