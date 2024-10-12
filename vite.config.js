import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),
    eslint({ lintOnStart: true, cache: false }), // 项目运行时进行eslint检查
  ],
})