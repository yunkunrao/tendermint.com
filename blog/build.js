let _ = require('lodash')
let fs = require('fs')
let glob = require('glob')
let moment = require('moment')

let toSlugCase = require('to-slug-case')
let toPascalCase = require('to-pascal-case')
let yaml = require('js-yaml')

let blogTitle = 'Tendermint Blog'

let postsDirectory = './src/content/blog/'
let posts = glob.sync(postsDirectory + '*.md')

let postsJsonFile = './src/store/json/posts.json'
let blogRssFile = './src/assets/feed.xml'

let rssTemplate = require('./rssTemplate.js')

// set markdown-it settings
let md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

function markdownToObject (files) {
  let posts = []
  for (let i = 0; i < files.length; i++) {
    let post = {title: '', slug: '', author: '', date: '', body: ''}

    let data = fs.readFileSync(files[i], 'utf8')
    let metaData = yaml.load(data.split('---')[1])
    let markdownData = data.split('---')[2]

    // set the post metadata
    post.title = metaData.title
    post.slug = toSlugCase(metaData.title)
    post.author = metaData.author
    post.date = moment(metaData.date).valueOf() // ms since epoch
    post.description = metaData.description
    post.dateFriendly = moment(post.date, 'x').format('LL')
    post.body = md.render(markdownData)

    posts.push(post)
  }
  // order posts by newest first
  posts = _.orderBy(posts, ['date'], ['desc'])
  return posts
}

function writePostsJson (data) {
  let f = JSON.stringify(data, null, 2)
  fs.writeFileSync(postsJsonFile, f, 'utf8')
  console.log(`  ✓ ${postsJsonFile}`)
}

function writeRssFile (data) {
  let rss = rssTemplate(data)
  fs.writeFileSync(blogRssFile, rss, 'utf8')

  console.log(`  ✓ ${blogRssFile}`)
}

let postData = markdownToObject(posts)
writePostsJson(postData)
writeRssFile(postData)
