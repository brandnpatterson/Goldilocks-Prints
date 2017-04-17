import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Contact from './Contact'

test('It should render the Contact component as expected', () => {
  const component = shallow(<Contact />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
