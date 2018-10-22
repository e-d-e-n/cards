const React = require('react')

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
	padding: '1rem 1.125rem 1.125rem',
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

const parse = (string, color) => string.split(/ +/g).reduce((elements, word) => {
	const spaced = ` ${word} `
	elements.push(
		!['#', '@'].includes(word[0])
		? spaced
		: <em style={hashStyle(color)}>{spaced}</em>
	)
	return elements
}, [])

const mediaImage = author => `http://localhost:5000/media/${sources.includes(author.at.toLowerCase()) ? author.at : 'catly'}.svg`

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
		</div>
	</div>
)
