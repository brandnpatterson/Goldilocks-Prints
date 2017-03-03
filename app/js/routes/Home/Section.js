import React, { Component } from 'react'

import '../../styles/Section.sass'

const { string } = React.PropTypes

export default class Section extends Component {
  render () {
    return (
      <div className='section' />
    )
  }
}

Section.propTypes = {
  text: string
}
