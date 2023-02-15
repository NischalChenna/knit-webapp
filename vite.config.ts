import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  plugins: [viteCommonjs(), react()],
  build: {
    commonjsOptions: {
      defaultIsModuleExports(id) {
        try {
          const module = require(id);
          if (module?.default) {
            return false;
          }
          return 'auto';
        } catch (error) {
          return 'auto';
        }
      },
      transformMixedEsModules: true,
    },
  },
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
