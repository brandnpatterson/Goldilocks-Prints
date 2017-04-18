import React from 'react'
import { BrowserRouter } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Routes from './routes/Routes'

const App = () => {
  return (
    <div>
      <div className='background' />
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
