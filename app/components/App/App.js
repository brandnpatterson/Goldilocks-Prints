import React from 'react'
import { BrowserRouter } from 'react-router'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
// import Routes from '../Routes/Routes'
import './App.sass'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Routes /> */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
