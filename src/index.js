import React from 'react'
import ReactDOM from 'react-dom'
const profiles = require('./profiles-test.json')
const DarkCard = require('./DarkCard/index')
const LightCard = require('./LightCard/index')

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
		<LightCard/>
	</div>,
	document.getElementById('root')
)
