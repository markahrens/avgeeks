import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B5Zwz4rO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_YQ4eudcb.mjs');
const _page1 = () => import('./chunks/index_BKuq52Nk.mjs');
const _page2 = () => import('./chunks/_.._Ji5LrQXy.mjs');
const _page3 = () => import('./chunks/index_pr5AdsvR.mjs');
const _page4 = () => import('./chunks/_.._DBxNF42K.mjs');
const _page5 = () => import('./chunks/index_DnMJD4sy.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/creators/[creator]/index.astro", _page1],
    ["src/pages/creators/[creator]/[...slug].astro", _page2],
    ["src/pages/creators/index.astro", _page3],
    ["src/pages/trips/[...page].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6754100f-6989-47bd-a097-5bb1152089f2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
