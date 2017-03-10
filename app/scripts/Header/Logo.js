import React from 'react'

const logoHeader = 'public/images/goldilocksheader.gif'
const logoBear = 'public/images/goldilocksbear.gif'

const styles = {
  transition: 'all 0.6s ease-in'
}

export default class DropBtn extends React.Component {
  constructor () {
    super()
    this.state = {
      logo: logoHeader
    }
  }

  render () {
    return (
      <img
        style={{
          ...styles,
          top: this.state.top,
          transform: 'scale(' + this.state.scale + ')'
        }}
        className='logo'
        onClick={this.onHide}
        src={this.state.logo}
        alt='Goldilocks Bear'
      />
    )
  }
}
