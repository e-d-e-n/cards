import React from 'react'
import ReactDOM from 'react-dom'
const profiles = require('./mock/profiles.json')
const tweets = require('./mock/tweets.json')
const DarkCard = require('./components/DarkCard/index')
const LightCard = require('./components/LightCard/index')
const FBCard = require('./components/FBCard/index')

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
		<LightCard {...tweets[Math.floor(Math.random()*tweets.length)]}/>
		<FBCard {...tweets[Math.floor(Math.random()*tweets.length)]}/>
	</div>,
	document.getElementById('root')
)
