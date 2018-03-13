import { always, filter, findLast, identity, keys, map, pipe, sum } from 'ramda'

import { toggles } from './generic'

export const dicewareWords = 7776

const entropyTips = [
  {
    minimum: 0,
    strength: 'Very Weak',
    style: 'danger'
  },
  {
    minimum: 32,
    strength: 'Weak',
    style: 'warning'
  },
  {
    minimum: 64,
    strength: 'Strong',
    style: 'info'
  },
  {
    minimum: 128,
    strength: 'Very Strong',
    style: 'success'
  }
]

const possibleItems = {
  generic: pipe(
    filter(identity),
    keys,
    map(key => toggles[key].possibleItems),
    sum
  ),
  diceware: always(dicewareWords),
  custom: identity
}

export default function possibleItemsSelector({ length, options, optionsKey }) {
  const possiblePasswords =
    possibleItems[optionsKey](options[optionsKey]) ** length
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))

  return {
    approximate: possiblePasswords > Number.MAX_SAFE_INTEGER,
    entropyBits,
    entropyTip: findLast(tip => entropyBits >= tip.minimum, entropyTips),
    possiblePasswords
  }
}
