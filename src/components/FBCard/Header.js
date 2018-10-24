const React = require('react')

const headerStyle = {
	padding: '0.675rem 0.75rem 0.5rem',
	display: 'flex',
	alignItems: 'center',
}

const avatarStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden',
	width: '2.375rem',
	height: '2.375rem',
	borderRadius: '1.875rem',
	background: '#f6f7f8',
	marginRight: '0.675rem',
	flexShrink: 0,
}

const authorStyle = {
	fontWeight: 600,
	fontSize: '0.875rem',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	width: '11rem',
}

const dateStyle = {
	fontSize: '0.75rem',
	color: '#616770',
}

const imgStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	display: 'block',
}

const padLeftAbs2 = num => {
	var norm = Math.floor(Math.abs(num))
	return (norm < 10 ? '0' : '') + norm
}

const parseDate = string => {
	const x = (new Date().getTimezoneOffset())
	const t = `${(x >= 0 ? '+':'-')}${padLeftAbs2(x/60)}:${padLeftAbs2(x%60)}`
	return new Date(new Date(string).toISOString().replace(/Z/, t)).toISOString()
}

const formatDate = string => parseDate(string).replace(/^\d{2}(\d+)-(\d+)-(\d+)T.+/, '$3/$2/$1')
const formatTime = string => parseDate(string).replace(/^.+T(\d+):(\d+).+/, '$1:$2')

module.exports = ({author, date}) => (
	<div style={headerStyle}>
		{author.profile && (
			<div style={avatarStyle}>
				<img alt={author.name} src={author.profile} style={imgStyle}/>
			</div>
		)}
		<div>
			{author.name && (
				<div style={authorStyle}>{author.name}</div>
			)}
			{date && (
				<div style={dateStyle}>
					<span>{formatDate(date)}</span>
					<span style={{opacity: 0.66}}> · {formatTime(date)}</span>
				</div>
			)}
		</div>
	</div>
)
