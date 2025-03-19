import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 引入初始化樣式文件
import '@/styles/common.scss'

// 引入所需的圖標
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons'

// 把圖標添加到庫中
library.add(faHome, faMagnifyingGlass, faBars, faTimes)
library.add(faFacebook, faLine, faInstagram)

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用 FontAwesomeIcon 作為全局組件

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
