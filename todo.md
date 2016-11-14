# 2016-11-11
* General
    * Layout improvements: phones and tablet design
    * Usability improvement: Sidebar now overlaps the Footer, which makes more sense for readability
    * Added a "Get Tendermint" button to the bottom of most pages
* Home
    * Improved the design of the Benefits on the homepage
* Blog
    * fixed the issue with images not loading properly

# 2016-11-10
* general
    * redirects: to prevent link rot, I'm redirecting (from the old site):
      * /posts -> /blog
      * /posts/:entry -> /blog/:entry
      * /jobs/ -> /careers/
      * /media -> /presentations
      * /code -> /docs
      * /guide -> /docs
* /about - design overhaul (added more content)
* /companies - added this page showcasing companies using Tendermint (no content yet)
* /presentations - added this page with video content from the old site

The new pages:
https://tendermint.nylira.com/about
https://tendermint.nylira.com/companies
https://tendermint.nylira.com/presentations

@jae do you have the data for companies on Tendermint I can put up?
@jae @ebuchman go ahead and suggest changes for the About text - I yanked the current version from http://bitcoinist.net/tendermint-unveil-ui-demo-first-blockchain-apps/

# 2016-11-09
I started reading through the documentation and fixed links and added them where appropriate (e.g., localhost)
* general
    * design updates
    * fix more broken links
    * disabled syntax higlightning for now because automatic language detection for smaller snippets was way off
* /intro, /docs
    * fixed a serious issue where clicking on local links in Markdown files reloaded the entire web app - only solution was to change the standard markdown links e.g. `[intro](/intro)` to vue-style `<router-link to="/intro">Intro</router-link>`
* /docs/app-architecture http://localhost:8800/docs/guides/app-architecture
    * Fixed the https://raw.githubusercontent.com/wolfposd/tutorials/master/images/tendermint/TMApplicationExample.png image link
* /blog
    * fixed image links
    * fixed the rendering of the "Tendermint vs PBFT" page

Merkle Trees page in Docs -- should we move this over from the Wiki? There's a link to it on the Light Client Protocol page.

# 2016-11-08
* general
    * Fixed: more broken links
    * Improvement: sidebar vertical height reduced, lets you see more links on shorter screens
    * Syntax highlighting is back.
* /
    * Hid the Recruiting/Custom Blockchains block
* /intro
    * Added 'Next Step' to every page of 'Getting Started' for better flow
* /community
    * Added a prominent link to Slack
    * Fleshed out this page with larger links and more text.
* /blog
    * Fixed page titles
    * Fixed footer link not linking to the right page
    * Cases for Tendermint - fixed some links
* /contact
    * Added a couple lines of descriptive text
    * Added more contact options: twitter, linkedin, etc.
* /404
    * Created this page, should match all broken links including subdirectories

Tomorrow: add minimum page height for larger displays so the footer isn't halfway up the page, better markdown processing for the blog to support images

# 2016-11-07
* General
    * Fixed: Markdown pages didn't have approprite HTML titles, still more to fix
    * Fixed: A lot of broken markdown links, still more to fix
    * Overall design simplification
    * Footer design updated
    * Fixed/improved some routing
* Community/Jobs
    * Weighted in the correct order
    * renamed to /Careers
* Docs/Definitions
    * Created this page, no definitions yet

Tomorrow: fix more broken links and images in the docs and blog posts, flesh out the Contact page and the Press page

# 2016-11-04
* General
    * Updated the Tendermint README to show how to edit content across the site.
    * Simplified the footer design
* Home
    * Hid the Resources section
* Intro https://tendermint.nylira.com/intro/what-is-tmsp
    * Moved the Technology images into TSMP Overview and Consensus Overview
* Community/Jobs https://tendermint.nylira.com/community/jobs
    * Created the jobs index page with a filterable tag system
    * Jobs are sorted by priority levels and then by title
    * Created individual job pages.
* Community/SoftwareEcosystem https://tendermint.nylira.com/community/software-ecosystem
    * Added a table view for larger displays
    * Allows for re-ordering by name, language, tech, and description.
    * Allows for searching of entries.

Next monday: footer simplification, design improvements, bug fixes

# 2016-11-03
* General
    * Added production deployment script, run with `npm run build` and then `npm run prod`
    * Added the Tendermint: from Then to Now post over.
    * Fixed: local images in markdown files were broken, fixed it for documentation, still need to fix for blog
* Footer
    * Simplified footer
* Home http://tendermint.nylira.com/community/software-ecosystem
    * Changed the Subscribe button to Install Tendermint
    * Removed video
    * Moved the techy images to a subpage of the Intro http://tendermint.nylira.com/intro/technology
* Software Ecosystem http://tendermint.nylira.com/community/software-ecosystem
    * Created new page

The site is not complete yet, but it's ready to be deployed.

Tomorrow:
    * Add the Jobs section
    * add sorting/re-ordering the Software Ecosystem
    * potentially hook up the Github API with that page for stars and latest commit details

# 2016-11-02
* Sidebar updated: https://tendermint.nylira.com/docs
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
