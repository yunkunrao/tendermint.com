# 2016-10-27
* General
    * Implemented Presentations and Media Mentions
    * Improved/fixed the share to Facebook/Twitter links at the bottom of a post/presentation
    * Improved the faster youtube thumbnail code with a video start time option
    * Header: fixed the header being too wide on iPhone 5/SE displays.
    * Footer: added Github to the footer.
    * Social Menus: sorted social icons alphabetically: Facebook, GitHub, LinkedIn, Slack, Twitter
    * Page Header: fixed a problem where page headers were too short on smaller devices.
* Home
    * Fixed up the Resources section with Blog, Presentations, and Media Mentions.
* Presentations
    * Renamed Media -> Presentations because we can use Media to refer to Media Mentions
    * Created index/individual pages for presentations
    * Fixed an issue where youtube videos dimensions were too wide for phones and tablets
* Media Mentions
    * Added a DevCon 2/Cosmos post to the News section - https://bitcoinmagazine.com/articles/tendermint-wins-innovation-award-and-announces-cosmos-at-international-blockchain-week-1474657507
    * Created an index page for all prominent Tendermint news mentions
* About
    * Created the page and added the team and advisors

# 2016-10-26
* Add the rest of the blog content back to the site
    * markdown to json data script
    * disqus comments
    * Bug fixes: title escaping, smart quotes, various other blog bugs
    * Design updates for the blog
    * All the URLs will remain the same for SEO/historical purposes.
* Preview version is available at `https://tendermint.nylira.com/blog`
* Tomorrow I'll work on getting more data into the Intro/Docs/Community pages

# 2016-10-25
* Moved most of the site over to Vue.
* Added a Github link to the site header.
* Created the new empty Intro, Docs, Community pages
* Design, font improvements.

It's in the `redesign-vue` branch. I'll put up a live demo tomorrow with the new content

I'll move all the content from the `redesign` branch into it tomorrow, and put a live version of the site.
