import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DropBtn from './DropBtn'

test('It should render the DropBtn component as expected', () => {
  const component = shallow(<DropBtn />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
