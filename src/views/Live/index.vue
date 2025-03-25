<script setup>
import { ref } from 'vue';

const data = ref([
  {
    id: 1,
    pic: new URL('@/assets/images/homeBanner3D/01.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar01.jpg',
      import.meta.url).href,
    descript: {
      name: 'Amy',
      nameinfo: '探索世界的旅行者',
      hot: '99,000'
    },
    followed: false // 追蹤狀態
  },
  {
    id: 2,
    pic: new URL('@/assets/images/homeBanner3D/02.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar02.jpg',
      import.meta.url).href,
    descript: {
      name: '小星',
      nameinfo: '追逐夢想的女孩',
      hot: '95,000',
    }, followed: false
  },
  {
    id: 3,
    pic: new URL('@/assets/images/homeBanner3D/03.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar03.jpg',
      import.meta.url).href,
    descript: {
      name: '樂樂',
      nameinfo: '分享快樂與音樂',
      hot: '89,000'
    }, followed: false
  },
  {
    id: 4,
    pic: new URL('@/assets/images/homeBanner3D/04.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar04.jpg',
      import.meta.url).href,
    descript: {
      name: '阿虎',
      nameinfo: '遊戲世界的勇者',
      hot: '86,000'
    }, followed: false
  },
  {
    id: 5,
    pic: new URL('@/assets/images/homeBanner3D/05.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar05.jpg',
      import.meta.url).href,
    descript: {
      name: '小雨',
      nameinfo: '熱愛生活的歌手',
      hot: '82,000'
    }, followed: false
  },
  {
    id: 6,
    pic: new URL('@/assets/images/homeBanner3D/06.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar06.jpg',
      import.meta.url).href,
    descript: {
      name: '小黑',
      nameinfo: '愛搞笑，分享日常趣事',
      hot: '77,000'
    }, followed: false
  },
  {
    id: 7,
    pic: new URL('@/assets/images/homeBanner3D/07.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar07.jpg',
      import.meta.url).href,
    descript: {
      name: '豆子',
      nameinfo: '手作達人，愛 DIY 的女孩',
      hot: '75,000'
    }, followed: false
  },
  {
    id: 8,
    pic: new URL('@/assets/images/homeBanner3D/08.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar08.jpg',
      import.meta.url).href,
    descript: {
      name: 'Lisa',
      nameinfo: '美食愛好者，帶你一起吃！',
      hot: '70,000'
    }, followed: false
  },
  {
    id: 9,
    pic: new URL('@/assets/images/homeBanner3D/09.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar09.jpg',
      import.meta.url).href,
    descript: {
      name: '阿雅',
      nameinfo: '開心果，分享搞笑瞬間',
      hot: '68,000'
    }, followed: false
  },
  {
    id: 10,
    pic: new URL('@/assets/images/homeBanner3D/10.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/homeBanner3D/avatar10.jpg',
      import.meta.url).href,
    descript: {
      name: '小程',
      nameinfo: '知識小達人，總有新發現',
      hot: '65,000'
    }, followed: false
  },
])

// 切換單個用戶的追蹤狀態
const toggleFollow = (id) => {
  const user = data.value.find((item) => item.id === id);
  if (user) user.followed = !user.followed;
};

</script>

