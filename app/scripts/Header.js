import React from 'react'

import '../styles/Header.sass'

import Routes from './Routes'

const logoHeader = 'public/images/goldilocksheader.gif'
const logoBear = 'public/images/goldilocksbear.gif'

const styles = {
  transition: 'all 0.6s ease-in'
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
    this.onHide = this.onHide.bind(this)
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

  onHide () {
    this.setState({
      height: 70,
      logo: logoBear,
      opacity: 1,
      paddingTop: 10,
      top: -13,
      scale: 0.5
    })
  }

  render () {
    return (
      <div className='header'>
        <div
          style={{
            ...styles,
            height: this.state.height,
            opacity: this.state.opacity
          }}
          className='header-background'
        />
        <div className='header-content'>
          <div
            style={{
              ...styles,
              paddingTop: this.state.paddingTop
            }}
            className={'drop-btn ' + (this.state.transform ? 'drop-btn-transform' : '')}
            onClick={this.onDropBtnSelect}
          >
            <div className='bar1' />
            <div className='bar2' />
            <div className='bar3' />
          </div>
          <img
            style={{
              ...styles,
              top: this.state.top,
              transform: 'scale(' + this.state.scale + ')'
            }}
            className='logo'
            onClick={this.onHide}
            src={this.state.logo}
            alt='Goldilocks Bear'
          />
          <ul
            style={{
              paddingTop: this.state.paddingTop
            }}
            className={'nav-links' + (this.state.transform ? '-visible' : '')}
            onClick={this.onNavSelect}
          >
            <Routes />
          </ul>
        </div>
      </div>
    )
  }
}
