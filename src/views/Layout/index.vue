<script setup>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';

</script>

<template>
  <div class="layout-container">
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>

  </div>
</template>





<style lang="scss" scoped>

.layout-container {
  display: flex;
  flex-direction: column;
  width: 100vw; /* 確保容器佔滿寬度 */
}

</style>
<!--
  <RouterView/> 是 vue-router 提供的一個組件，用於渲染當前路由對應的組件。
  它會根據當前路由的 path，從路由配置中找到對應的組件，然後將其渲染到這裡。
  例如，當路由的 path 是 /about 時，<RouterView/> 會渲染 About.vue 組件。
 -->
