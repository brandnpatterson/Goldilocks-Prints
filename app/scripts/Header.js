import React from 'react'

import '../styles/Header.sass'

import Routes from './Routes'

const logoHeader = 'public/images/goldilocksheader.gif'
const logoBear = 'public/images/goldilocksbear.gif'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      transform: false,
      logo: logoHeader
    }
    this.onNavSelect = this.onNavSelect.bind(this)
    this.onNavSelectDropdown = this.onNavSelectDropdown.bind(this)
  }

  onNavSelect () {
    if (this.state.transform === false) {
      this.setState({
        transform: true,
        logo: logoBear
      })
    } else if (this.state.transform === true) {
      this.setState({
        transform: false,
        logo: logoHeader
      })
    }
  }

  onNavSelectDropdown () {
    if (this.state.transform === true) {
      this.setState({
        transform: false
      })
    }
    if (this.state.logo === logoBear) {
      this.setState({
        logo: logoHeader
      })
    }
  }

  render () {
    return (
      <div className='header'>
        <div className='header-background' />
        <div className='header-content'>
          <div
            className='drop-btn'
            onClick={this.onNavSelect}
          >
            <div className={'bar1 ' + (this.state.transform ? 'transform-bar1' : '')} />
            <div className={'bar2 ' + (this.state.transform ? 'transform-bar2' : '')} />
            <div className={'bar3 ' + (this.state.transform ? 'transform-bar3' : '')} />
          </div>
          <img
            src={this.state.logo}
            className='logo'
            alt='Goldilocks Bear'
          />
          <ul
            className={'nav-links' + (this.state.transform ? '-visible' : '')}
            onClick={this.onNavSelectDropdown}
          >
            <Routes />
          </ul>
        </div>
      </div>
    )
  }
}
