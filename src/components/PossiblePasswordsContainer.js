import { colors } from 'material-ui'
import PropTypes from 'prop-types'
import { filter, findLast, identity, keys, map, pipe, sum } from 'ramda'
import React from 'react'

import PossiblePasswords from './PossiblePasswords'

export const dicewareWords = 7776

const entropyTips = [
  {
    color: colors.red,
    minimum: 0,
    strength: 'Very Weak'
  },
  {
    color: colors.yellow,
    minimum: 32,
    strength: 'Weak'
  },
  {
    color: colors.blue,
    minimum: 64,
    strength: 'Strong'
  },
  {
    color: colors.green,
    minimum: 128,
    strength: 'Very Strong'
  }
]

const toggles = {
  Letters: 26,
  'Capital Letters': 26,
  Numbers: 10,
  Symbols: 8
}

export default function PossiblePasswordsContainer({
  length,
  options: { Custom, Generic },
  optionsKey
}) {
  const possibleItems = {
    Generic: pipe(filter(identity), keys, map(key => toggles[key]), sum)(
      Generic
    ),
    Diceware: dicewareWords,
    Custom
  }

  const possiblePasswords = possibleItems[optionsKey] ** length
  const approximate = possiblePasswords > Number.MAX_SAFE_INTEGER
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))
  const entropyTip = findLast(tip => entropyBits >= tip.minimum, entropyTips)

  return (
    <PossiblePasswords
      possiblePasswords={possiblePasswords}
      approximate={approximate}
      entropyBits={entropyBits}
      entropyTip={entropyTip}
    />
  )
}

PossiblePasswordsContainer.propTypes = {
  length: PropTypes.number.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      Letters: PropTypes.bool.isRequired,
      'Capital Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
