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
  { path: '/community/jobs', component: page('Community/Jobs/Index') },
  { path: '/community/jobs/:entry', component: page('Community/Jobs/Entry') },
  { path: '/community/media', component: page('Community/Media') },
  { path: '/community/presentations', component: page('Community/Presentations/Index') },
  { path: '/community/presentations/:entry', component: page('Community/Presentations/Entry') },
  { path: '/community/software-ecosystem', component: page('Community/SoftwareEcosystem') },
  { path: '/community/team', component: page('Community/Team') },

  // Blog Pages
  { path: '/blog', component: page('Blog/Index') },
  { path: '/blog/:entry', component: page('Blog/Entry') }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
