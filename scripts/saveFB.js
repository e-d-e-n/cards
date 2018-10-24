#!/usr/bin/env node

const repng = require('repng') // babel-register
const {each} = require('async-parallel')
const data = require('../public/media/data.json')
const component = require('../src/components/FBCard')
const render = require('../lib/save')('fb', component)

!(async () => {
	console.time('all jobs')
	await each(data, render, 16)
	render.destroy()
	console.timeEnd('all jobs')
})()
