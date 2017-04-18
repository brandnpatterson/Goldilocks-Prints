import React, { Component } from 'react'
import { Match, Miss } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Home from './Home'
import NotFound from './NotFound'

const Routes = () => {
  return (
    <div>
      <Match exactly pattern='/' component={Home} />
      <Match text='about' pattern='/about' component={About} />
      <Match text='contact' pattern='/contact' component={Contact} />
      <Match text='gallery' pattern='/gallery' component={Gallery} />
      <Miss component={NotFound} />
    </div>
  )
}

export default Routes
