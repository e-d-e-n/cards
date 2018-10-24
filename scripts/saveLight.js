#!/usr/bin/env node

const repng = require('repng') // babel-register
const {each} = require('async-parallel')
const data = require('../public/profiles/data.json')
const component = require('../src/components/LightCard')
const render = require('../lib/save')('light', component)

!(async () => {
	console.time('all jobs')
	await each(data, render, 16)
	console.timeEnd('all jobs')
})()
