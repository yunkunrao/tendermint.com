var RSS = require('rss')
 
module.exports = exports = function (posts) {
	var feed = new RSS({
		title: 'Tendermint Blog',
		description: 'Byzantine fault-tolerant replicated state machines in any programming language',
		feed_url: 'https://tendermint.com/static/rss.xml',
		site_url: 'https://tendermint.com',
		image_url: 'https://tendermint.com/static/favicon.png',
		managingEditor: 'Tendermint',
		webMaster: 'Tendermint ',
		copyright: '2016 Tendermint',
		language: 'en',
		pubDate: new Date(),
		ttl: '60',
	})
	 
	for (var i = 0; i < posts.length; i++) {
		var p = posts[i]
		feed.item({
			title:  p.title,
			description: p.body,
			url: 'http://tendermint.com/blog/' + p.slug, // link to the item 
			author: p.author, // optional - defaults to feed author property 
			date: p.friendlyDate, // any format that js Date can parse. 
		})
	}
	 
	return feed.xml()
}
