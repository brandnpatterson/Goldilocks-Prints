import React, { Component } from 'react'
import { Link } from 'react-router'
import './_Links.sass'

const styles = {
  transition: 'all 0.45s ease-in'
}

export default class Links extends Component {
  constructor () {
    super()
    this.state = {
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
    if (document.body.scrollTop > 400) {
      this.setState({
        scrolled: true
      })
    } else {
      this.setState({
        scrolled: false
      })
    }
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <ul>
        <li><Link className='dropdown-top' to='/'>HOME</Link></li>
        <li><Link className='dropdown-left' to='about'>ABOUT</Link></li>
        <li><Link className='dropdown-right' to='contact'>CONTACT</Link></li>
        <li><Link className='dropdown-bottom' to='gallery'>GALLERY</Link></li>
        <li
          className={(this.state.scrolled ? 'shop-now-slide' : '')}
          style={{...styles}}
        ><Link className='dropdown-hide' to='#0'>SHOP NOW</Link></li>
      </ul>
    )
  }
}
