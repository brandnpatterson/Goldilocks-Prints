import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import About from './About'
import Home from './Home'

import '../styles/Home.sass'

const app = document.getElementById('app')

class App extends Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </Router>
      </div>
    )
  }
}

render(
  <App />
, app)
