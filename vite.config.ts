import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import replace from "@rollup/plugin-replace";
export default defineConfig({
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
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
