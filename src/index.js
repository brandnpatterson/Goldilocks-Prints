import React from 'react'
import { render } from 'react-dom'
import App from './App'
import '../public/normalize.css'
import './index.scss'

const app = document.getElementById('app')

render(
  <App />
, app)
