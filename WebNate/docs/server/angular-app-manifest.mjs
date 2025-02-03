
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/NateWeb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/NateWeb"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 681, hash: '0bf87bcf93c432eb8bf455ea98eb76bdf551e93e72cafcde76be370f58ec48ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '615af5dc8be38f2eef1863aa5fe070516d77cb6b6faed12da8c13bb469f678d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2086, hash: '16b8154f830198cbeff5d8ecc3d94db1f10081be9e590c5093d3fe2498443811', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7HCKL3HY.css': {size: 44, hash: 'RnO0YkbANT8', text: () => import('./assets-chunks/styles-7HCKL3HY_css.mjs').then(m => m.default)}
  },
};
