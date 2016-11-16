import VueRouter from 'vue-router'
function page (filename) { return require('../components/pages/' + filename) }

const routes = [
  { path: '/', component: page('Index') },

  // Intro
  { path: '/intro', component: page('Intro/Page') },
  { path: '/intro/:page', component: page('Intro/Page') },
  { path: '/intro/getting-started/:page', component: page('Intro/Page') },

  // Docs
  { path: '/docs', component: page('Docs/Page') },
  { path: '/docs/:page', component: page('Docs/Page') },
  { path: '/docs/guides/:page', component: page('Docs/Page') },
  { path: '/docs/internals/:page', component: page('Docs/Page') },

  // Community Pages
  { path: '/community', component: page('Community') },

  // Blog Pages
  { path: '/blog', component: page('Blog/Index') },
  { path: '/blog/:entry', component: page('Blog/Entry') },

  // Other Pages
  { path: '/about', component: page('About') },
  { path: '/contact', component: page('Contact') },
  { path: '/ecosystem', component: page('SoftwareEcosystem') },
  { path: '/press', component: page('Press') },
  { path: '/careers', component: page('Careers/Index') },
  { path: '/careers/:entry', component: page('Careers/Entry') },
  { path: '/companies', component: page('Companies') },
  { path: '/presentations', component: page('Presentations/Index') },
  { path: '/presentations/:entry', component: page('Presentations/Entry') },

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
