import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import PasswordEntropyContainer from './components/PasswordEntropyContainer'
import registerServiceWorker from './registerServiceWorker'

render(<PasswordEntropyContainer />, document.getElementById('root'))
registerServiceWorker()
if (import.meta.webpackHot) import.meta.webpackHot.accept()
