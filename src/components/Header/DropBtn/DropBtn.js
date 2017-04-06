import React, { Component } from 'react'
import Links from '../../Links/Links'
import './DropBtn.sass'

export default class DropBtn extends Component {
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
      <div>
        <div
          className={'drop-btn ' + (this.state.transform ? 'transform' : '')}
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
