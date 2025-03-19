// createRouter:創建router實例
// createWebHistory:使用html5的history模式

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由配置path和component對應關係的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})

export default router
