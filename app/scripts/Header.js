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
    this.onDropdownSelect = this.onDropdownSelect.bind(this)
    this.onNavSelect = this.onNavSelect.bind(this)
  }

  onDropdownSelect () {
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

  onNavSelect () {
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
            onClick={this.onDropdownSelect}
            className={'drop-btn ' + (this.state.transform ? 'drop-btn-transform' : '')}
          >
            <div className='bar1' />
            <div className='bar2' />
            <div className='bar3' />
          </div>
          <img
            src={this.state.logo}
            className='logo'
            alt='Goldilocks Bear'
          />
          <ul
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
