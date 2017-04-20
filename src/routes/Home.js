import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-landing'>
        <h2>Goldilox Designs</h2>
      </div>
      <div className='home-content'>
        <div className='arrow'>
          <div className='arrow-right' />
          <div className='arrow-left' />
        </div>
        <div id='home' className='panel-white'>
          <ul className='flex-container'>
            <li><Link to='/art'>ART</Link></li>
            <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
            <li><Link to='/design'>DESIGN</Link></li>
          </ul>
        </div>
        <div className='panel-white'>
          <ul className='flex-container'>
            <li><Link to='/art'>ART</Link></li>
            <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
            <li><Link to='/design'>DESIGN</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
