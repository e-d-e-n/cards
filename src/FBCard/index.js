const React = require('react')
const Header = require('./Header')
const Main = require('./Main')
const Footer = require('./Footer')

const containerStyle = {
	width: '16rem',
	height: '32rem',
	fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
	textRendering: 'optimizeLegibility',
	fontSmoothing: 'antialiased',
	WebkitFontSmoothing: 'antialiased',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	boxSizing: 'border-box',
}

const wrapperStyle = {
	background: '#fff',
	color: '#141823',
	boxSizing: 'border-box',
	lineHeight: '1.125rem',
}

module.exports = ({author, tweet, date, media, retweets, favorites}) => (
	<div style={containerStyle}>
		<div style={wrapperStyle}>
			<Header author={author} date={date}/>
			<Main tweet={tweet} media={media}/>
			<Footer retweets={retweets} favorites={favorites}/>
		</div>
	</div>
)