<template>
  <div class="container">
    <div class="live-streamer">
      <!-- 導航選單 -->
      <ul>
        <li>
          <RouterLink to="/live" exact-active-class="active-link">熱播</RouterLink>
        </li>
        <li>
          <RouterLink to="/live/livefollow" active-class="active-link">追蹤</RouterLink>
        </li>
        <li>
          <RouterLink to="/live/liverecommend" active-class="active-link">推薦</RouterLink>
        </li>
        <li>
          <RouterLink to="/live/livevip" active-class="active-link">VIP</RouterLink>
        </li>
        <li>
          <RouterLink to="/live/livenewcomers" active-class="active-link">新人</RouterLink>
        </li>
      </ul>

      <div>
        <RouterView />
      </div>
    </div>
    <div class="live-hotlist">
      <!-- 熱門推薦 -->
      <div class="hotlist-title">
        <h3>熱門推薦</h3>
      </div>
      <ul>
        <li>
          <div class="hotlist-item" v-for="item in data" :key="item.id">
            <div class="hotlist-avatar">
              <div class="hotlist-avatar-frame">
                <img src="@/assets/icons/liveframe.svg" alt="">
              </div>
              <div class="hotlist-avatar-pic">
                <img :src="item.avatar" alt="">
              </div>
            </div>
            <div class="hotlist-descript">
              <h4>{{ item.descript.name }}</h4>
              <p>{{ item.descript.nameinfo }}</p>
            </div>
            <!-- 每個按鈕獨立控制 -->
            <el-button :class="item.followed ? 'followed' : 'unfollowed'" @click="toggleFollow(item.id)">
              {{ item.followed ? '已追蹤' : '追蹤' }}
            </el-button>

          </div>
        </li>

      </ul>

    </div>
  </div>

</template>

<style lang="scss" scoped>
.container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;

  .live-streamer {
    width: 70%;
    background-color: $bgColor;
    border: 0.01rem solid $xtxColor;
    border-radius: 1rem;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-bottom: 2rem;

    ul {
      display: flex;
      padding: 2rem 2rem 1.5rem 2rem;
      border-bottom: 0.01rem solid;
      border-color: rgba(#fff, 0.2);

      li {
        margin-right: 3rem;

        a {
          font-size: 1.2rem;
          color: #fff;

          &:hover {
            color: $goldColor;
            border-bottom: 2px solid $goldColor;
          }
        }

        .active-link {
          color: $goldColor;
          border-bottom: 1px solid $goldColor;
        }
      }
    }
  }

  .live-hotlist {
    width: 30%;
    background-color: $bgColor;
    border: 0.01rem solid $xtxColor;
    border-radius: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    .hotlist-title {
      padding: 1.5rem 2rem 1.5rem 2rem;
      border-bottom: 0.01rem solid $grayColor;
    }

    .hotlist-item {
      width: 100%;
      height: 6rem;
      display: flex;
      flex-direction: row;
      padding: 1rem 2rem 0 2rem;
.hotlist-avatar{
  position: relative;
  width: 4.5rem;
  height: 4.5rem;

.hotlist-avatar-frame {
          position: absolute;
          top: 0.1rem;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          z-index: 1;

          img {
            width: 100%;
            height: 100%;

          }
        }
      .hotlist-avatar-pic {

        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 0.5rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


      }
    }

      .hotlist-descript {
        width: 14rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        margin-left: 1rem;
        text-align: left;

        p {
          padding-top: 0.5rem;
          color: #c0c0c0;
        }
      }

      .el-button {
        margin-top: 1.5rem;
        width: 5rem;
        height: 2rem;
        border-radius: 5rem;
        transition: all 0.3s;
      }

      .unfollowed {
        background-color: $xtxColor;
        color: #fff;
        border: 1px solid $xtxColor;


        &:hover {
          background-color: darken($xtxColor, 10%);
        }
      }

      .followed {
        background-color: $bgColor;
        color: #fff;
        border: 1px solid $xtxColor;


        &:hover {
          color: lighten($bgColor, 100%);
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .container {
    width: 90%;

    .live-streamer {
      width: 100%;
      margin: 2rem auto;

      ul {
        padding: 2rem;

        li {
          margin-right: 1rem;
        }
      }
    }
  }

  .live-hotlist {
    display: none;
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;

    .live-streamer {
      width: 100%;
      margin: 2rem auto;

      ul {
        padding: 2rem;

        li {
          margin-right: 1rem;
        }
      }
    }
  }

  .live-hotlist {
    display: none;
  }

}
</style>
