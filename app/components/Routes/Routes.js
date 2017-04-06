import React from 'react'
import { Match, Miss } from 'react-router'
import About from '../About/About'
import Home from '../Home/Home'
import NotFound from '../NotFound/NotFound'

const Routes = () => {
  return (
    <div>
      <Match exactly pattern='/' component={Home} />
      <Match text='about' pattern='/about' component={About} />
      <Miss component={NotFound} />
    </div>
  )
}

export default Routes
