import React from 'react'
import './About.sass'

const { string } = React.PropTypes

class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <div className='panel'>
          <h1>About</h1>
        </div>
      </div>
    )
  }
}

About.propTypes = {
  text: string
}
export default About
