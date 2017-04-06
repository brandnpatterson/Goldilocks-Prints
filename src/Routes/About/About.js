import React from 'react'
import './About.sass'

class About extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='about'>
        <div className='panel'>
          <h1>About</h1>
        </div>
      </div>
    )
  }
}

export default About
