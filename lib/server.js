const serve = require('serve-handler')
const http = require('http')

const handler = (req, res) => serve(req, res, {public: 'public'})
const server = http.createServer(handler)

module.exports = {
	start: () => new Promise(resolve => server.listen(5000, resolve)),
	stop: () => new Promise(resolve => server.close(resolve)),
}
