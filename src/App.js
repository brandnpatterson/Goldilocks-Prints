import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Header from './components/Header'

// routes
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Gallery from './routes/Gallery'
import Art from './routes/Gallery/Art'
import Photography from './routes/Gallery/Photography'
import Design from './routes/Gallery/Design'

const App = (props) => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/gallery/art' component={Art} />
          <Route path='/gallery/photography' component={Photography} />
          <Route path='/gallery/design' component={Design} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    </div>
  )
}

export default App
