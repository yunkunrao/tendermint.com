import config from '../store/modules/config.js'
export default [
  // redirect all blog posts to medium
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog' },
  { path: '/blog/:entry', redirect: '/blog' },

  // other pages
  {
    path: '/apply',
    beforeEnter: () => {
      window.location.assign(config.state.CAREER_APPLICATION_URL)
    }
  },
  { path: '/code', redirect: '/docs' },
  { path: '/download', redirect: '/downloads' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
  {
    path: '/join',
    beforeEnter: () => {
      window.location.assign(config.state.CAREER_APPLICATION_URL)
    }
  },
  { path: '/media', redirect: '/presentations' },
  { path: '/media/:entry', redirect: '/presentations/:entry' },
  { path: '/guides/contributing', redirect: '/docs/guides/contributing' }
]
