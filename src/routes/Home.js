import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='panel-white'>
        <ul className='flex-container'>
          <li><Link to='/art'>ART</Link></li>
          <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
          <li><Link to='/design'>DESIGN</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
