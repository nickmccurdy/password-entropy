import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Options extends Component {
  static sharedPropTypes = {
    onChange: PropTypes.func.isRequired,
  }

  static propTypes = {
    ...Options.sharedPropTypes,
    children: PropTypes.node.isRequired,
    possiblePasswords: PropTypes.func.isRequired
  }

  componentDidMount = this.change
  componentDidUpdate = this.change

  change () {
    this.props.onChange(this.props.possiblePasswords())
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
