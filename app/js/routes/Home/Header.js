import React, { Component } from 'react'

import Quote from './Quote'
const imageArr = [ 'public/images/landing1.jpeg', 'public/images/landing2.jpeg', 'public/images/landing1.jpeg' ]

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      image: imageArr[0]
    }
  }

  componentDidMount () {
    let imagePosition = 0
    setInterval(() => {
      if (imageArr.length - 1 > imagePosition) {
        this.setState({
          image: imageArr[imagePosition]
        })
        imagePosition++
      } else {
        this.setState({
          image: imageArr[imagePosition]
        })
        imagePosition = 0
      }
    }, 4000)
  }

  render () {
    const headerStyle = {
      width: '100vw'
    }
    return (
      <div>
        <img style={headerStyle} src={this.state.image} alt='header images slideshow' />
        <Quote />
      </div>
    )
  }
}
