import React, { Component } from 'react'

import Section from './Home/Section'

import '../styles/Home.sass'

export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Section
          className='section'
          backgroundImage='url(../../images/landing.jpeg)'
        />
      </div>
    )
  }
}
