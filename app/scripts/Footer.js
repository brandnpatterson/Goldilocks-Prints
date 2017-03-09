import React, { Component } from 'react'

import '../styles/Footer.sass'

import Routes from './Routes'

export default class Footer extends Component {
  render () {
    let copyright = new Date().getFullYear()
    return (
      <footer>
        <Routes />
        <a href='http://brandnpatterson.github.io/' target='_blank'>
          <p className='copyright'>
          &copy; {copyright} Brandon Patterson. All Rights Reserved.
          </p>
        </a>
      </footer>
    )
  }
}
