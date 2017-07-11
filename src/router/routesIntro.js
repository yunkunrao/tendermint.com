function r (page) { return require('../content/intro-' + page + '.vue') }
export default [
  { path: '/intro/tendermint-vs-x', component: r('#01-tendermint-vs-x') },
  { path: '/intro/abci-overview', component: r('#02-abci-overview') },
  { path: '/intro/consensus-overview', component: r('#03-consensus-overview') },
  { path: '/intro', component: r('index') }
]
