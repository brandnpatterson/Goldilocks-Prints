import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='panel'>
        <h2>GALLERY</h2>
        <ul className='flex-container'>
          <li><Link to='/art'>ART</Link></li>
          <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
          <li><Link to='/design'>DESIGN</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Gallery
