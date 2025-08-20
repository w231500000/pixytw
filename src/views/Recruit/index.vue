<script setup>

</script>

<template>
  <div class="blur-background">
    <div class="container">
      <div class="poster"><img src="@/assets/images/recruit/poster.jpg" alt=""></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blur-background {
  position: relative;
  height: 80vh; /* 設置適當高度 */
  overflow: hidden;
}
.blur-background::before {
  content: '';
  position: absolute;
  top: -1600px;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/recruit/poster.jpg');
  background-size: 100%;
  filter: blur(20px);
  z-index: 0;
  opacity: 80%;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .poster {
    height: 80vh;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .container {
    height: 56rem;
  }
}

</style>
