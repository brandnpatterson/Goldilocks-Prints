import React, { Component } from 'react'

export default class Navbar extends Component {
  render () {
    return (
      <nav className='navbar'>
        <ul>
          <li><a href='/'>HOME</a></li>
          <li><a href='/about'>ABOUT</a></li>
        </ul>
      </nav>
    )
  }
}
