var RSS = require('rss')
 
module.exports = exports = function (posts) {
	var feed = new RSS({
		title: 'Cosmos Blog',
		description: 'The Internet of Blockchains',
		feed_url: 'http://cosmos.network/static//rss.xml',
		site_url: 'http://cosmos.network',
		image_url: 'http://cosmos.network/static/favicon.png',
		managingEditor: 'Cosmos Foundation',
		webMaster: 'Cosmos Foundation',
		copyright: '2016 Cosmos Foundation',
		language: 'en',
		pubDate: new Date(),
		ttl: '60',
	})
	 
	for (var i = 0; i < posts.length; i++) {
		var p = posts[i]
		feed.item({
			title:  p.title,
			description: p.body,
			url: 'http://cosmos.network/posts/' + p.slug, // link to the item 
			author: p.author, // optional - defaults to feed author property 
			date: p.friendlyDate, // any format that js Date can parse. 
		})
	}
	 
	return feed.xml()
}
