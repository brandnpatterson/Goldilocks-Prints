import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Gallery extends Component {
  render () {
    const location = window.location.pathname
    const art = location.match(/^\/art/) ? 'active' : ''
    const photography = location.match(/^\/photography/) ? 'active' : ''
    const design = location.match(/^\/design/) ? 'active' : ''

    return (
      <div className='gallery'>
        <div className='flex-center'>
          <h2>GALLERY</h2>
          <ul className='flex-center'>
            <li><Link id={art} to='/art'>ART</Link></li>
            <li><Link id={photography} to='/photography'>PHOTOGRAPHY</Link></li>
            <li><Link id={design} to='/design'>DESIGN</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
