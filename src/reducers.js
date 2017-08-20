import GenericOptions from './options/GenericOptions'
import { assoc, identity, map, T } from 'ramda'
import { combineReducers } from 'redux'

function createReducer(actionType, initialState, { callback = identity, min } = {}) {
  return (state = initialState, { payload, type }) => {
    const matchesAction = type === actionType
    const isValid = !Number.isInteger(min) || payload >= min

    return matchesAction && isValid ? callback(payload, state) : state
  }
}

const length = createReducer('SET_LENGTH', 6, { min: 1 })

const custom = createReducer('SET_CUSTOM', 1, { min: 0 })

const generic = createReducer('TOGGLE_GENERIC', map(T, GenericOptions.toggles), {
  callback: ({ checked, name }, state) => assoc(name, checked, state)
})

const optionsKey = createReducer('SET_OPTIONS_KEY', 'diceware')

export default combineReducers({
  length,
  options: combineReducers({
    custom,
    generic
  }),
  optionsKey
})