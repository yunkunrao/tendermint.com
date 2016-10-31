import VueRouter from 'vue-router'
function page (filename) { return require('../components/pages/' + filename) }

const routes = [
  { path: '/', component: page('Index') },

  // Docs
  { path: '/docs', component: page('Docs/Index') },
  { path: '/docs/commands', component: page('Docs/Commands') },
  { path: '/docs/faq', component: page('Docs/Faq') },
  { path: '/docs/guides', component: page('Docs/Guides/Index') },
  { path: '/docs/guides/app-architecture', component: page('Docs/Guides/AppArchitecture') },
  { path: '/docs/guides/app-dev', component: page('Docs/Guides/AppDev') },
  { path: '/docs/internals', component: page('Docs/Internals/Index') },
  { path: '/docs/internals/:entry', component: page('Docs/Internals/Entry') },
  { path: '/docs/roadmap', component: page('Docs/Roadmap') },

  // Intro
  { path: '/intro', component: page('Intro/Index') },
  { path: '/intro/getting-started', component: page('Intro/GettingStarted/Index') },
  { path: '/intro/getting-started/install', component: page('Intro/GettingStarted/Install') },
  { path: '/intro/getting-started/first-tmsp', component: page('Intro/GettingStarted/FirstTMSP') },
  { path: '/intro/getting-started/deploy-testnet', component: page('Intro/GettingStarted/DeployTestnet') },
  { path: '/intro/getting-started/next-steps', component: page('Intro/GettingStarted/NextSteps') },
  { path: '/intro/tendermint-vs', component: page('Intro/TendermintVs') },
  { path: '/intro/what-is-tendermint', component: page('Intro/WhatIsTendermint') },
  { path: '/intro/what-is-tmsp', component: page('Intro/WhatIsTMSP') },

  // Community Pages
  { path: '/community', component: page('Community/Index') },
  { path: '/community/about', component: page('Community/About') },
  { path: '/community/media', component: page('Community/Media') },
  { path: '/community/presentations', component: page('Community/Presentations/Index') },
  { path: '/community/presentations/:entry', component: page('Community/Presentations/Entry') },
  { path: '/community/software-ecosystem', component: page('Community/SoftwareEcosystem') },

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
