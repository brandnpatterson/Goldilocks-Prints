import React from 'react'
import './About.sass'

class About extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='about'>
        <div className='landing'>
          <h2>Hi! I'm Lauren Rose White.</h2>
        </div>
      </div>
    )
  }
}

export default About
