import VueRouter from 'vue-router'

import PageIndex from '../components/pages/Index.vue'
import PageAbout from '../components/pages/About.vue'
import PageBlogIndex from '../components/pages/BlogIndex.vue'
import PageBlogPost from '../components/pages/BlogPost.vue'
import PageCommunity from '../components/pages/Community.vue'
import PageDocs from '../components/pages/Docs.vue'
import PageIntro from '../components/pages/Intro.vue'
import PageMedia from '../components/pages/Media.vue'
import PagePresentations from '../components/pages/Presentations.vue'
import PagePresentation from '../components/pages/Presentation.vue'

const routes = [
  { path: '/', component: PageIndex },
  { path: '/about', component: PageAbout },
  { path: '/blog', component: PageBlogIndex },
  { path: '/blog/:entry', component: PageBlogPost },
  { path: '/community', component: PageCommunity },
  { path: '/docs', component: PageDocs },
  { path: '/intro', component: PageIntro },
  { path: '/media/', component: PageMedia },
  { path: '/presentations', component: PagePresentations },
  { path: '/presentations/:entry', component: PagePresentation }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
