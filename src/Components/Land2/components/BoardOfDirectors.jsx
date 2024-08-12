import React from 'react'
import './BoardOfDirectors.css'
import bod1 from '../../../images/bod1.png'
import bod2 from '../../../images/bod2.png'

const BoardOfDirectors = () => {
  return (
    <div className='board-of-directors'>
      <h3>MEET OUR BOARD OF DIRECTORS</h3>
      <div className="directors">
        <img src={bod1} alt="Director 1" className='profile' />
        <img src={bod2} alt="Director 2" className='profile' />
        <img src={bod1} alt="Director 3" className='profile' />
      </div>
    </div>
  )
}

export default BoardOfDirectors
