module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/next-monorepo/apps/web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/ccd33_a66f4c51._.js",
  "chunks/[root-of-the-server]__96a94dd7._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/next-monorepo/apps/web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];