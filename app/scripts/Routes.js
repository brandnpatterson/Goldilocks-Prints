import React, { Component } from 'react'
import { Link } from 'react-router'

const styles = {
  transition: 'all 0.45s ease-in'
}

export default class Routes extends Component {
  constructor () {
    super()
    this.state = {
      transform: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
    if (document.body.scrollTop > 1) {
      this.setState({
        transform: true
      })
    } else {
      this.setState({
        transform: false
      })
    }
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='about'>ABOUT</Link></li>
        <li><Link to='#0'>GALLERY</Link></li>
        <li><Link to='#0'>CONTACT</Link></li>
        <li
          className={(this.state.transform ? 'shop-now-slide' : '')}
          style={{...styles}}
        ><Link to='#0'>SHOP NOW</Link></li>
      </ul>
    )
  }
}
