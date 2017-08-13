import { shallow } from 'enzyme'
import React, { createElement, PureComponent } from 'react'
import { change, handleChange } from './util'

describe('handleChange', () => {
  function getWrapper (target, type = 'text') {
    return change(shallow(createElement(class extends PureComponent {
      render () {
        return <input type={type} name="name" onChange={handleChange.bind(this)}/>
      }
    })), target)
  }

  it('sets input state', () => {
    expect(getWrapper({ value: 'string' })).toHaveState('name', 'string')
  })

  it('sets number state', () => {
    expect(getWrapper({ value: '1' }, 'number')).toHaveState('name', 1)
  })

  it('sets checkbox state', () => {
    expect(getWrapper({ checked: true }, 'checkbox')).toHaveState('name', true)
  })
})
