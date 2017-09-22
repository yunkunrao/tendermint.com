function r (page) { return () => import('../components/Page' + page) }
export default [
  // Home
  { path: '/', component: r('Index') },

  // Community
  { path: '/community', component: r('Community') },

  // Download page
  { path: '/downloads', component: r('Download') },

  // Other
  { path: '/about', component: r('About') },
  { path: '/bounties', component: r('BountiesIndex') },
  { path: '/bounties/:entry', component: r('BountiesEntry') },
  { path: '/contact', component: r('Contact') },
  { path: '/careers', component: r('CareersIndex') },
  { path: '/careers/:entry', component: r('CareersEntry') },
  { path: '/ecosystem', component: r('SoftwareEcosystem') },
  { path: '/presentations', component: r('PresentationsIndex') },
  { path: '/presentations/:entry', component: r('PresentationsEntry') },
  { path: '/press', component: r('Press') },
  { path: '/privacy', component: r('Privacy') },

  // External
  { path: '/blog', component: r('RedirectToMedium') },
  { path: '/github', component: r('RedirectToGitHub') },

  // Wildcards
  { path: '/404', component: r('404') },
  { path: '*', component: r('404') }
]
