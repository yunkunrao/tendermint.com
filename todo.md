# 2016-11-02
* Sidebar
    * Added a scrollbar, and scrolling in the sidebar no longer propogates to the page
    * Fixed the toggle capability for the sidebar
    * Improved sidebar design and usability robustness 
* Home
    * Work-in-progress design improvements and simplification
* Intro
    * Now defaults to the "What is Tendermint" page.
* Docs
    * Now defaults to a new "Documentation" index page.

Tomorrow: implement the jobs page, finish updating the homepage design and content

# 2016-11-01
* General
    * Sidebar functionality and design improvements for desktop and mobile
    * New design for Intro/Docs subpages to use the space more efficiently
    * Overhauled routing code for the Intro/Docs pages to be less repetitive and simpler to update purely with markdown.
* Docs 
    * Added the sidebar http://tendermint.nylira.com/docs/internals/consensus

Tomorrow is making the toggle sidebar button work, and more design improvements for the homepage.

# 2016-10-31
* General
    * Improved the routing of the pages
    * Fixed some links and headings in the markdown files to better work with the Vue design
    * Added a sidebar to the Intro page: https://tendermint.nylira.com/intro/what-is-tendermint
* Intro Page
    * Added What is Tendermint?
    * Added Tendermint vs. Other Software page.
    * Added TMSP Overview
    * Added Getting Started pages
* Docs Page
    * Added the FAQ page.

Tomorrow is implementing the sidebar in the other pages, and design improvements sitewide.

# 2016-10-28
* General:
    * All markdown content is now stored in `./src/content/`. Edit the markdown files and the site will be updated with the reflected changes.
    * Design cleanup - fewer borders and background colors around the site.
    * Revamped the router to be simpler.
* Community page
    * Updated index page
    * Created the Software Ecosystem sub-page based on https://github.com/tendermint/tendermint/wiki/Users
* Docs page
    * Updated index page
    * Created all sub-pages from the markdown data.

Will work on the Intro page starting next week.

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
