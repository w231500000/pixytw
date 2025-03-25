<script setup>
import { ref } from 'vue';

const data = ref([{
  id: 1,
  pic: new URL('@/assets/images/liveFollow/01.jpg',
    import.meta.url).href,
  descript: {
    name: '科科',
    nameinfo: '探索世界的旅行者',
    hot: '92,000'
  }
},
{
  id: 2,
  pic: new URL('@/assets/images/liveFollow/02.jpg',
    import.meta.url).href,
  descript: {
    name: '小圓',
    nameinfo: '追逐夢想的女孩',
    hot: '80,000'
  }
},
{
  id: 3,
  pic: new URL('@/assets/images/liveFollow/03.jpg',
    import.meta.url).href,
  descript: {
    name: 'Ivy',
    nameinfo: '分享快樂與音樂',
    hot: '65,000'
  }
},
{
  id: 4,
  pic: new URL('@/assets/images/liveFollow/04.jpg',
    import.meta.url).href,
  descript: {
    name: '阿豪',
    nameinfo: '遊戲世界的勇者',
    hot: '40,000'
  }
},
{
  id: 5,
  pic: new URL('@/assets/images/liveFollow/05.jpg',
    import.meta.url).href,

  descript: {
    name: '霏霏',
    nameinfo: '熱愛生活的歌手',
    hot: '36,000'
  }
}
])
</script>

<template>
  <div class="cards">
    <div class="card" v-for="item in data" :key="item.id">
      <div class="card-img">
        <div class="card-tab">
          <img src="@/assets/icons/star.png" style="width: fit-content; height: fit-content;" class="card-hot-icon"
            alt="star" />
          <span class="card-hot">{{ item.descript.hot }}</span>
        </div>
        <img :src="item.pic" :alt="item.descript.name" />
        <div class="card-content">
          <div class="card-name">
            <span>{{ item.descript.name }}</span>
          </div>
          <div class="card-nameinfo">
            <span>{{ item.descript.nameinfo }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 2rem;
  margin-top: 0.5rem;
  padding-top: 1rem;


  .card {
    position: relative;
    width: 23%;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }

    .card-tab {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      display: flex;
      width: 6rem;
      height: 1.5rem;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 0.5rem;

      .card-hot-icon {
        margin-top: 0.1rem;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
      }

      .card-hot {
        color: #fff;
      }
    }

    .card-img {
      width: 100%;
      height: 18rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.6rem;
      }

      .card-content {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4rem;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

        .card-name {
          padding: 0.5rem;
          color: #fff;
          text-overflow: ellipsis;
        }

        .card-nameinfo {
          padding-top: 0;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          padding-bottom: 0.5rem;
          color: #fff;
          font-size: 0.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .cards {
    flex-direction: row;
    padding-bottom: 2rem;

    .card {
      width: 30%;
      margin-bottom: 1.5rem;
    }
  }
}

@media (max-width: 768px) {
  .cards {
    flex-direction: row;
    padding-bottom: 2rem;

    .card {
      width: 44%;
      height: 16rem;
    }
  }
}
</style>
