import React from 'react'
import Nav from './DropBtn/DropBtn'
import './Header.sass'

const logoHeader = 'public/images/goldilocksheader.gif'
const logoBear = 'public/images/goldilocksbear.gif'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      transform: false,
      height: 200,
      top: 40,
      logo: logoHeader,
      opacity: 0,
      paddingTop: 45,
      scale: 1
    }
    this.onScroll = this.onScroll.bind(this)
  }
  onScroll () {
    if (document.body.scrollTop > 1) {
      this.setState({
        height: 70,
        logo: logoBear,
        opacity: 1,
        paddingTop: 10,
        top: -13,
        scale: 0.5
      })
    } else {
      this.setState({
        height: 200,
        logo: logoHeader,
        opacity: 0,
        paddingTop: 45,
        top: 40,
        scale: 1
      })
    }
  }
  componentWillMount () {
    window.addEventListener('scroll', this.onScroll)
  }
  render () {
    return (
      <div className='header'>
        <div className='header-background'
          style={{
            height: this.state.height,
            opacity: this.state.opacity
          }}
        />
        <img
          className='logo'
          style={{
            top: this.state.top,
            transform: 'scale(' + this.state.scale + ')'
          }}
          src={this.state.logo}
          alt='Goldilocks Bear'
        />
        <div className='nav'
          style={{
            paddingTop: this.state.paddingTop
          }}>
          <Nav />
        </div>
      </div>
    )
  }
}
