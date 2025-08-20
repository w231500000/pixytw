// createRouter:創建router實例
// createWebHistory:使用html5的history模式

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Live from '@/views/Live/index.vue'
import Activity from '@/views/Activity/index.vue'
import Dynamic from '@/views/Dynamic/index.vue'
import DynamicDetail from '@/views/Dynamic/DynamicDetail.vue'
import Recruit from '@/views/Recruit/index.vue'
import Video from '@/views/Video/index.vue'

import LiveHot from '@/views/Live/components/LiveHot.vue'
import LiveFollow from '@/views/Live/components/LiveFollow.vue'
import LiveRecommend from '@/views/Live/components/LiveRecommend.vue'
import LiveVIP from '@/views/Live/components/LiveVIP.vue'
import LivenewComers from '@/views/Live/components/LiveNewcomers.vue'

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
          path: 'live',
          component: Live,
          children: [
            {
              path: '',
              component: LiveHot,
            },
            {
              path: 'livefollow',
              component: LiveFollow
            },
            {
              path: 'liverecommend',
              component: LiveRecommend
            },
            {
              path: 'livevip',
              component: LiveVIP
            },
            {
              path: 'livenewcomers',
              component: LivenewComers
            },
          ]
        },
        {
          path: 'activity',
          component: Activity
        },
        {
          path: 'dynamic',
          component: Dynamic,
          children:[
            {
              path: 'dynamicdetail',
              component: DynamicDetail
            }
          ]
        },
        {
          path: 'video',
          component: Video,
        },
        {
          path: 'recruit',
          component: Recruit,
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
