import React from 'react'
import { Match, Miss } from 'react-router'
import About from './About/About'
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

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
