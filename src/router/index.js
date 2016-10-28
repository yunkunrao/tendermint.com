import VueRouter from 'vue-router'
function page (filename) { return require('../components/pages/' + filename) }

const routes = [
  { path: '/', component: page('Index') },

  // Docs Pages
  { path: '/docs', component: page('Docs') },
  { path: '/commands', component: page('Commands') },
  { path: '/guides', component: page('Guides/Index') },
  { path: '/guides/app-architecture', component: page('Guides/AppArchitecture') },
  { path: '/guides/app-dev', component: page('Guides/AppDev') },
  { path: '/internals', component: page('Internals/Index') },
  { path: '/internals/:entry', component: page('Internals/Entry') },
  { path: '/roadmap', component: page('Roadmap') },

  // Intro Pages
  { path: '/intro', component: page('Intro') },

  // Community Pages
  { path: '/community', component: page('Community') },
  { path: '/about', component: page('About') },
  { path: '/media/', component: page('Media') },
  { path: '/presentations', component: page('Presentations/Index') },
  { path: '/presentations/:entry', component: page('Presentations/Entry') },
  { path: '/software-ecosystem', component: page('SoftwareEcosystem') },

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
