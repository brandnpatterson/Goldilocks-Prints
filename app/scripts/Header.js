import React from 'react'

import '../styles/Header.sass'

import Routes from './Routes'

const logoHeader = 'public/images/goldilocksheader.gif'
const logoBear = 'public/images/goldilocksbear.gif'

const styles = {
  transition: 'all 0.45s ease-in'
}

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
    this.handleScroll = this.handleScroll.bind(this)
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

  handleScroll () {
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
    window.addEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <div className='header'>
        <div
          className='header-background'
          style={{
            ...styles,
            height: this.state.height,
            opacity: this.state.opacity
          }}
        />
        <div
          className={'drop-btn ' + (this.state.transform ? 'drop-btn-transform' : '')}
          style={{
            ...styles,
            paddingTop: this.state.paddingTop
          }}
          onClick={this.onDropBtnSelect}
        >
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </div>
        <img
          className='logo'
          style={{
            ...styles,
            top: this.state.top,
            transform: 'scale(' + this.state.scale + ')'
          }}
          src={this.state.logo}
          alt='Goldilocks Bear'
        />
        <div
          className={'nav-links' + (this.state.transform ? '-visible' : '')}
          style={{
            paddingTop: this.state.paddingTop
          }}
          onClick={this.onNavSelect}
        >
          <Routes />
        </div>
      </div>
    )
  }
}
