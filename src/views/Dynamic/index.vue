<script setup>
import DynamicDetail from './DynamicDetail.vue';
import { faHeart as regularHeart, faComment as regularComment, faShareSquare as regularShare } from '@fortawesome/free-regular-svg-icons';
import { ref } from 'vue'
const data = ref([
  {
    id: 1,
    pic: new URL('@/assets/images/dynamic/01.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/dynamic/avatar01.jpg',
      import.meta.url).href,
    name: 'Amy',
    nameinfo: '喜愛夜晚與星空，沉浸在夢想的世界中',
    like: 999,
    message: 50,
    share: 20,
    time: '2小時前',
    story: 'Amy主播自彈自唱我喜歡上你時的內心活動，同也是電影《喜歡你》的主題曲，發現它是像詩一樣的詞，沒有艱澀的詞彙與句子，拼湊成一起卻越品越有韻味。聽著聽著會有種複雜的情緒。為大家繁忙的生活轉換情緒，歡迎大家來我的直播間聽音樂點歌，所以快來追蹤我的，直播ID🔎:949505740',
    followed: false,
  },
  {
    id: 2,
    pic: new URL('@/assets/images/dynamic/02.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/dynamic/avatar02.jpg',
      import.meta.url).href,
    name: '小墨',
    nameinfo: '迷戀古風，愛上了江南的水鄉',
    like: 999,
    message: 50,
    share: 20,
    time: '3小時前',
    story: '今天的天空灰得像我的心情，卻又帶著一點透明感。人來人往，城市的喧囂和心裡的寂靜交錯著。我試著抓住些微的快樂，像是咖啡杯裡的溫熱，或者街角傳來的微笑聲。也許生活就是這樣，喜怒哀樂像潮水般來去，只有學會和自己和平相處，才能在沉默裡找到安穩。',
    followed: false,
  },
  {
    id: 3,
    pic: new URL('@/assets/images/dynamic/03.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/dynamic/avatar03.jpg',
      import.meta.url).href,
    name: 'Eric',
    nameinfo: '短暫的光影，帶來永恆的回憶',
    like: 999,
    message: 50,
    share: 20,
    time: '8小時前',
    story: '窗外的雨滴敲打著玻璃，每一聲都像是提醒我停下腳步。忙碌了一整天，心裡卻空空的。想念一個人，不是因為孤單，而是因為那份熟悉的存在感。也許我們都需要這樣的片刻，允許自己軟弱，允許自己慢下來，讓心情像雨水般慢慢沉澱。',
    followed: false,
  },
  {
    id: 4,
    pic: new URL('@/assets/images/dynamic/04.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/dynamic/avatar04.jpg',
      import.meta.url).href,
    name: '尋風',
    nameinfo: '在旅途中，尋找心中的風景與自由',
    like: 999,
    message: 50,
    share: 20,
    time: '12小時前',
    story: '咖啡的香氣在房間裡散開，心也慢慢被溫暖包圍。生活有時像條蜿蜒的河，忽而平靜，忽而洶湧。我學會不急著控制一切，而是靜靜觀察，享受每一次起伏。或許，幸福不是一個結果，而是一種感覺，一種在平凡日子裡的安然。',
    followed: false,
  },
  {
    id: 5,
    pic: new URL('@/assets/images/dynamic/05.jpg',
      import.meta.url).href,
    avatar: new URL('@/assets/images/dynamic/avatar05.jpg',
      import.meta.url).href,
    name: '琉璃',
    nameinfo: '內心如琉璃般純潔卻美麗耀眼',
    like: 999,
    message: 50,
    share: 20,
    time: '1日前',
    story: '今晚的星空特別清澈，像極了童年的夢。心裡悄悄有些期待，也有些不安。時間教會了我很多事，也帶走了不少回憶。可我依然相信，即使前方未知，也要勇敢去走，去感受，去愛，去笑。每個小小的努力，都會在生命的深處開出一朵花。',
    followed: false,
  },

])

// 記錄當前選中的用戶
const selectedUser = ref(null);

// 點擊圖片時設置選中的用戶
const handleImageClick = (user) => {
  selectedUser.value = user;
};

