import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className='detail-container'>
        <div className="detail-box">
            <div className="detail-header">
                <h3>ONLY FOR YOU</h3>
                <h1>Path to Smart Ownership</h1>
            </div>
            <div className="detail-body">
                <div className="detail-circle circle1">
                    <h5>FIRST INSTALMENT</h5>
                    <h4>10% initial payment (during time of booking)</h4>
                </div>
                <div className="detail-circle circle2">
                    <h5>SECOND-TENTH INSTALMENT</h5>
                    <h4>85% remaining payment (over the course of development)</h4>
                </div>
                <div className="detail-circle circle3">
                    <h5>LAST INSTALMENT</h5>
                    <h4>5% final payment (at the time of possession)</h4>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Details
