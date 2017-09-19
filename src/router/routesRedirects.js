export default [// download
  { path: '/download', redirect: '/downloads' },
  // redirect all blog posts to medium
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog' },
  { path: '/blog/:entry', redirect: '/blog' },
  // other pages
  { path: '/code', redirect: '/docs' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
  { path: '/media', redirect: '/presentations' },
  { path: '/media/:entry', redirect: '/presentations/:entry' },
  { path: '/guides/contributing', redirect: '/docs/guides/contributing' }
]
