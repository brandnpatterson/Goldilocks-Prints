import React from 'react'

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <footer>
      <a href='http://brandnpatterson.com/' target='_blank'>
        <p>
        &copy; {copyright} Brandon Patterson. All Rights Reserved.
        </p>
      </a>
    </footer>
  )
}

export default Footer
