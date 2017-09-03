import PropTypes from 'prop-types'
import path from 'ramda/src/path'
import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'
import { connect } from 'react-redux'

import { setCustom } from '../actions'
import FormGroup from '../ui/FormGroup'

export function CustomOptions({ possibleItems, setCustom }) {
  return (
    <FormGroup label="Possible Items" icon="question-circle">
      <FormControl value={possibleItems} onChange={setCustom} type="number" min="0" required />
    </FormGroup>
  )
}

CustomOptions.propTypes = {
  possibleItems: PropTypes.number.isRequired,
  setCustom: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  possibleItems: path(['options', 'custom'], state)
})

export default connect(mapStateToProps, { setCustom })(CustomOptions)
