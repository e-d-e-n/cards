const React = require('react')
const he = require('he')

const tweetStyle = {
	fontSize: '0.875rem',
	padding: '0 0.75rem',
}

const imgStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	display: 'block',
	marginTop: '0.5rem',
	maxHeight: '10rem',
}

const hashStyle = {color: '#365899', fontStyle: 'normal', fontWeight: 500}

const parse = (string) => string.replace(/^&gt;\s*/g, '').split(/ +/g).reduce((elements, word) => {
	const spaced = ` ${he.decode(word)} `
	elements.push(
		!['#', '@'].includes(word[0])
		? spaced
		: <em style={hashStyle}>{spaced}</em>
	)
	return elements
}, [])

module.exports = ({tweet, media}) => (
	<div>
		{tweet && (
			<div style={tweetStyle}>{parse(tweet)}</div>
		)}
		{media && (
			<img src={media} alt={media} style={imgStyle}/>
		)}
	</div>
)
