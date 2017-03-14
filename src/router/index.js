import VueRouter from 'vue-router'
function r (page) { return require('../components/Page' + page) }

const routes = [

  // Redirects take priority over everything else
  { path: '/intro/tmsp-overview', redirect: '/intro/abci-overview' },
  { path: '/intro/tendermint-vs', redirect: '/intro/tendermint-vs-x' },
  { path: '/intro/first-tmsp', redirect: '/intro/first-abci' },
  { path: '/intro/getting-started/install', redirect: '/intro/download-tendermint' },
  { path: '/intro/getting-started/download', redirect: '/intro/download-tendermint' },
  { path: '/docs/internals/consensus',
    redirect: '/docs/internals/byzantine-consensus-algorithm' },
  { path: '/blog/tendermint-socket-protocol',
    redirect: '/blog/abci-the-application-blockchain-interface' },
  { path: '/docs/guides/install', redirect: '/docs/guides/install-from-source' },
  { path: '/code', redirect: '/docs' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
  { path: '/media', redirect: '/presentations' },
  { path: '/media/:entry', redirect: '/presentations/:entry' },
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog/:entry' },
  { path: '/guides/contributing', redirect: '/docs/guides/contributing' },

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

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      let name = to.hash.replace('#', '')
      let obj =
        document.querySelector(to.hash) || document.querySelector(`[name="${name}"]`)

      let rect = obj.getBoundingClientRect()
      console.log('hash exists', obj, 'obj.top', rect.top)
      return {
        // selector: to.hash
        x: rect.left,
        y: rect.top - 48 - 16 - 8
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