// 點擊子組件的 bg 區域時，關閉子組件
const handleCloseDetail = () => {
  selectedUser.value = null;
};

// 切換單個用戶的追蹤狀態
const toggleFollow = (id) => {
  const user = data.value.find((item) => item.id === id);
  if (user) user.followed = !user.followed;
};
</script>

<template>
  <div class="container">

    <div class="cards">
      <div class="card" v-for="item in data" :key="item.id">
        <div class="card-pic" @click="handleImageClick(item)"><img :src="item.pic"></div>

        <div class="card-content1">
          <div class="card-avatar"><img :src="item.avatar" alt="{{ item.name }}"></div>
          <div class="card-info">
            <div class="card-name">{{ item.name }}</div>
            <div class="card-nameinfo">{{ item.nameinfo }}</div>
          </div>
          <div>
            <el-button :class="item.followed ? 'followed' : 'unfollowed'" @click="toggleFollow(item.id)">
              {{ item.followed ? '已追蹤' : '追蹤' }}
            </el-button>
          </div>
        </div>
        <div class="card-content2">
          <div class="card-content2-left">
            <div class="card-like"><font-awesome-icon :icon="regularHeart" class="icons" />{{ item.like }}</div>
            <div class="card-message"><font-awesome-icon :icon="regularComment" class="icons" />{{ item.message }}</div>
            <div class="card-share"><font-awesome-icon :icon="regularShare" class="icons" />{{ item.share }}</div>
          </div>
          <div class="card-content2-right">
            <div class="card-time">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!-- 傳遞 selectedUser 作為單一用戶資料給子組件 -->
    <DynamicDetail v-if="selectedUser" :data="selectedUser" @close="handleCloseDetail"/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 4rem;

  .cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 6.5rem;

    .card {
      width: 28%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      border-radius: 10px;
      border: none;
      background: none;

      .card-pic {
        width: 24rem;
        height: 24rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }

      .card-content1 {
        width: 90%;
        display: flex;
        align-items: center;
        gap: 1rem;

        .card-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .card-info {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          overflow: hidden;
          white-space: nowrap;
          /* 禁止換行 */
          text-overflow: ellipsis;
          gap: 0.2rem;

          .card-name {
            font-size: 1.2rem;
            font-weight: bold;
            color: #fff;
          }

          .card-nameinfo {
            font-size: 0.8rem;
            color: rgba(#fff, 0.5);
          }
        }

        .unfollowed {
          width: 3.5rem;
          height: 1.5rem;
          font-size: 0.8rem;
          background-color: $lightColor;
          color: #fff;
          border: 1px solid $xtxColor;
          border-radius: 1rem;

          &:hover {
            background-color: darken($xtxColor, 10%);
          }
        }

        .followed {
          width: 3.5rem;
          height: 1.5rem;
          font-size: 0.8rem;
          background-color: transparent;
          color: #fff;
          border: 1px solid $xtxColor;
          border-radius: 1rem;

          &:hover {
            color: lighten($bgColor, 100%);
          }
        }
      }


      .card-content2 {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card-content2-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(#fff, 1);

          .card-like {
            font-size: 1rem;
          }

          .card-message {
            font-size: 1rem;
          }

          .card-share {
            font-size: 1rem;
          }

          .icons {
            font-size: 1rem;
            padding: 0 0.5rem;

          }
        }

        .card-content2-right {
          display: flex;
          align-items: center;
          gap: 0.8rem;

          .card-time {
            font-size: 1rem;
            color: rgba(#fff, 1);

          }
        }
      }

    }
  }
}

@media (max-width: 991px) {
  .container {
    width: 100%;
    padding: 0;
    .cards {
      width: 150%;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: start;
      gap: 0;

      .card {
        width: 50%;
        margin: 2rem 0;
        .card-pic {
          width: 18rem;
          height: 18rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .card-content1,.card-content2 {
          width: 70%;
          gap: 0.5rem;
          .card-avatar{
            width: 2.5rem;
            height: 2.5rem;
          }
          .card-info {
            width: 60%;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;

    .cards {
      width: 150%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      .card {
        width: 100%;
      }
    }
  }
}
</style>
