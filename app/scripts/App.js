import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import '../../public/normalize.scss'
import '../styles/App.sass'

import About from './About'
import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </Router>
    </div>
  )
}

const app = document.getElementById('app')

render(
  <App />
, app)
