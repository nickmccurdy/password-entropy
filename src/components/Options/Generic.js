import { Checkbox, FormControlLabel, FormGroup, Typography } from 'material-ui'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

export const examples = {
  Letters: 'a-z',
  'Capital Letters': 'A-Z',
  Numbers: '0-9',
  Symbols: '!@#$%^&*'
}

export default function Generic({ onGeneric, toggles }) {
  return (
    <FormGroup>
      {Object.entries(examples).map(([name, example]) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              name={name}
              checked={toggles[name]}
              onChange={onGeneric}
            />
          }
          label={
            <Fragment>
              {name}
              <Typography variant="caption" gutterBottom>
                {example}
              </Typography>
            </Fragment>
          }
        />
      ))}
    </FormGroup>
  )
}

Generic.propTypes = {
  onGeneric: PropTypes.func.isRequired,
  toggles: PropTypes.shape({
    'Capital Letters': PropTypes.bool.isRequired,
    Letters: PropTypes.bool.isRequired,
    Numbers: PropTypes.bool.isRequired,
    Symbols: PropTypes.bool.isRequired
  }).isRequired
}
