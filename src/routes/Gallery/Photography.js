import React from 'react'
import Gallery from './Gallery'
import Footer from '../../components/Footer'

const Photography = () => {
  return (
    <div className='photography'>
      <Gallery />
      <div className='image-panel'>
        <div className='panel-gray'>
          <h2>Senior Pictures</h2>
        </div>
        <img src='../../public/images/gallery/senior-pics1.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics2.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics3.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics4.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics5.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics6.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics7.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/senior-pics8.jpg' alt='Senior Pics' />
      </div>
      <div className='image-panel'>
        <div className='panel-gray'>
          <h2>Musician Headshots</h2>
        </div>
        <img src='../../public/images/gallery/guitar1.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/guitar2.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/guitar3.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/guitar4.jpg' alt='Senior Pics' />
      </div>
      <div className='image-panel'>
        <div className='panel-gray'>
          <h2>Engagement Pictures</h2>
        </div>
        <img src='../../public/images/gallery/engagement1.jpg' alt='Senior Pics' />
        <img src='../../public/images/gallery/engagement2.jpg' alt='Senior Pics' />
      </div>
      <Footer />
    </div>
  )
}

export default Photography
