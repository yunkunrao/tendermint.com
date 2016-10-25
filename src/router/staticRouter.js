// STATIC ROUTES
import VueRouter from 'vue-router'

import PageIndex from '../components/pages/Index.vue'
import PageIntro from '../components/pages/Intro.vue'
import PageDocs from '../components/pages/Docs.vue'
import PageCommunity from '../components/pages/Community.vue'
import PageBlogIndex from '../components/pages/BlogIndex.vue'

const staticRoutes = [
  { path: '/', component: PageIndex },
  { path: '/intro', component: PageIntro },
  { path: '/docs', component: PageDocs },
  { path: '/community', component: PageCommunity },
  { path: '/blog', component: PageBlogIndex }
]

let routes = staticRoutes.concat(blogRoutes)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
