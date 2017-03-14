function r (page) { return require('../content/intro-' + page + '.vue') }
export default [
  { path: '/intro/abci-overview', component: r('abci-overview') },
  { path: '/intro/consensus-overview', component: r('consensus-overview') },
  { path: '/intro/getting-started/download-tendermint', component: r('getting-started-#01-download-tendermint') },
  { path: '/intro/getting-started/first-abci-app', component: r('getting-started-#02-first-abci-app') },
  { path: '/intro/getting-started/deploy-testnet', component: r('getting-started-#03-deploy-testnet') },
  { path: '/intro/getting-started/next-steps', component: r('getting-started-#04-next-steps') },
  { path: '/intro', component: r('index') },
  { path: '/intro/tendermint-vs-x', component: r('tendermint-vs-x') }
]
