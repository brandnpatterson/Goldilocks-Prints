import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-wrapper'>
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
              Lauren Rose White is owner and founder of Goldilox Designs. She has a creative eye for design, and enjoys working hard to design unique works of art for clients. She enjoys collaborating with developers to build successful products. She is located in Houston, TX.
            </h2>
          </div>
          <div className='panel-white'>
            <div className='flex'>
              <div className='flex-center'>
                <h2>Latest Designs</h2>
                <Link to='/photography'><div className='button view-gallery'>View Gallery</div></Link>
              </div>
              <div className='image-panel'>
                <Link to='/photography' ><img src='../../public/images/gallery/engagement2.jpg' alt='Engagement Shoot' /></Link>
                <Link to='/photography' ><img src='../../public/images/gallery/guitar3.jpg' alt='Guitar Player' /></Link>
                <Link to='/photography' ><img src='../../public/images/gallery/guitar2.jpg' alt='Guitar Player' /></Link>
                <Link to='/photography' ><img src='../../public/images/gallery/engagement1.jpg' alt='Engagement Shoot' /></Link>
              </div>
            </div>
          </div>
          <div className='panel-gray'>
            <ul className='flex-center'>
              <li><Link to='/art'>ART</Link></li>
              <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
              <li><Link to='/design'>DESIGN</Link></li>
            </ul>
          </div>
          <div className='panel-white'>
            <ul className='flex-center'>
              <li><Link to='/art'>ART</Link></li>
              <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
              <li><Link to='/design'>DESIGN</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
