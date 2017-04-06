import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Links from './Links'

test('It should render the Links component as expected', () => {
  const component = shallow(<Links />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

// describe('Links component', () => {
//   it('', () => {
//
//   })
// })
