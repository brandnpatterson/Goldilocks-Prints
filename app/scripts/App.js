import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

import '../../public/normalize.scss'
import '../styles/App.sass'

import About from './About'
import Footer from './Footer'
import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern='/' component={Home} />
        <Match pattern='/about' component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const app = document.getElementById('app')

render(
  <App />
, app)
