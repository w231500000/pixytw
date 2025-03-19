import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 配置elementplus按需導入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
     // ...
     AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1.配置elementplus採用sass樣式配色系統
      resolvers: [ElementPlusResolver({importStyle:"sass"})],
    }),
  ],
  resolve: {
    // 實際的路徑轉換 @ => src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        // 2.自動導入訂製化樣式文件進行樣式覆蓋
        additionalData:`
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `,
      }
    }
  }
})
