import VueRouter from 'vue-router'

import PageIndex from '../components/pages/Index.vue'
import PageIntro from '../components/pages/Intro.vue'
import PageDocs from '../components/pages/Docs.vue'
import PageCommunity from '../components/pages/Community.vue'
import PageBlogIndex from '../components/pages/BlogIndex.vue'
import PageBlogPost from '../components/pages/BlogPost.vue'

const routes = [
  { path: '/', component: PageIndex },
  { path: '/intro', component: PageIntro },
  { path: '/docs', component: PageDocs },
  { path: '/community', component: PageCommunity },
  { path: '/blog', component: PageBlogIndex },
  { path: '/blog/:post', component: PageBlogPost }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
