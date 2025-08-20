<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
const closeQRCode = () => {
  isVisible.value = false
}
</script>

<template>
<div>
  <div class="fixed" v-if="isVisible">
    <el-button @click="closeQRCode"><font-awesome-icon icon="fa-solid fa-xmark" /></el-button>
    <img src="@/assets/images/qrcode.png" alt="QR Code">
  </div>
</div>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 9rem;
  background-color: rgba(#000,0.5);
  border-radius: 0.5rem;
  z-index: 100;
  .el-button{
    width: 1rem;
    position: absolute;
    top: -1rem;
    right: -1rem;
    border: none;
    border-radius: 50%;
    background-color: rgba(#000,0.8);
    color: #fff;
    font-size: 1rem;
    &:hover{
      color: rgba(#fff,0.8);
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 991px) {
  .fixed {
    display: none;
  }
}
</style>
