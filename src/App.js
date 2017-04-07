import React from 'react'
import { BrowserRouter } from 'react-router'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Routes from './Routes/Routes'

const App = () => {
  return (
    <div className='background' src='../public/images/landing.jpeg'>
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
