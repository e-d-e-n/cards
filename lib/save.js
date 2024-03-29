const fs = require('fs')
const crypto = require('crypto')
const repng = require('repng')
const compress = require('./compress')
const server = require('./server')

const createFolderName = folder => props => `output/${folder}/` + crypto
	.createHash('md5')
	.update(JSON.stringify(props))
	.digest('hex') + '.png'

const defaultOptions = {width: 512, height: 1024, css: 'html {font-size: 32px}'}

module.exports = (folder, Component, instanceOptions) => {
	let index = 0
	const createFileName = createFolderName(folder)
	const options = {...defaultOptions, ...instanceOptions}
	const listening = server.start()
	const r = async props => {
		await listening
		const thisJobIndex = ++index
		console.time(`job #${thisJobIndex}`)
		const result = await repng(Component, {...options, props})
		const file = fs.createWriteStream(createFileName(props))
		const stream = compress(result).pipe(file)
		await new Promise(resolve => stream.on('finish', resolve))
		console.timeEnd(`job #${thisJobIndex}`)
	}
	const render = props => r(props).catch(e => (console.log(e), process.exit(1)))
	render.destroy = () => server.stop()
	return render
}
