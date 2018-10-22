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

const formatDate = string => new Date(string).toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: '2-digit'})
const formatTime = string => new Date(string).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})

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
