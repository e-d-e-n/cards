const React = require('react')

const reactions = ['love', 'haha', 'wow', 'sad', 'angry']

const footerStyle = {
	padding: '0.75rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	color: '#616770',
	fontSize: '0.75rem',
	lineHeight: '1rem',
}

const reactionsStyle = {
	display: 'flex',
	flexDirection: 'row-reverse',
	alignItems: 'center',
}

const reactionStyle = {
	marginRight: '-0.125rem',
	boxShadow: '0 0 0 0.125rem white',
	borderRadius: '1rem',
	width: '1rem',
	height: '1rem',
	overflow: 'hidden',
}

const shuffle = array => array.sort(() => 0.5 - Math.random()).slice(0,2)

const magic = num => Math.floor(num * 10 * Math.random() + (14 * Math.random()))

module.exports = ({retweets, favorites}) => (
	<div style={footerStyle}>
		<div style={reactionsStyle}>
			<div style={{marginLeft: '0.375rem'}}>{magic(favorites)}</div>
			{shuffle(reactions).concat('like').map(reaction => (
				<div key={reaction} style={reactionStyle}>
					<img
						alt={reaction}
						src={`http://localhost:5000/reactions/${reaction}.png`}
						style={{width: '1rem', height: '1rem'}}
					/>
				</div>
			))}
		</div>
		<div style={{marginLeft: '0.5rem'}}>{magic(retweets)} Comentários</div>
	</div>
)
