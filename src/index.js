import React from 'react'
import ReactDOM from 'react-dom'
const profiles = require('./profiles-test.json')
const App = require('./DarkCard')

ReactDOM.render(
	<App {...profiles[Math.floor(Math.random()*profiles.length)]}/>,
	document.getElementById('root')
)
