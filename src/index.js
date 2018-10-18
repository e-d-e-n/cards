import React from 'react'
import ReactDOM from 'react-dom'
const profiles = require('./profiles-test.json')
const DarkCard = require('./DarkCard')
const LightCard = require('./LightCard')

const wrapperStyle = {
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	minWidth: '90vw'
}

ReactDOM.render(
	<div style={wrapperStyle}>
		<DarkCard {...profiles[Math.floor(Math.random()*profiles.length)]}/>
		<LightCard {...profiles[Math.floor(Math.random()*profiles.length)]}/>
	</div>,
	document.getElementById('root')
)
