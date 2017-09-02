import { TextField } from 'material-ui'
import { ImageEdit } from 'material-ui/svg-icons'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { setCustom } from '../actions'

export function CustomOptions({ possibleItems, setCustom }) {
  return (
    <TextField floatingLabelText={<div><ImageEdit /> Possible Items</div>} value={possibleItems} onChange={setCustom} type="number" min="0" required />
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
