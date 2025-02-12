import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdownPlugin, Mode } from "vite-plugin-markdown";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdownPlugin({
      mode: [Mode.MARKDOWN, Mode.HTML, Mode.REACT],
    }),
  ],
  server: {
    // 监听所有IP地址
    host: '0.0.0.0',
    port: 8000,
    proxy: {
      '/api': {
          target: 'http://localhost:8080/',
          changeOrigin: true,
      },
    },
  },
  resolve: {
    // 路径别名配置
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
