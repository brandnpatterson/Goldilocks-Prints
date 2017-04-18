import React from 'react'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import Routes from './routes/Routes'
import './App.sass'

const App = () => {
  return (
    <div>
      <div className='background' />
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
