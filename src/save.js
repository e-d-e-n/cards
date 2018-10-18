const fs = require('fs')
const crypto = require('crypto')
const repng = require('repng')
const Component = require('./DarkCard')

const options = {
	props: {title: 'hello'},
	width: 256,
	height: 512,
}

const createFileName = obj => 'output/' + crypto
	.createHash('md5')
	.update(JSON.stringify(obj))
	.digest('hex') + '.png'

!(async () => {
	const result = await repng(Component, options)
	const file = fs.createWriteStream(createFileName(options.props))
	result.pipe(file)
})()
