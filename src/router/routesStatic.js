function r (page) { return require('../components/Page' + page) }
export default [
  // Home
  { path: '/', component: r('Index') },

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
