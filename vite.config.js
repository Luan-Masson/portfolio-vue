import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsDir: '',
  base: process.env.NODE_ENV === "production" ? "/portfolio-vue/" : "/",
  assetsInclude: ['**/*.svg'],
  commonjsOptions: {
    esmExternals: true,
 },
})
