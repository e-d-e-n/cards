const React = require('react')
const he = require('he')

const containerStyle = {
	width: '16rem',
	height: '32rem',
	fontFamily: 'Input Sans, sans-serif',
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
	color: '#0B0B0B',
	boxSizing: 'border-box',
	fontSize: '0.75rem',
	lineHeight: '1.125rem',
}

const textStyle = {
	padding: '1rem 1.125rem 0.25rem',
}

const dateStyle = {
	padding: '0.25rem 1.125rem 0.75rem',
	fontSize: '0.675rem',
	opacity: 0.44,
	display: 'flex',
}

const sources = [
	'folha',
	'g1',
	'estadao',
	'jornaloglobo',
	'bbcbrasil',
	'exame',
	'veja',
	'theinterceptbr',
	'huffpostbrasil',
	'vicebrasil',
]

const hashStyle = color => ({color: `#${color}`, fontStyle: 'normal', fontWeight: 500})

const parse = (string, color) => string.replace(/^&gt;\s*/g, '').split(/ +/g).reduce((elements, word, index) => {
	const spaced = ` ${he.decode(word)} `
	elements.push(
		!['#', '@'].includes(word[0])
		? spaced
		: <em style={hashStyle(color)} key={index}>{spaced}</em>
	)
	return elements
}, [])

const mediaImage = author => `http://localhost:5000/media/${sources.includes(author.at.toLowerCase()) ? author.at : 'catly'}.svg`

const parseDate = string => {
	const date = new Date(string)
	date.setUTCHours(date.getHours())
	return date.toISOString()
}

const formatDate = string => parseDate(string).replace(/^\d{2}(\d+)-(\d+)-(\d+)T.+/, '$3.$2.$1')
const formatTime = string => new Date(string).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})

module.exports = ({author, tweet, date, color, media, retweets, favorites}) => (
	<div style={containerStyle}>
		<div style={wrapperStyle}>
			{!!author && (
				<img alt={author.name} src={mediaImage(author)} style={{width: '100%', display: 'block'}}/>
			)}
			{!!media && (
				<img alt={media} src={media} style={{width: '100%', display: 'block', maxHeight: '10rem', objectFit: 'cover'}}/>
			)}
			{!!tweet && (
				<div style={textStyle}>
					{parse(tweet, author.color)}
				</div>
			)}
			{!!date && (
				<div style={dateStyle}>
					<div>{formatDate(date)}</div>
					<div>&nbsp;|&nbsp;</div>
					<div>{formatTime(date)}</div>
				</div>
			)}
		</div>
	</div>
)
