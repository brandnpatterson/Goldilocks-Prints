import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Link, Match } from 'react-router'
// import routes
import Home from './routes/Home'
import About from './routes/About'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='nav'>
            <Link to='/'>Home</Link> - <Link to='/about'>About</Link>
          </nav>
          <Match exactly pattern='/' component={Home} />
          <Match exactly pattern='/about' component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

const app = document.getElementById('app')

render(
  <App />
, app)
