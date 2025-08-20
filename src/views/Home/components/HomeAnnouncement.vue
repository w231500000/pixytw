<script setup>
import { ref, computed } from 'vue';

const images = ref([
  new URL('@/assets/images/homeAnnouncement/01.jpg', import.meta.url).href,
  new URL('@/assets/images/homeAnnouncement/02.jpg', import.meta.url).href,
  new URL('@/assets/images/homeAnnouncement/03.jpg', import.meta.url).href,
]);

// 每次只顯示一張圖片
const groupedImages = computed(() => {
  return images.value.map(image => [image]); // 每個元素包裝成數組
});
</script>

<template>
  <div class="container">
    <h3>最新公告</h3>
    <el-carousel :interval="3000" height="25rem" arrow="always" indicator-position="">
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
  height: 40rem;

  h3 {
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: 500;
    line-height: 8rem;
  }

  .image-group {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;

    .carousel-img {
      width: 60%;
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

  /* 讓指示器變成圓點 */
  :deep(.el-carousel__indicator button) {
    width: 0.8rem !important;
    height: 0.8rem !important;
    border-radius: 50% !important;
    margin: 0 0.2rem !important;
    /* 調整左右間距 */
    background-color: #ccc !important;
    transition: background-color 0.3s;
  }

  /* 讓當前選中的指示器變成深色 */
  :deep(.el-carousel__indicator.is-active button) {
    background-color: $lightColor !important;
  }

}

@media (max-width: 991px) {
  .container {
    height: 30rem;

    .el-carousel {
      height: 15rem;
    }
  }
}

@media (max-width: 768px) {
  .container {
    height: 25rem;

    .image-group {
      width: 100%;
    }

    .el-carousel {
      height: 12rem;

      .image-group {
        width: 100%;

        .carousel-img {
          width: 80%;
        }

      }
    }

  }
}
</style>
