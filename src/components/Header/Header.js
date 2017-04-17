import React from 'react'
import Nav from '../DropBtn/DropBtn'
import './_Header.sass'

const logoHeader = 'public/images/goldilocksheader.gif'

const styles = {
  transition: 'all 0.4s'
}

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      color: 'white',
      transform: false,
      height: 150,
      top: 25,
      logo: logoHeader,
      opacity: 0,
      paddingTop: 45,
      scale: 0.75
    }
    this.onScroll = this.onScroll.bind(this)
  }
  onScroll () {
    if (document.body.scrollTop > 1) {
      this.setState({
        color: 'black',
        height: 70,
        opacity: 1,
        paddingTop: 10,
        top: -13,
        scale: 0.5
      })
    } else {
      this.setState({
        color: 'white',
        height: 150,
        opacity: 0,
        paddingTop: 45,
        top: 25,
        scale: 0.75
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
            opacity: this.state.opacity,
            ...styles
          }}
        />
        <img
          src={this.state.logo}
          alt='Goldilocks Bear'
          className='logo'
          style={{
            transform: 'scale(' + this.state.scale + ')',
            top: this.state.top,
            ...styles
          }}
        />
        <div className='nav'
          style={{
            color: this.state.color,
            paddingTop: this.state.paddingTop,
            ...styles
          }}>
          <Nav />
        </div>
      </div>
    )
  }
}
