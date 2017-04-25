import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'

const Photography = () => {
  return (
    <div className='photography'>
      <Gallery />
      <div className='panel-black'>
        <div className='panel-gray'>
          <h2>Senior Pictures</h2>
        </div>
        <div className='image-flex large'>
          <img src='assets/images/gallery/senior-pics1.jpg' alt='Senior Pics' />
          <img src='assets/images/gallery/senior-pics2.jpg' alt='Senior Pics' />
          <img src='assets/images/gallery/senior-pics3.jpg' alt='Senior Pics' />
          <img src='assets/images/gallery/senior-pics6.jpg' alt='Senior Pics' />
        </div>
      </div>
      <div className='panel-black'>
        <div className='panel-gray'>
          <h2>Musician Headshots</h2>
        </div>
        <div className='image-flex'>
          <img src='assets/images/gallery/guitar1.jpg' alt='Guitar Player' />
          <img src='assets/images/gallery/guitar2.jpg' alt='Guitar Player' />
          <img src='assets/images/gallery/guitar3.jpg' alt='Guitar Player' />
          <img src='assets/images/gallery/guitar4.jpg' alt='Guitar Player' />
        </div>
      </div>
      <div className='panel-black'>
        <div className='panel-gray'>
          <h2>Engagement Pictures</h2>
        </div>
        <div className='image-flex'>
          <img src='assets/images/gallery/engagement1.jpg' alt='Engagement Shoot' />
          <img src='assets/images/gallery/engagement2.jpg' alt='Engagement Shoot' />
        </div>
      </div>
      <div className='panel-black'>
        <div className='panel-gray'>
          <h2>Menswear Pictures</h2>
        </div>
        <div className='image-flex large'>
          <img src='assets/images/gallery/senior-pics5.jpg' alt='Senior Pics' />
          <img src='assets/images/gallery/senior-pics7.jpg' alt='Senior Pics' />
          <img src='assets/images/gallery/senior-pics8.jpg' alt='Senior Pics' />
          <img src='assets/images/gallery/senior-pics4.jpg' alt='Senior Pics' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Photography
