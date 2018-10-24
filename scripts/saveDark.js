#!/usr/bin/env node

const repng = require('repng') // babel-register
const {each} = require('async-parallel')
const data = require('../public/profiles/data.json')
const component = require('../src/components/DarkCard')
const render = require('../lib/save')('dark', component)

!(async () => {
	console.time('all jobs')
	await each(data, render, 16)
	render.destroy()
	console.timeEnd('all jobs')
})()
