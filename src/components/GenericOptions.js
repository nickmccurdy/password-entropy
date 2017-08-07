import handleChange from '../handleChange'
import Options from './Options'
import React, { PureComponent } from 'react'

export default class GenericOptions extends PureComponent {
  static propTypes = Options.sharedPropTypes
  static shortName = 'Generic'

  static toggles = {
    letters: {
      label: 'Letters',
      possibleItems: 26
    },
    capitalLetters: {
      label: 'Capital Letters',
      possibleItems: 26
    },
    numbers: {
      label: 'Numbers',
      possibleItems: 10
    },
    symbols: {
      label: 'Symbols',
      possibleItems: 8
    }
  }

  state = {
    letters: true,
    capitalLetters: true,
    numbers: true,
    symbols: true
  }

  handleChange = handleChange.bind(this)

  possiblePasswords = () => {
    const keys = Object.entries(this.state)
                       .filter(([key, value]) => value)
                       .map(([key, value]) => key)

    return keys.reduce((memo, key) => memo + this.constructor.toggles[key].possibleItems, 0)
  }

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Generic</h3>

        {Object.entries(this.constructor.toggles)
               .map(([name, { label, example }]) => (
                 <label key={name}>
                   <input type="checkbox" name={name} checked={this.state[name]} onChange={this.handleChange}/>
                   { label }
                 </label>
               ))}
      </Options>
    )
  }
}
