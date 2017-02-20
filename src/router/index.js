import VueRouter from 'vue-router'
function page (filename) { return require('../components/' + filename) }

const routes = [

  // Redirects take priority over everything else
  { path: '/intro/tmsp-overview', redirect: '/intro/abci-overview' },
  { path: '/intro/first-tmsp', redirect: '/intro/first-abci' },
  { path: '/intro/install', redirect: '/intro/download' },
  { path: '/intro/getting-started/install', redirect: '/docs/guides/install' },
  { path: '/docs/internals/consensus',
    redirect: '/docs/internals/byzantine-consensus-algorithm' },
  { path: '/blog/tendermint-socket-protocol',
    redirect: '/blog/abci-the-application-blockchain-interface' },
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
  { path: '/', component: page('PageIndex') },

  // Intro
  { path: '/intro', component: page('PageIntroEntry') },
  { path: '/intro/:page', component: page('PageIntroEntry') },
  { path: '/intro/getting-started/:page', component: page('PageIntroEntry') },

  // Docs
  { path: '/docs', component: page('PageDocsEntry') },
  { path: '/docs/:page', component: page('PageDocsEntry') },
  { path: '/docs/guides/:page', component: page('PageDocsEntry') },
  { path: '/docs/internals/:page', component: page('PageDocsEntry') },

  // Community
  { path: '/community', component: page('PageCommunity') },

  // Blog
  { path: '/blog', component: page('PageBlogIndex') },
  { path: '/blog/:entry', component: page('PageBlogEntry') },

  // Other
  { path: '/about', component: page('PageAbout') },
  { path: '/bounties', component: page('PageBountiesIndex') },
  { path: '/bounties/:entry', component: page('PageBountiesEntry') },
  { path: '/contact', component: page('PageContact') },
  { path: '/careers', component: page('PageCareersIndex') },
  { path: '/careers/:entry', component: page('PageCareersEntry') },
  { path: '/companies', component: page('PageCompanies') },
  { path: '/ecosystem', component: page('PageSoftwareEcosystem') },
  { path: '/presentations', component: page('PagePresentationsIndex') },
  { path: '/presentations/:entry', component: page('PagePresentationsEntry') },
  { path: '/press', component: page('PagePress') },

  // Wildcards
  { path: '/404', component: page('Page404') },
  { path: '*', component: page('Page404') }
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
