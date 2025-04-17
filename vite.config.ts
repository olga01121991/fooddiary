import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths';
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "${path.resolve(__dirname, 'src/scss/_vars.scss')}" as *;`,
  //     },
  //   },
  // },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot', '**/*.svg'],
})
