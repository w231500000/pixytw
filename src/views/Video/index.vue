<script setup>
import { ref } from 'vue';

// YouTube 影片資料
const youtubeVideos = ref([
  {
    id: 'mVVgXvxGl1w', // YouTube 影片ID
    title: '範例影片1'
  },
  {
    id: 'qVig_BCuNsA', // YouTube 影片ID
    title: '範例影片2'
  },
  {
    id: 'JbqWRjE2BY0', // YouTube 影片ID
    title: '範例影片2'
  },
  {
    id: 'aM21jTOF7a8', // YouTube 影片ID
    title: '範例影片2'
  },

  // 可添加更多影片...
]);

// 暫停所有影片
const pauseAllVideos = () => {
  const iframes = document.querySelectorAll('.youtube-iframe');
  iframes.forEach(iframe => {
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });
};

</script>

<template>
<div class="container">
  <div class="youtube-carousel-container">
    <el-carousel
      type="card"
      height="40rem"
      @change="pauseAllVideos"
    >
      <el-carousel-item v-for="video in youtubeVideos" :key="video.id">
        <div class="youtube-video-card">
          <iframe
            class="youtube-iframe"
            :src="`https://www.youtube.com/embed/${video.id}?enablejsapi=1`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<style lang="scss" scoped>
.youtube-carousel-container {
  width: 100%;
  padding: 8rem 0;

  .youtube-video-card {
    width: 100%;
    height: 35rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem !important;
    overflow: hidden;
    position: relative; /* 建立定位上下文 */
    overflow: visible;  /* 允許陰影溢出 */

    .youtube-iframe {
      position: absolute; /* 絕對定位對齊 */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      border: none;
      box-shadow: 0 1rem 1rem rgba(0,0,0,0.2); /* 陰影直接加在影片上 */
    }

  }

  /* 卡片樣式調整 */
  :deep(.el-carousel__container) {
  perspective: 1000px; /* 創建3D空間避免渲染閃爍 */
}

    /* 隱藏預設箭頭 */
    :deep(.el-icon) {
    display: none !important;
  }

  /* 左側按鈕 */
  :deep(.el-carousel__arrow--left) {
    background: url('@/assets/icons/arrow-left.svg') no-repeat center center !important;
    background-size: contain !important;
    width: 2rem !important;
    height: 2rem !important;
    top: 50%;
    left: 0 !important;
  }

  /* 右側按鈕 */
  :deep(.el-carousel__arrow--right) {
    background: url('@/assets/icons/arrow-right.svg') no-repeat center center !important;
    background-size: contain !important;
    width: 2rem !important;
    height: 2rem !important;
    top: 50%;
    right: 0 !important;
  }

  /* 讓指示器變成圓點 */
  :deep(.el-carousel__indicator button) {
    width: 6rem;
    height: 0.5rem !important;
    border-radius: 2rem !important;
    margin: 0 0.2rem !important;
    /* 調整左右間距 */
    background-color: #ccc !important;
    transition: background-color 0.3s;
  }

  /* 讓當前選中的指示器變成深色 */
  :deep(.el-carousel__indicator.is-active button) {
    background-color: $lightColor !important;
  }

  :deep(.el-carousel__indicator){
    margin-top: 10rem;
  }

  :deep(.el-carousel__mask) {
  display: none !important; /* 改为黑色半透明 */
  }


  /* 其他樣式... */
}

@media (max-width: 991px) {
  :deep(.el-carousel__indicator button) {
    width: 3rem !important;
    height: 0.5rem !important;
    border-radius: 2rem !important;
    margin: 0 0.2rem !important;
    /* 調整左右間距 */
    background-color: #ccc !important;
    transition: background-color 0.3s;
  }

}

@media (max-width: 768px) {
  .container {
height:25rem ;

    .youtube-video-card {
    height: 40%;

    }
    :deep(.el-carousel__indicator button) {
    width: 2rem !important;
    height: 0.3rem !important;
    border-radius: 2rem !important;
    margin: 0 0.2rem !important;
    /* 調整左右間距 */
    background-color: #ccc !important;
    transition: background-color 0.3s;
  }
  :deep(.el-carousel__indicator){
    margin-bottom: 18.5rem !important;
  }

  }
}
</style>
