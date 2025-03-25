<script setup>
import { ref, computed } from 'vue';

const images = ref([
  new URL('@/assets/images/homeActivity/01.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/02.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/03.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/04.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/05.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/06.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/07.jpg', import.meta.url).href,
  new URL('@/assets/images/homeActivity/08.jpg', import.meta.url).href,
]);

// 動態計算圖片分組，根據螢幕大小改變每組圖片數量
const groupedImages = computed(() => {
  let groups = [];
  const isMobile = window.innerWidth <= 768;  // 檢查螢幕是否為手機大小

  // 如果是手機顯示一張圖片，否則顯示四張
  const imagesPerGroup = isMobile ? 1 : 4;

  for (let i = 0; i < images.value.length; i += imagesPerGroup) {
    groups.push(images.value.slice(i, i + imagesPerGroup));
  }

  return groups;
});
</script>




<template>
<div class="container">
  <h3>精彩活動</h3>
  <el-carousel :interval="3000" height="6rem" arrow="always" indicator-position="none">
    <el-carousel-item v-for="(group, index) in groupedImages" :key="index">
      <div class="image-group">
        <img v-for="(img, idx) in group" :key="idx" :src="img" class="carousel-img">
      </div>
    </el-carousel-item>
  </el-carousel>

</div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 20rem;
    h3{
      text-align: center;
      letter-spacing: 0.2rem;
      font-weight: 500;
      line-height: 8rem;
    }
    .image-group {
      width: 90%;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: auto;
        .carousel-img {
        width: 24%;
        height: 6rem;
        object-fit: cover;
        border-radius: 0.5rem;
        }
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
}

@media (max-width: 768px) {
  .container {
    height: 16rem;
    .carousel-img {
      width: 90% !important;
      height: 6rem;
      margin: auto;
      object-fit: cover;
      border-radius: 0.5rem;
      }
  }
}
</style>
