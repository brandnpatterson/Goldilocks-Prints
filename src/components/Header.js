import React, { Component } from 'react'
import { Link } from 'react-router'
import './_Header.sass'

const logo = 'public/images/goldilocksbear.gif'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      transform: false
    }
    this.onDropBtnSelect = this.onDropBtnSelect.bind(this)
    this.onNavSelect = this.onNavSelect.bind(this)
  }
  onDropBtnSelect () {
    if (this.state.transform === false) {
      this.setState({
        transform: true
      })
    } else if (this.state.transform === true) {
      this.setState({
        transform: false
      })
    }
  }
  onNavSelect () {
    if (this.state.transform === true) {
      this.setState({
        transform: false
      })
    }
  }
  render () {
    return (
      <div className='header'>
        <img src={logo} alt='Goldilocks Bear' className='logo' />
        <div
          className={'drop-btn ' + (this.state.transform ? 'transform' : '')}
          onClick={this.onDropBtnSelect}
        >
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </div>
        <nav className={'nav-links' + (this.state.transform ? '-dropdown' : '')}
          onClick={this.onNavSelect}>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='about'>ABOUT</Link></li>
            <li><Link to='contact'>CONTACT</Link></li>
            <li><Link to='gallery'>GALLERY</Link></li>
            <li><Link to='#0'>SHOP NOW</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
