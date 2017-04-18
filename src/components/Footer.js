import React from 'react'

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <footer>
      <div className='copyright'>
        <a href='http://brandnpatterson.github.io/' target='_blank'>
          <p>
          &copy; {copyright} Brandon Patterson. All Rights Reserved.
          </p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
