import React from 'react'
import '../Routes.sass'

class Gallery extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='gallery'>
        <div className='landing'>
          <h2>Pictures & Art For Sale</h2>
        </div>
        <div className='panel'>
          <h2>Gallery</h2>
        </div>
      </div>
    )
  }
}

export default Gallery
