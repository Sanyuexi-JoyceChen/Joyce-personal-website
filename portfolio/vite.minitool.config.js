import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

function sanitizeMiniToolSource() {
  return {
    name: 'sanitize-minitool-source',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('/src/styles.css')) {
        return code.replace(/@import\s+url\(['"]https?:\/\/[^)]+\);?\s*/g, '')
      }

      if (!/src\/i18n\/(?:en|zh)\.js$/.test(id)) return null

      return code
        .replace(/<a\s+href='https?:\/\/[^']+'\s+target='_blank'\s+class='[^']*'>(.*?)<\/a>/g, '$1')
        .replace(/(link|url|href):\s*"https?:\/\/[^\"]*"/g, '$1: ""')
        .replace(/target:\s*"_blank"/g, 'target: ""')
        .replace(/"\/projects\//g, '"./projects/')
    },
  }
}

function emitClassicScriptTag() {
  return {
    name: 'emit-classic-script-tag',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace('<script type="module" crossorigin', '<script')
    },
  }
}

export default defineConfig({
  base: './',
  publicDir: 'minitool-public',
  plugins: [
    sanitizeMiniToolSource(),
    vue(),
    tailwindcss(),
    emitClassicScriptTag(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist-minitool',
    emptyOutDir: true,
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
