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
        <div id='home' className='panel-gray'>
          <h2>
            Lauren Rose White helps run the show at Thought House and WordImpress. He loves to code, has a knack for design, and has built many successful websites and applications. He leads by doing in San Diego, California.
          </h2>
        </div>
        <div className='panel-white'>
          <div className='flex'>
            <div className='flex-center'>
              <h2>My Latest Work</h2>
              <Link to='/photography'><div className='button'>View Gallery</div></Link>
            </div>
            <div className='image-panel'>
              <Link to='#0' ><img src='../../public/images/gallery/engagement1.jpg' alt='Engagement Shoot' /></Link>
              <Link to='#0' ><img src='../../public/images/gallery/engagement2.jpg' alt='Engagement Shoot' /></Link>
              <Link to='#0' ><img src='../../public/images/gallery/guitar1.jpg' alt='Guitar Player' /></Link>
              <Link to='#0' ><img src='../../public/images/gallery/guitar2.jpg' alt='Guitar Player' /></Link>
              <Link to='#0' ><img src='../../public/images/gallery/guitar3.jpg' alt='Guitar Player' /></Link>
              <Link to='#0' ><img src='../../public/images/gallery/guitar4.jpg' alt='Guitar Player' /></Link>
            </div>
          </div>
        </div>
        <div className='panel-black'>
          <ul className='flex-center'>
            <li><Link to='/art'>ART</Link></li>
            <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
            <li><Link to='/design'>DESIGN</Link></li>
          </ul>
        </div>
        <div className='panel-black'>
          <ul className='flex-center'>
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
