import React, { Component } from 'react'
import { Link } from 'react-router'
// const { string } = React.PropTypes

export default class Routes extends Component {
  render () {
    return (
      <div >
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='about'>ABOUT</Link></li>
        <li><Link to='#0'>GALLERY</Link></li>
        <li><Link to='#0'>CONTACT</Link></li>
        <li><Link to='#0'>SHOP NOW</Link></li>
      </div>
    )
  }
}
