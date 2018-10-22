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
	padding: '1.125rem',
}


module.exports = ({
	media = "catly",
	text = "Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
	image = 'https://valevets.com/wp-content/uploads/2014/08/kitten1.jpg',
}) => (
	<div style={containerStyle}>
		<div style={wrapperStyle}>
			{!!media && (
				<img src={`http://localhost:5000/media/${media}.svg`} style={{width: '100%', display: 'block'}}/>
			)}
			{!!image && (
				<img src={image} style={{width: '100%', display: 'block'}}/>
			)}
			{!!text && (
				<div style={textStyle}>
					{text}
				</div>
			)}
		</div>
	</div>
)
