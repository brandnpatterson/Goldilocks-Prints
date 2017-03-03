import React, { Component } from 'react'
import { MdAirplanemodeActive } from 'react-icons/lib/md/'

import '../../styles/Divider.sass'

const { string } = React.PropTypes

export default class Divider extends Component {
  render () {
    return (
      <div className='divider'>
        <MdAirplanemodeActive className='icon' />
        <h2 className='divider-text'>{this.props.text}</h2>
      </div>
    )
  }
}

Divider.propTypes = {
  text: string
}
