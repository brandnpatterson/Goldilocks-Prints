import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import About from './About/About'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'
import Routes from './Routes'

test('It should render the Home component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(Home).length).toBe(1)
})

test('It should render the About component when visiting /about', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/about' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(About).length).toBe(1)
})

test('It should render the NotFound component when visiting /404-not-found', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/404-not-found' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(NotFound).length).toBe(1)
})
