import React, { Component } from 'react'

export default class Navbar extends Component {
  render () {
    return (
      <div id='navbar'>
        <ul>
          <li><a href='/'>HOME</a></li>
          <li><a href='/about'>ABOUT</a></li>
        </ul>
      </div>
    )
  }
}
