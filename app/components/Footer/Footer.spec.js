import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Footer from './Footer'

test('It should render the Footer component as expected', () => {
  const component = shallow(<Footer />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
