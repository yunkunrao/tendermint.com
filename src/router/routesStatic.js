function r (page) { return require('../components/Page' + page) }
export default [
  // Home
  { path: '/', component: r('Index') },

  // Download page
  { path: '/downloads', component: r('Download') },

  // Other
  { path: '/about', component: r('About') },
  { path: '/careers', component: r('CareersIndex') },
  { path: '/careers/:entry', component: r('CareersEntry') },
  { path: '/contribute', component: r('Contribute') },
  { path: '/ecosystem', component: r('SoftwareEcosystem') },
  { path: '/presentations', component: r('PresentationsIndex') },
  { path: '/presentations/:entry', component: r('PresentationsEntry') },
  { path: '/press', component: r('Press') },
  { path: '/privacy', component: r('Privacy') },
  { path: '/security', component: r('Security') },

  // External
  { path: '/blog',
    beforeEnter: () => {
      window.location.assign('https://blog.cosmos.network/tendermint/home')
    }
  },
  {
    path: '/docs*',
    beforeEnter: () => {
      window.location.assign('https://tendermint.readthedocs.io/en/master/')
    }
  },
  { path: '/github',
    beforeEnter: () => {
      window.location.assign('https://github.com/tendermint')
    }
  },

  // Wildcards
  { path: '/404', component: r('404') },
  { path: '*', component: r('404') }
]
