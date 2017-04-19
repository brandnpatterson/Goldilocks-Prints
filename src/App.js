import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Footer from './components/Footer'
import Header from './components/Header'

// routes
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Gallery from './routes/Gallery'

const App = () => {
  return (
    <div>
      <div className='background' />
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' component={Gallery} />
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
