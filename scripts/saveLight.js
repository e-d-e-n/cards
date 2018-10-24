const fs = require('fs')
const crypto = require('crypto')
const repng = require('repng')
const Component = require('../src/components/LightCard/index')
const Parallel = require('async-parallel')
const data = require('../public/media/data.json')

const options = {
	width: 512,
	height: 1024,
	css: 'html {font-size: 32px}',
}

const createFileName = obj => 'output/light/' + crypto
	.createHash('md5')
	.update(JSON.stringify(obj))
	.digest('hex') + '.png'

let index = 0

const render = async props => {
	const thisJobIndex = ++index
	console.time(`job #${thisJobIndex}`)
	const result = await repng(Component, {...options, props})
	const file = fs.createWriteStream(createFileName(props))
	const stream = result.pipe(file)
	await new Promise(resolve => stream.on('finish', resolve))
	console.timeEnd(`job #${thisJobIndex}`)
}

!(async () => {
	console.time(`all jobs`)
	await Parallel.each(data, render, 16)
	console.timeEnd(`all jobs`)
})()
