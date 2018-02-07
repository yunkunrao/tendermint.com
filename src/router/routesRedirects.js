export default [
  // redirect all blog posts to medium
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog' },
  { path: '/blog/:entry', redirect: '/blog' },

  // redirect old JSON Career urls to new Markdown Career urls
  { path: '/careers/networking-consensus-engineer',
    redirect: '/careers/developer-consensus' },
  { path: '/careers/apps-developer', redirect: '/careers/developer-cosmos' },
  { path: '/careers/devops-sysops-engineer', redirect: '/careers/developer-devops' },
  { path: '/careers/ethereum-developer', redirect: '/careers/developer-ethereum' },
  { path: '/careers/p2p-networking-engineer', redirect: '/careers/developer-p2p' },
  { path: '/careers/ops-office-manager', redirect: '/careers/office-manager-sf' },
  { path: '/careers/berlin-office-manager', redirect: '/careers/office-manager-berlin' },

  // other pages
  { path: '/code', redirect: '/docs' },
  { path: '/download', redirect: '/downloads' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
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
