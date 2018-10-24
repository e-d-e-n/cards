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
	background: '#0B0B0B',
	color: '#fff',
	border: '0.0625rem solid #282828',
	boxSizing: 'border-box',
}


const headerStyle = {
	padding: '1rem',
	display: 'flex',
	alignItems: 'center',
	borderBottom: '0.0625rem solid #282828',
	boxSizing: 'border-box',
}

const avatarStyle = {
	height: '2rem',
	width: '2rem',
	borderRadius: '1rem',
	overflow: 'hidden',
	background: '#333',
	objectFit: 'cover',
	flexShrink: 0,
}

const rightStyle = {
	margin: '0 0.5rem'
}

const nameStyle = {
	fontSize: '0.875rem',
	lineHeight: '1.125rem',
	marginBottom: '0.125rem',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	width: '11rem',
}

const hashStyle = {
	fontFamily: 'Input Mono, monospace',
	color: '#5E5E5E',
	fontSize: '0.5rem',
	lineHeight: '0.75rem',
	fontWeight: 500,
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	width: '11rem',
	letterSpacing: '0.025rem'
}

const mapStyle = {
	mixBlendMode: 'screen',
}

const leftPad = n => (''+n).length !== 2 ? '0'+n : n
const mapPath = () => `http://localhost:5000/maps/${leftPad(Math.floor(Math.random() * 31))}.png`

module.exports = ({src = "29683503_1619938971408545_8331702238720023048_n.jpg", name = "Luiz J Pereira"}) => (
	<div style={containerStyle}>
		<div style={wrapperStyle}>
			<div style={headerStyle}>
				<div style={avatarStyle}>
					<img alt={name} src={`http://localhost:5000/profiles/files/${src}`} style={{width: '100%', display: 'block'}}/>
				</div>
				<div style={rightStyle}>
					<div style={nameStyle}>{name}</div>
					<div style={hashStyle}>{src.replace(/\..+$/, '')}</div>
				</div>
			</div>
			<div style={mapStyle}>
				<img
					alt={name}
					src={mapPath()}
					style={{width: '100%', display: 'block', mixBlendMode: 'screen', imageRendering: 'pixelated',}}
				/>
			</div>
		</div>
	</div>
)
