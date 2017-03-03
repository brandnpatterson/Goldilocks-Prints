import React, { Component } from 'react'

const opacityArr = [ 0, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.6, 0.3, 0, 0, 0 ]

export default class Quote extends Component {
  constructor () {
    super()
    this.state = {
      opacity: opacityArr[0],
      quote: '"Imagine the possibilities..."'
    }
  }

  componentDidMount () {
    let opacityPosition = 0
    setInterval(() => {
      if (opacityArr.length - 1 > opacityPosition) {
        this.setState({
          opacity: opacityArr[opacityPosition]
        })
        opacityPosition++
      } else {
        this.setState({
          opacity: opacityArr[opacityPosition]
        })
        opacityPosition = 0
      }
    }, 500)
  }

  render () {
    const quoteStyle = {
      color: '#fff',
      fontSize: '1.5em',
      opacity: this.state.opacity,
      position: 'absolute',
      left: 20,
      top: 20
    }
    return (
      <div>
        <h2 style={quoteStyle}>{this.state.quote}</h2>
      </div>
    )
  }
}
