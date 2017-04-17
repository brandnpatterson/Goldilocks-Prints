import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Gallery from './Gallery'

test('It should render the Gallery component as expected', () => {
  const component = shallow(<Gallery />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
