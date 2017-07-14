export default [
  // getting started
  { path: '/intro/getting-started/first-app', redirect: '/docs/getting-started/first-app' },
  { path: '/intro/getting-started/deploy-testnet', redirect: '/docs/getting-started/deploy-testnet' },
  { path: '/intro/getting-started/next-steps', redirect: '/docs/getting-started/next-steps' },
  { path: '/intro/first-tmsp',
    redirect: '/docs/getting-started/first-app' },
  { path: '/docs/getting-started/first-abci',
    redirect: '/docs/getting-started/first-app' },
  { path: '/docs/getting-started/first-abci-app',
    redirect: '/docs/getting-started/first-app' },

  // renaming
  { path: '/intro/tmsp-overview', redirect: '/intro/abci-overview' },
  { path: '/intro/tendermint-vs', redirect: '/intro/tendermint-vs-x' },

  // download
  { path: '/downloads', redirect: '/download' },
  { path: '/intro/getting-started/install', redirect: '/download' },
  { path: '/intro/getting-started/download', redirect: '/download' },
  { path: '/intro/download-tendermint', redirect: '/download' },
  { path: '/intro/getting-started/download-tendermint', redirect: '/download' },

  { path: '/docs/specs/consensus',
    redirect: '/docs/specs/byzantine-consensus-algorithm' },
  { path: '/blog/tendermint-socket-protocol',
    redirect: '/blog/abci-the-application-blockchain-interface' },
  { path: '/docs/guides/install', redirect: '/docs/guides/install-from-source' },

  // other pages
  { path: '/code', redirect: '/docs' },
  { path: '/guide', redirect: '/docs' },
  { path: '/jobs', redirect: '/careers' },
  { path: '/jobs/:entry', redirect: '/careers/:entry' },
  { path: '/media', redirect: '/presentations' },
  { path: '/media/:entry', redirect: '/presentations/:entry' },
  { path: '/posts', redirect: '/blog' },
  { path: '/posts/:entry', redirect: '/blog/:entry' },
  { path: '/guides/contributing', redirect: '/docs/guides/contributing' }
]
