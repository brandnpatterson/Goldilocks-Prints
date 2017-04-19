import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='panel-one'>
        <h2>Welcome Home!</h2>
        <ul className='flex-container'>
          <li><Link to='/gallery/art'>ART</Link></li>
          <li><Link to='/gallery/photography'>PHOTOGRAPHY</Link></li>
          <li><Link to='/gallery/design'>DESIGN</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
