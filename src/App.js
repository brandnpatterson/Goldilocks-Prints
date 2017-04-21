import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// routes
import Home from './routes/Home/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Art from './routes/Art'
import Photography from './routes/Photography'
import Design from './routes/Design'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
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
