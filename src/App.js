import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// routes
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Art from './routes/Gallery/Art'
import Photography from './routes/Gallery/Photography'
import Design from './routes/Gallery/Design'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <div className='background' />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/art' component={Art} />
          <Route path='/photography' component={Photography} />
          <Route path='/design' component={Design} />
          <Route path='/contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
