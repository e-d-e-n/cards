const React = require('react')

const containerStyle = {
  width: '16rem',
  height: '32rem',
  fontFamily: 'Input Mono',
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
  border: '1px solid #282828',
  boxSizing: 'border-box',
}


const headerStyle = {
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #282828',
  boxSizing: 'border-box',
}

const avatarStyle = {
  height: '2rem',
  width: '2rem',
  borderRadius: '1rem',
  overflow: 'hidden',
  background: '#333',
  objectFit: 'cover',
}

const rightStyle = {
  margin: '0 0.5rem'
}

const nameStyle = {
  fontSize: '0.875rem',
  lineHeight: '1.125rem',
  marginBottom: '0.125rem',
}

const hashStyle = {
  color: '#5E5E5E',
  fontSize: '0.5rem',
  lineHeight: '0.75rem',
  fontWeight: 500,
}

const mapStyle = {
  height: '16rem',
}

const leftPad = n => (''+n).length !== 2 ? '0'+n : n

const mapPath = `http://localhost:5000/maps/${leftPad(Math.floor(Math.random() * 31))}.png`

module.exports = ({name = 'John Doe', image = '1375dcb48bcd5bd1fe7daebbf3b1c714.jpg'}) => (
  <div style={containerStyle}>
    <div style={wrapperStyle}>
      <div style={headerStyle}>
        <div style={avatarStyle}><img src={image}/></div>
        <div style={rightStyle}>
          <div style={nameStyle}>{name}</div>
          <div style={hashStyle}>{image.split('.')[0]}</div>
        </div>
      </div>
      <div style={mapStyle}>
        <img
          src={mapPath}
          style={{width: '100%'}}
        />
      </div>
    </div>
  </div>
)
