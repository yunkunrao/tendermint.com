import VueRouter from 'vue-router'
function page (filename) { return require('../components/Page' + filename) }

const routes = [
  { path: '/', component: page('Index') },

  // Intro
  { path: '/intro', component: page('IntroEntry') },
  { path: '/intro/:page', component: page('IntroEntry') },
  { path: '/intro/getting-started/:page', component: page('IntroEntry') },

  // Docs
  { path: '/docs', component: page('DocsEntry') },
  { path: '/docs/:page', component: page('DocsEntry') },
  { path: '/docs/guides/:page', component: page('DocsEntry') },
  { path: '/docs/internals/:page', component: page('DocsEntry') },

  // Community Pages
  { path: '/community', component: page('Community') },

  // Blog Pages
  { path: '/blog', component: page('BlogIndex') },
  { path: '/blog/:entry', component: page('BlogEntry') },

  // Other Pages
  { path: '/about', component: page('About') },
  { path: '/bounties', component: page('Bounties') },
  { path: '/contact', component: page('Contact') },
  { path: '/careers', component: page('CareersIndex') },
  { path: '/careers/:entry', component: page('CareersEntry') },
  { path: '/companies', component: page('Companies') },
  { path: '/ecosystem', component: page('SoftwareEcosystem') },
  { path: '/presentations', component: page('PresentationsIndex') },
  { path: '/presentations/:entry', component: page('PresentationsEntry') },
  { path: '/press', component: page('Press') },

  // redirects
  { path: '/code', redirect: '/docs' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
  { path: '/media', redirect: '/presentations' },
  { path: '/media/:entry', redirect: '/presentations/:entry' },
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog/:entry' },

  // wildcards
  { path: '/404', component: page('404') },
  { path: '*', component: page('404') }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
