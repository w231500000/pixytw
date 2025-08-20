<script setup>
import { ref } from 'vue'

const ongoing = ref([
  {
    id: 1,
    title: '明星大跟班',
    time: '2025.01.01 - 2025.01.31',
    pic: new URL('@/assets/images/homeActivity/01.jpg', import.meta.url).href,
  },
  {
    id: 2,
    title: '街頭大明星',
    time: '2025.01.01 - 2025.01.31',
    pic: new URL('@/assets/images/homeActivity/02.jpg', import.meta.url).href,
  },
  {
    id: 3,
    title: '聲得你心',
    time: '2025.01.01 - 2025.01.31',
    pic: new URL('@/assets/images/homeActivity/03.jpg', import.meta.url).href,
  },
  {
    id: 4,
    title: '乃霸帶貨王',
    time: '2025.01.01 - 2025.01.31',
    pic: new URL('@/assets/images/homeActivity/04.jpg', import.meta.url).href,
  },
])


const closed = ref([
  {
    id: 5,
    title: '今夏你最狂',
    time: '2024-12-01 - 2024-12-31',
    pic: new URL('@/assets/images/homeActivity/05.jpg', import.meta.url).href,
  },
  {
    id: 6,
    title: '我的美麗蛻變',
    time: '2024-12-01 - 2024-12-31',
    pic: new URL('@/assets/images/homeActivity/06.jpg', import.meta.url).href,
  },
  {
    id: 7,
    title: '返校',
    time: '2024-12-01 - 2024-12-31',
    pic: new URL('@/assets/images/homeActivity/07.jpg', import.meta.url).href,
  },
  {
    id: 8,
    title: '嘿嘿TAXI',
    time: '2024-12-01 - 2024-12-31',
    pic: new URL('@/assets/images/homeActivity/08.jpg', import.meta.url).href,
  },
])

</script>

<template>
  <div class="container">
    <div class="ongoing">
      <img src="@/assets/images/activity/ongoing.png" alt="">
    </div>
    <div class="cards">
      <div class="card" v-for="item in ongoing" :key="item.id">
        <img :src="item.pic">
        <div class="card-content">
          <div class="card-title">{{ item.title }}</div>
          <div class="card-time">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="closed">
      <img src="@/assets/images/activity/closed.png" alt="">
    </div>
    <div class="cards">
      <div class="card" v-for="i in closed" :key="i.id">
        <img :src="i.pic" alt="">
        <div class="card-content">
          <div class="card-title">{{ i.title }}</div>
          <div class="card-time">{{ i.time }}</div>
        </div>
        <div class="card-mask">
          <div class="card-mask-img">
            <img src="@/assets/images/activity/closed-mask.png" alt="">
          </div>
          <div class="card-history">查看歷史<a href="javascript:;" class="right" @click="change('right')"><img
                src="@/assets/icons/arrow-right.svg"></a></div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  .ongoing {
    width: 25%;
    margin-top: 3rem;

    img {
      width: 100%;
    }
  }

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
    margin-top: 0.5rem;
    padding-top: 1rem;

    .card {
      position: relative;
      width: 48%;
      height: 16rem;
      margin-right: 1.8rem;
      margin-bottom: 1.8rem;
      border: none;
      border-radius: 0.6rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.02);
        border: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 0.6rem 0.6rem 0 0;
        border: none;
      }

      .card-content {
        width: 100%;
        height: 4rem;
        background-color: rgba(0, 0, 0, 0.95);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        color: #fff;
        border-radius: 0 0 0.6rem 0.6rem;
        border: none;

        .card-title {
          font-size: 1.4rem;
          font-weight: bold;
        }

        .card-time {
          font-size: 1rem;
        }
      }

      .card-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.6rem;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;

        .card-mask-img {
          width: 60%;
          display: flex;
          justify-content: center;
          margin: auto;

          img {
            width: 50%;
          }
        }

        .card-history {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 1rem;
          font-weight: bold;
          color: #fff;

          .right {
            margin-left: 0.5rem;
            margin-bottom: 1rem;

            img {
              width: 1rem;
            }
          }

        }
      }
    }
  }
}

.closed {
  width: 25%;
  margin-top: 1rem;

  img {
    width: 100%;
  }
}

@media (max-width: 991px) {
  .container {
    .ongoing {
      width: 60%;
    }

    .cards {
      width: 80%;
      margin-left: 0;
      padding-top: 0.5rem;

      .card {
        width: 100%;
        height: 16rem;
        margin-right: 0;
        margin-bottom: 1.5rem;

      }
    }

    .closed {
      width: 60%;
    }
  }
}

@media (max-width: 768px) {
  .container {
    .ongoing {
      width: 80%;
    }

    .cards {
      width: 90%;
      margin-left: 0;
      padding-top: 0.5rem;

      .card {
        width: 100%;
        height: 10rem;
        margin-bottom: 1rem;

        .card-title{
          font-size: 0.8rem;
        }

        .card-time{
          font-size: 0.1rem;
        }

      }
    }

    .closed {
      width: 80%;
    }
  }
}
</style>
