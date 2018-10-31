const {spawn} = require('child_process')
const Stream = require('stream')

if(!require('command-exists').sync('pngquant')){
	throw new Error('pngquant must be installed!')
}

module.exports = streamIn => {
	const proc = spawn('pngquant', ['--posterize=4', '-'])
	const stream = new Stream()
	proc.stderr.on('data', stream.emit.bind(stream, 'error'))
	proc.stdout.on('data', stream.emit.bind(stream, 'data'))
	proc.stdout.on('end', stream.emit.bind(stream, 'end'))
	proc.on('error', stream.emit.bind(stream, 'error'))
	streamIn.pipe(proc.stdin)
	return stream
}
