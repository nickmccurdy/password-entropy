import {
  Card,
  CardContent,
  createMuiTheme,
  LinearProgress,
  MuiThemeProvider,
  Typography
} from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'

export default function PossiblePasswords({
  possiblePasswords,
  approximate,
  entropyBits,
  entropyTip: { color, strength }
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="title" gutterBottom>
          Results
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Entropy
        </Typography>
        <Typography gutterBottom>
          {entropyBits.toFixed(2)} bits ({strength})
        </Typography>
        <MuiThemeProvider
          theme={createMuiTheme({ palette: { primary: color } })}
        >
          <LinearProgress
            value={entropyBits * 100 / 128}
            variant="determinate"
          />
        </MuiThemeProvider>

        <Typography variant="subheading" gutterBottom>
          Possible Passwords
        </Typography>
        <Typography gutterBottom>
          {approximate && '~ '} {possiblePasswords}
        </Typography>
      </CardContent>
    </Card>
  )
}

PossiblePasswords.propTypes = {
  approximate: PropTypes.bool.isRequired,
  entropyBits: PropTypes.number.isRequired,
  entropyTip: PropTypes.shape({
    color: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    minimum: PropTypes.number.isRequired,
    strength: PropTypes.string.isRequired
  }).isRequired,
  possiblePasswords: PropTypes.number.isRequired
}
