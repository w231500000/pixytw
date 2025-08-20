<script setup>
import { defineProps, defineEmits } from 'vue';
import { faHeart as regularHeart, faComment as regularComment, faShareSquare as regularShare } from '@fortawesome/free-regular-svg-icons';
// 接收父組件傳遞過來的單一用戶資料
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// 定義 emit 事件
const emit = defineEmits(['close']);

// 點擊bg區域時，通知父組件關閉子組件
const handleBgClick = () => {
  emit('close');  // 觸發父組件的 close 事件
};

// 阻止點擊內容區域時觸發背景區域的關閉
const handleContentClick = (event) => {
  event.stopPropagation();  // 防止點擊內容區域時冒泡到背景區域
};

// 切換單個用戶的追蹤狀態
const toggleFollow = () => {
  props.data.followed = !props.data.followed;  // 直接操作 props 中的資料
};
</script>

<template>
  <div class="bg" @click="handleBgClick">
    <div class="container" @click="handleContentClick">
      <div class="content">
        <div class="content-pic">
          <img :src="props.data.pic" alt="">
        </div>
        <div class="content-text">
          <div class="content-post">
            <div class="content-post-title">
              <div class="content-post-avatar">
                <img :src="props.data.avatar" alt="">
              </div>
              <div class="content-post-info">
                <div class="content-post-name">{{ props.data.name }}</div>
                <div class="content-post-nameinfo">{{ props.data.nameinfo }}</div>
              </div>
              <div>
                <el-button :class="props.data.followed ? 'followed' : 'unfollowed'" @click="toggleFollow">
                  {{ props.data.followed ? '已追蹤' : '追蹤' }}
                </el-button>
              </div>
            </div>
            <div class="content-story">{{ props.data.story }}</div>
            <div class="content-bottom">
              <div class="content-bottom-left">
                <div class="content-like"><font-awesome-icon :icon="regularHeart" class="icons" />{{ props.data.like }}
                </div>
                <div class="content-message"><font-awesome-icon :icon="regularComment"
                    class="icons" />{{ props.data.message }}</div>
                <div class="content-share"><font-awesome-icon :icon="regularShare" class="icons" />{{ props.data.share
                  }}</div>
              </div>
              <div class="content-bottom-right">
                <div class="content-time">{{ props.data.time }}</div>
              </div>
            </div>
          </div>


          <div class="content-comment">
            <div class="content-comment-title">留言 {{ props.data.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(24, 19, 30, 0.9), rgba(84, 58, 139, 0.9));
  z-index: 101;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 4rem;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .content-pic {
        width: 50rem;
        height: 50rem;
        border: 0.1rem solid $xtxColor;
        border-radius: 1rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
        }
      }

      .content-text {
        width: 30rem;
        height: 50rem;

        .content-post {
          height: 24.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border: 0.1rem solid $xtxColor;
          border-radius: 1rem;
          background-color: $bgColor;
          padding: 1rem;
          margin-bottom: 1rem;

          .content-post-title {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            padding: 1rem;

            .content-post-avatar {
              width: 4rem;
              height: 4rem;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            .content-post-info {
              width: 16rem;
              .content-post-name {
                font-size: 1.5rem;
                font-weight: 600;
              }

              .content-post-nameinfo {
                font-size: 0.8rem;
                color: rgba(#fff, 0.8);
              }
            }

            .unfollowed {
              width: 4rem;
              height: 2rem;
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
              width: 4rem;
              height: 2rem;
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

          .content-story {
            width: 100%;
            height: 50%;
            padding: 0 1rem;
            font-size: 1rem;
            text-align:justify;
          }

          .content-bottom {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0.5rem;

            .content-bottom-left {
              display: flex;
              align-items: center;
              gap: 0.8rem;
              color: rgba(#fff, 1);

              .content-like {
                font-size: 1rem;
              }

              .content-message {
                font-size: 1rem;
              }

              .content-share {
                font-size: 1rem;
              }

              .icons {
                font-size: 1rem;
                padding: 0 0.5rem;

              }
            }

            .content-right {
              display: flex;
              align-items: center;

              .card-time {
                font-size: 1rem;
                color: rgba(#fff, 1);

              }
            }
          }
        }


        .content-comment {
          height: 24.5rem;
          border: 0.1rem solid $xtxColor;
          border-radius: 1rem;
          background-color: $bgColor;
          width: 100%;
            height: 50%;
            padding: 1rem;
            font-size: 1rem;
            text-align:justify;
          .content-comment-title {
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:1rem;
            font-size: 1.2rem;
            border-bottom: 0.1rem solid $grayColor;
          }
        }
      }
    }
  }
}
</style>
