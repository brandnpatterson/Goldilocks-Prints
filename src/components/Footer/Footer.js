import React from 'react'
import Links from '../Links/Links'
import './Footer.sass'

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <footer>
      <Links />
      <a className='copyright' href='http://brandnpatterson.github.io/' target='_blank'>
        <p>
        &copy; {copyright} Brandon Patterson. All Rights Reserved.
        </p>
      </a>
    </footer>
  )
}

export default Footer
