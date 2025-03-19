<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="app-header">
    <div class="container">
      <!-- Logo -->
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>

      <!-- 導航選單 -->
      <ul class="app-header-nav" :class="{ 'open': isMenuOpen }">
        <li><RouterLink to="/">首頁</RouterLink></li>
        <li><RouterLink to="/">直播</RouterLink></li>
        <li><RouterLink to="/">活動</RouterLink></li>
        <li><RouterLink to="/">動態</RouterLink></li>
        <li><RouterLink to="/">影音</RouterLink></li>
        <li><RouterLink to="/">獎勵展示</RouterLink></li>
        <li><RouterLink to="/">儲值</RouterLink></li>
        <li><RouterLink to="/">主播招募</RouterLink></li>
      </ul>

      <!-- 搜尋框 -->
      <div class="search">
        <input type="text" placeholder="主播暱稱、房間號">
        <font-awesome-icon icon="magnifying-glass" class="icon-search" />
      </div>

      <!-- 漢堡按鈕 (小螢幕時顯示) -->
      <button class="menu-toggle" @click="toggleMenu">
        <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" />
      </button>

    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  width: 100%;
  background: $bgColor;
  border-bottom: 0.01rem solid $xtxColor;
  padding: 1rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 5.5rem;
    a {
      display: block;
      height: 8rem;
      width: 100%;
      text-indent: -62.5rem;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  /* 🔹 漢堡按鈕 (小螢幕) */
  .menu-toggle {
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .app-header-nav {
    display: flex;
    z-index: 998;

    li {
      margin-right: 3rem;

      a {
        font-size: 1.2rem;
        color: #fff;
        &:hover {
          color: $xtxColor;
          border-bottom: 2px solid $xtxColor;
        }
      }
    }
  }

  /* 🔹 搜尋框 */
  .search {
    width: 16rem;
    position: relative;
    border: 0.1rem solid $xtxColor;
    border-radius: 5rem;
    line-height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    input {
      width: 12rem;
      flex: 1;
      background: none;
      color: #fff;
      font-size: 1rem;
      border: none;
      outline: none;
    }

    .icon-search {
      font-size: 1.2rem;
      color: #fff;
      padding: 1rem;
    }
  }

  /* 🔥 響應式設計 */
  @media (max-width: 1024px) {
    .app-header {
      width: 1260px;
    }

    .menu-toggle {
      display: block;
    }

    .app-header-nav {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 6rem;
      left: 0;
      width: 100%;
      background: $bgColor;
      padding: 1rem 0;
      text-align: center;
    }

    .app-header-nav.open {
      display: flex;
    }

    .app-header-nav li {
      margin: 1rem 0;
    }
  }
}
</style>
