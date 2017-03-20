function r (page) { return require('../content/intro-' + page + '.vue') }
export default [
  { path: '/intro/tendermint-vs-x', component: r('#01-tendermint-vs-x') },
  { path: '/intro/abci-overview', component: r('#02-abci-overview') },
  { path: '/intro/consensus-overview', component: r('#03-consensus-overview') },
  { path: '/intro/getting-started/download-tendermint', component: r('getting-started-#01-download-tendermint') },
  { path: '/intro/getting-started/first-app', component: r('getting-started-#02-first-app') },
  { path: '/intro/getting-started/deploy-testnet', component: r('getting-started-#03-deploy-testnet') },
  { path: '/intro/getting-started/next-steps', component: r('getting-started-#04-next-steps') },
  { path: '/intro', component: r('index') }
]
