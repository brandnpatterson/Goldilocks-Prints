import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import NotFound from './NotFound'

test('It should render the NotFound component as expected', () => {
  const component = shallow(<NotFound />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
