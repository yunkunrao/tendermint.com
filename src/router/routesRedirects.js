export default [
  // redirect all blog posts to medium
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog' },
  { path: '/blog/:entry', redirect: '/blog' },

  // other pages
  { path: '/apply', redirect: '/careers' },
  { path: '/code', redirect: '/docs' },
  { path: '/download', redirect: '/downloads' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
  { path: '/join', redirect: '/careers' },
  { path: '/media', redirect: '/presentations' },
  { path: '/media/:entry', redirect: '/presentations/:entry' },
  { path: '/guides/contributing', redirect: '/docs/guides/contributing' },
  {
    path: '/docs*',
    beforeEnter: () => {
      window.location = 'https://tendermint.readthedocs.io/en/master/'
    }
  }
]
