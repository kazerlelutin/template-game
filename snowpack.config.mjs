/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: "/", static: true,resolve: false },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-dotenv"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    minify: true,
    target: "es2018",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    out: "/dist",
    /* ... */
  },
  buildOptions: {
    sourcemap: true
  },
};
