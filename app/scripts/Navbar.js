import React from 'react'

import '../styles/Navbar.sass'

export default class Navbar extends React.Component {
  constructor () {
    super()
    this.state = {
      class: 'navbar'
    }
  }

  handleClick () {
    if (this.state.class === 'navbar') {
      this.setState({class: 'shrink-navbar'})
    }
  }

  render () {
    return (
      <div className='navbar' onClick={this.handleClick}>
        <div className='navbar-content'>
          <div className='slide drop-btn'>
            <div className='bar1' />
            <div className='bar2' />
            <div className='bar3' />
          </div>
          <img className='slide logo-header' src='public/images/goldilocksheader.gif' alt='Goldilocks Bear' />
          <ul className='slide'>
            <li><a href='/'>HOME</a></li>
            <li><a href='/about'>ABOUT</a></li>
            <li><a href='#0'>GALLERY</a></li>
            <li><a href='#0'>CONTACT</a></li>
          </ul>
        </div>
        <div className='shop-now'>
          <ul>
            <li><a href='#0'>SHOP NOW</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
