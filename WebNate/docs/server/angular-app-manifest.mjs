
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioWebsite/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PortfolioWebsite"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 690, hash: '2648ef13f0bb2b8dfe8747c43737eebd8e42d9b174a073fcf341a9f5aa07c06a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'f4e03b15091782765405fc4dcc8a231a2707824b8518057005064000c0dc51ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2095, hash: '791d2b7a4ef9eabd72a727b7d3c4ebb92c497fc89b00c96f8011da1f4c1c3543', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7HCKL3HY.css': {size: 44, hash: 'RnO0YkbANT8', text: () => import('./assets-chunks/styles-7HCKL3HY_css.mjs').then(m => m.default)}
  },
};
