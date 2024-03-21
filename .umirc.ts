import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: 'yarn',
  plugins: [
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/locale'
  ],
  title: "INTO Dapp demo",
  antd: {},
  clientLoader: {},
  locale: {
    default: 'en-US',
    baseSeparator: '-',
  },
  jsMinifierOptions: {
    target: ['chrome80', 'es2020']
  }

});
