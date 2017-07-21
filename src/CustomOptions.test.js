import change from './change'
import CustomOptions from './CustomOptions'
import { shallow } from 'enzyme'
import React from 'react'

const wrapper = shallow(<CustomOptions onChange={() => {}}/>)

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('sets state and provides possiblePasswords', () => {
  expect(wrapper.state()).toEqual({ possibleItems: 1 })
  expect(wrapper.instance().possiblePasswords()).toBe(1)

  change(wrapper.find({ name: 'possibleItems' }), { value: 2 })
  expect(wrapper.state()).toEqual({ possibleItems: 2 })
  expect(wrapper.instance().possiblePasswords()).toBe(2)
})
