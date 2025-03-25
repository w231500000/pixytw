<script>
import HomeBanner3D from './components/HomeBanner3D.vue';
import HomeActivity from './components/HomeActivity.vue';
import HomeAnnouncement from './components/HomeAnnouncement.vue';
import { ref } from 'vue';

const source = ref([
  {
    id: 1,
    pic: new URL('@/assets/images/homeBanner3D/01.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar01.jpg', import.meta.url).href,
    descript:{
      name:'Amy',
      nameinfo:'探索世界的旅行者',
      hot: '99,000'
    }
  },
  {
    id: 2,
    pic: new URL('@/assets/images/homeBanner3D/02.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar02.jpg', import.meta.url).href,
    descript:{
      name:'小星',
      nameinfo:'追逐夢想的女孩',
      hot: '95,000'
    }
  },
  {
    id: 3,
    pic: new URL('@/assets/images/homeBanner3D/03.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar03.jpg', import.meta.url).href,
    descript:{
      name:'樂樂',
      nameinfo:'分享快樂與音樂',
      hot: '89,000'
    }
  },
  {
    id: 4,
    pic: new URL('@/assets/images/homeBanner3D/04.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar04.jpg', import.meta.url).href,
    descript:{
      name:'阿虎',
      nameinfo:'遊戲世界的勇者',
      hot: '86,000'
    }
  },
  {
    id: 5,
    pic: new URL('@/assets/images/homeBanner3D/05.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar05.jpg', import.meta.url).href,
    descript:{
      name:'小雨',
      nameinfo:'熱愛生活的歌手',
      hot: '82,000'
    }
  },
  {
    id: 6,
    pic: new URL('@/assets/images/homeBanner3D/06.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar06.jpg', import.meta.url).href,
    descript:{
      name:'小黑',
      nameinfo:'愛搞笑，分享日常趣事',
      hot: '77,000'
    }
  },
  {
    id: 7,
    pic: new URL('@/assets/images/homeBanner3D/07.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar07.jpg', import.meta.url).href,
    descript:{
      name:'豆子',
      nameinfo:'手作達人，愛 DIY 的女孩',
      hot: '75,000'
    }
  },
  {
    id: 8,
    pic: new URL('@/assets/images/homeBanner3D/08.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar08.jpg', import.meta.url).href,
    descript:{
      name:'Lisa',
      nameinfo:'美食愛好者，帶你一起吃！',
      hot: '70,000'
    }
  },
  {
    id: 9,
    pic: new URL('@/assets/images/homeBanner3D/09.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar09.jpg', import.meta.url).href,
    descript:{
      name:'阿雅',
      nameinfo:'開心果，分享搞笑瞬間',
      hot: '68,000'
    }
  },
  {
    id: 10,
    pic: new URL('@/assets/images/homeBanner3D/10.jpg', import.meta.url).href,
    avatar:new URL('@/assets/images/homeBanner3D/avatar10.jpg', import.meta.url).href,
    descript:{
      name:'小程',
      nameinfo:'知識小達人，總有新發現',
      hot: '65,000'
    }
  },
])

export default {
  components: {
    HomeBanner3D,
    HomeActivity,
    HomeAnnouncement,
  },
  setup() {
    return {
      source,
    }
  },
}

</script>

<template>
<div style="container">
<home-banner-3-d :source="source"></home-banner-3-d>
</div>

<div style="container">
<home-activity></home-activity>
</div>

<div style="container">
<home-announcement></home-announcement>
</div>

</template>

<style lang="scss" scoped>

</style>
