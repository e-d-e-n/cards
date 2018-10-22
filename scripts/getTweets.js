#!/usr/bin/env node
const Twitter = require('twitter')
const fs = require('fs')

///////////////////////////////////////////////////////////////////////////////
// variables                                                                 //
///////////////////////////////////////////////////////////////////////////////

const users = [
	'folha',
	'g1',
	'estadao',
	'jornaloglobo',
	'bbcbrasil',
	'exame',
	'veja',
	'theinterceptbr',
	'huffpostbrasil',
	'vicebrasil',
	'todays_kitten',
	'kittentoday',
]

const limit = 50


///////////////////////////////////////////////////////////////////////////////
// auth                                                                      //
///////////////////////////////////////////////////////////////////////////////

const client = new Twitter({
	consumer_key: '46pvnSwIVylfWepbPsP4433wL',
	consumer_secret: 'xWDPHaUkk0ub93qj1DaYgJcO8QtkPUhNFIE7uBAvzbSVLLpLzR',
	access_token_key: '1952916806-9WbU9ROPLd4aVPprQZqWJhaW4RSXrBw4oK8A4Ow',
	access_token_secret: 'gW5iuYPtrTxVhPmQxBemsKz6jCAOqbYx1fT0ewKHFyAkG'
})


///////////////////////////////////////////////////////////////////////////////
// getMedia function                                                         //
///////////////////////////////////////////////////////////////////////////////

const getMedia = (tweet) => ((tweet.entities && tweet.entities.media)
	? tweet.entities.media[0].media_url
	: false
)


///////////////////////////////////////////////////////////////////////////////
// formatTweet function                                                     //
///////////////////////////////////////////////////////////////////////////////

const toISODate = string => new Date(string).toISOString()
const normalizeTweet = tweet => tweet.replace(/ ?(?:https?):\/\/[\n\S]+/g, '').trim()

const formatTweet = (tweet) => ({
	author: {
		at: tweet.user.screen_name,
		name: tweet.user.name,
		profile: tweet.user.profile_image_url,
		location: tweet.user.location,
		verified: tweet.user.verified,
		color: tweet.user.profile_link_color,
	},
	tweet: normalizeTweet(tweet.text),
	// hashtags: tweet.entities.hashtags.map(x => x.text),
	date: toISODate(tweet.created_at),
	media: getMedia(tweet),
	retweets: tweet.retweet_count,
	favorites: tweet.favorite_count,
})


///////////////////////////////////////////////////////////////////////////////
// getTweets function                                                        //
///////////////////////////////////////////////////////////////////////////////

const getTweets = count => async screen_name => new Promise(
	(resolve, reject) => (
		client.get('statuses/user_timeline', {screen_name, count},
			(error, tweets = []) => {
				if(error) return reject(error)
				resolve(tweets.map(tweet => formatTweet(tweet)))
			}
		)
	)
)


///////////////////////////////////////////////////////////////////////////////
// writeJSON function                                                        //
///////////////////////////////////////////////////////////////////////////////

const writeJSON = (file, data) => new Promise((resolve, reject) => {
	fs.writeFile(
		file, JSON.stringify(data, null, 2),
		error => {error ? reject(error) : resolve()}
	)
})


///////////////////////////////////////////////////////////////////////////////
// getAllUsersTweets                                                         //
///////////////////////////////////////////////////////////////////////////////

const getAllUsersTweets = async ({users = [], limit = 2}) => {
	const getTweetsWithLimit = getTweets(limit)
	const userTweets = await Promise.all(users.map(getTweetsWithLimit))
	const allTweets = [...userTweets].reduce((a, u) => [...a, ...u], [])
	return allTweets
}


///////////////////////////////////////////////////////////////////////////////
// output function                                                           //
///////////////////////////////////////////////////////////////////////////////

const tee = file => async data => (
	console.log(data),
	await writeJSON(file, data)
)

if(require.main === module)(
	!(async () => (
		await tee('public/media/data.json')(await getAllUsersTweets({users, limit}))
	))()
)

module.exports = getAllUsersTweets
