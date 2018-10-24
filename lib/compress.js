const {spawn} = require('child_process')
const Stream = require('stream')
if(!require('command-exists').sync('convert')){
	throw new Error('imagemagick or graphicsmagick must be installed!')
}

module.exports = streamIn => {
	const proc = spawn('convert', ['-', 'PNG8:-'])
	const stream = new Stream()
	proc.stderr.on('data', stream.emit.bind(stream, 'error'))
	proc.stdout.on('data', stream.emit.bind(stream, 'data'))
	proc.stdout.on('end', stream.emit.bind(stream, 'end'))
	proc.on('error', stream.emit.bind(stream, 'error'))
	streamIn.pipe(proc.stdin)
	return stream
}
