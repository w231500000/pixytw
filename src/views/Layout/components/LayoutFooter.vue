<script setup>

</script>

<template>
<footer class="app-footer">
    <div class="container m-6">
      <div class="row d-flex flex-row">
        <div class="col-lg-2 col-md-12 my-4 logo">
          <a href="#"></a>
        </div>

        <div class="col-lg-8 col-md-12 my-3 ps-4">
          <p class="text-white"><a href="#">Copyright 2015-2025 森澍創意行銷股份有限公司 All rights reserved.</a></p>
          <p class="text-white"><a href="#">服務條款和隱私政策</a> ｜ 聯絡我們：enewsmedia1@gmail.com</p>
        </div>

        <div class="col-lg-2 col-md-12 my-3 icons">
          <font-awesome-icon icon="fa-brands fa-facebook" class="mx-3"/>
          <font-awesome-icon icon="fa-brands fa-line" class="mx-3"/>
          <font-awesome-icon icon="fa-brands fa-instagram" class="mx-3"/>
        </div>
      </div>
    </div>
</footer>
</template>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  background: $bgColor;
  border-top: 0.01rem solid $xtxColor;
  padding: 1rem ;

  .logo{
    height: 3rem;
    width: 14rem;
    background-image: url('@/assets/images/pixylive.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  a{
    color: #fff;
  }

  p{
    line-height: 2rem;
  }

  .icons{
    color: $lightColor;
    font-size: 2.5rem;
  }

}
</style>
