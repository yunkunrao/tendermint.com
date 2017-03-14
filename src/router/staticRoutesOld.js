function r (page) { return require('../components/Page' + page) }
export default [
  // Home
  { path: '/', component: r('Index') },

  // Intro
  { path: '/intro', component: r('IntroEntry') },
  { path: '/intro/:page', component: r('IntroEntry') },
  { path: '/intro/getting-started/:page', component: r('IntroEntry') },
  { path: '/intro/:page', component: r('IntroEntry') },

  // Docs
  { path: '/docs', component: r('DocsEntry') },
  { path: '/docs/:page', component: r('DocsEntry') },
  { path: '/docs/guides/:page', component: r('DocsEntry') },
  { path: '/docs/internals/:page', component: r('DocsEntry') },

  // Community
  { path: '/community', component: r('Community') },

  // Blog
  { path: '/blog', component: r('BlogIndex') },
  { path: '/blog/:entry', component: r('BlogEntry') },

  // Other
  { path: '/about', component: r('About') },
  { path: '/bounties', component: r('BountiesIndex') },
  { path: '/bounties/:entry', component: r('BountiesEntry') },
  { path: '/contact', component: r('Contact') },
  { path: '/careers', component: r('CareersIndex') },
  { path: '/careers/:entry', component: r('CareersEntry') },
  { path: '/companies', component: r('Companies') },
  { path: '/ecosystem', component: r('SoftwareEcosystem') },
  { path: '/presentations', component: r('PresentationsIndex') },
  { path: '/presentations/:entry', component: r('PresentationsEntry') },
  { path: '/press', component: r('Press') },

  // Wildcards
  { path: '/blog/*', component: r('404') },
  { path: '/404', component: r('404') },
  { path: '*', component: r('404') }
]
