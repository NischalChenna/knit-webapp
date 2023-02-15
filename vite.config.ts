import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ["@babel/preset-react"],
        // Your plugins run before any built-in transform (eg: Fast Refresh)
        plugins: ["@babel/plugin-transform-react-jsx-source"],
        // Use .babelrc files
        babelrc: false,
        // Use babel.config.js files
        configFile: false,
      },
    }),
    //reactRefresh(),
    //   vitePluginImp({
    //     libList: [
    //       {
    //         libName: 'antd',
    //         style: (name) => {
    //           return `antd/lib/${name}/style/index.less`;
    //         },
    //       },
    //     ],
    //   }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_colors.scss";
        `,
      },
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //       modifyVars: {
  //         ...{
  //           'primary-color': '#1DA57A',
  //           'link-color': '#1DA57A',
  //           'border-radius-base': '2px',
  //         },
  //       },
  //     },
  //   },
  // },
  resolve: {
    preserveSymlinks: true,
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@/": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src/"),
    },
  },
});
