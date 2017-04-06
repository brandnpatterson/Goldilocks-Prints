import React, { Component } from 'react'
import Links from '../Links/Links'
import './drop-btn.sass'

// FROM
// height: 200,
// top: 40,
// logo: logoHeader,
// opacity: 0,
// paddingTop: 45,
// scale: 1
//
// TO
// height: 70,
//  logo: logoBear,
//  opacity: 1,
//  paddingTop: 10,
//  top: -13,
//  scale: 0.5

export default class Navigation extends Component {
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
      <div className='navigation'>
        <div
          className={'drop-btn ' + (this.state.transform ? 'drop-btn-transform' : '')}
          onClick={this.onDropBtnSelect}
        >
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </div>
        <div
          className={'nav-links' + (this.state.transform ? '-responsive' : '')}
          onClick={this.onNavSelect}
        >
          <Links />
        </div>
      </div>
    )
  }
}
