import React from 'react'
import './Contact.sass'

class Contact extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='contact'>
        <div className='landing'>
          <h2>Contact me!</h2>
        </div>
        <div className='panel'>
          <h2>Contact</h2>
        </div>
      </div>
    )
  }
}

export default Contact
