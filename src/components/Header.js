import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const logo = 'public/images/goldilocksbear.gif'

const styles = {
  transition: 'all 0.2s ease-in'
}

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
        <div className='logo-background'>
          <Link to='/'>
            <img src={logo} alt='Goldilocks Bear' className='logo' />
          </Link>
        </div>
        <div
          className={'drop-btn' + (this.state.transform ? '-transform' : '')}
          onClick={this.onDropBtnSelect}
        >
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </div>
        <nav className={'modal' + (this.state.transform ? '-visible' : '')}
          onClick={this.onNavSelect}>
          <ul>
            <li style={{...styles}}><Link to='/'>HOME</Link></li>
            <li style={{...styles}}><Link to='/about'>ABOUT</Link></li>
            <li style={{...styles}}><Link to='/contact'>CONTACT</Link></li>
            <li style={{...styles}}><Link to='/gallery'>GALLERY</Link></li>
            <li style={{...styles}}><Link to='#0'>SHOP NOW</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
