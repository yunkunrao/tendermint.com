import VueRouter from 'vue-router'
function page (filename) { return require('../components/pages/' + filename) }

const routes = [
  { path: '/', component: page('Index') },

  // Docs
  { path: '/docs', component: page('Docs/Page') },
  { path: '/docs/:page', component: page('Docs/Page') },
  { path: '/docs/guides/:page', component: page('Docs/Page') },
  { path: '/docs/internals/:page', component: page('Docs/Page') },

  // Intro
  { path: '/intro', component: page('Intro/Page') },
  { path: '/intro/:page', component: page('Intro/Page') },
  { path: '/intro/getting-started/:page', component: page('Intro/Page') },

  // Community Pages
  { path: '/community', component: page('Community/Index') },
  { path: '/community/presentations', component: page('Community/Presentations/Index') },
  { path: '/community/presentations/:entry', component: page('Community/Presentations/Entry') },

  // Blog Pages
  { path: '/blog', component: page('Blog/Index') },
  { path: '/blog/:entry', component: page('Blog/Entry') },

  // Other Pages
  { path: '/about', component: page('About') },
  { path: '/contact', component: page('Contact') },
  { path: '/ecosystem', component: page('SoftwareEcosystem') },
  { path: '/press', component: page('Press') },
  { path: '/careers', component: page('Careers/Index') },
  { path: '/careers/:entry', component: page('Careers/Entry') }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
