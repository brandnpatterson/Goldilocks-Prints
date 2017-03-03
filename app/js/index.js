import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import About from './routes/About'
import Home from './routes/Home'
import Navbar from './components/Navbar'

const app = document.getElementById('app')

class ClientApp extends Component {
  render () {
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
}

render(
  <ClientApp />
, app)
