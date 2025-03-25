<script>
import { reactive, computed, onMounted, onUnmounted, ref } from 'vue';

export default {
  props: {
    source: {
      type: Array,
      required: true,
    },
    initial: {
      type: Number,
      default: 0,
    },
    interval: {
      type: Number,
      default: 2000,
    },
  },
  setup(props) {
    const adjustedSource = computed(() => {
      let source = [...props.source];
      let diff = 5 - source.length;

      if (diff > 0) {
        let extraItems = source.slice(0, diff).map((item, index) => ({
          ...item,
          id: parseInt(source[source.length - 1]?.id || 0) + index + 1,
        }));
        source = source.concat(extraItems);
      }
      return source;
    });

    const computedSource = computed(() => {
      let len = adjustedSource.value.length;
      let initialIndex = Math.max(0, Math.min(state.initial, len - 1));

      return adjustedSource.value.map((item, index) => {
        let transform = `translate(-50%,-50%) scale(0.55)`;
        let zIndex = 0;
        let className = "slide";

        if (index === initialIndex) {
          zIndex = 3;
          className = 'slide active';
          transform = `translate(-50%,-50%) scale(1)`;
        } else if (index === (initialIndex - 1 + len) % len) {
          zIndex = 2;
          transform = `translate(-130%,-50%) scale(0.85)`;
        } else if (index === (initialIndex + 1) % len) {
          zIndex = 2;
          transform = `translate(30%,-50%) scale(0.85)`;
        } else if (index === (initialIndex - 2 + len) % len) {
          zIndex = 1;
          transform = `translate(-195%,-50%) scale(0.7)`;
        } else if (index === (initialIndex + 2) % len) {
          zIndex = 1;
          transform = `translate(95%,-50%) scale(0.7)`;
        }

        return {
          ...item,
          sty: { transform, zIndex },
          className,
        };
      });
    });

    const state = reactive({
      initial: props.initial,
    });

    let autoTimer = null;

    const autoPlay = () => {
      if (autoTimer) clearInterval(autoTimer); // 清除現有計時器
      console.log('AutoPlay started'); // 調試輸出，確認計時器啟動
      autoTimer = setInterval(() => {
        console.log('Changing slide'); // 每次切換時的調試輸出
        state.initial = (state.initial + 1) % adjustedSource.value.length;
      }, props.interval);
    };

    let root = ref(null);
    onMounted(() => {
      autoPlay(); // 啟動自動播放
      const box = root.value;
      box.addEventListener('mouseenter', () => {
        clearInterval(autoTimer); // 停止自動播放
        console.log('Mouse entered, autoplay stopped');
      });
      box.addEventListener('mouseleave', () => {
        autoPlay(); // 恢復自動播放
      });
    });

    onUnmounted(() => {
      if (autoTimer) clearInterval(autoTimer); // 清除計時器
      const box = root.value;
      box.removeEventListener('mouseenter', () => clearInterval(autoTimer));
      box.removeEventListener('mouseleave', autoPlay);
    });

    const change = (dir) => {
      state.initial = dir === "right"
        ? (state.initial + 1) % adjustedSource.value.length
        : (state.initial - 1 + adjustedSource.value.length) % adjustedSource.value.length;
    };

    return {
      state,
      computedSource,
      root,
      change,
    };
  }
};
</script>


<template>
    <div class="container">
        <div class="banner-box" ref="root">
            <div class="wrapper">
                <div v-for="item in computedSource" :key="item.id" :class="item.className" :style="item.sty">
                    <img :src="item.pic" alt="">
                    <div class="mark"></div>
                    <div class="detail">
                        <div class="avatar"><img :src="item.avatar" alt=""></div>
                        <div class="info">
                          <div class="name">{{item.descript.name}}</div>
                          <div class="nameinfo">{{item.descript.nameinfo}}</div>
                        </div>
                        <div class="popularity">🔥{{item.descript.hot}}</div>
                    </div>
                </div>
            </div>

            <div class="arrow">
            <a href="javascript:;" class="left" @click="change('left')"><img src="@/assets/icons/arrow-left.svg" ></a>
            <a href="javascript:;" class="right" @click="change('right')"><img src="@/assets/icons/arrow-right.svg" ></a>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.container {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50rem;
    .banner-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        .wrapper {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            .slide {
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 0;
                transform: translate(-50%, -50%);
                box-sizing: border-box;
                width: 32%;
                overflow: hidden;
                transition: all 0.5s ease-in-out;
                border-radius: 1rem;
                box-shadow: 0 0 1rem rgba($color: #000000, $alpha: 0.5);
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                .mark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color: #000000, $alpha: 0.5);
                    transition: all 0.5s ease-in-out;
                }
                .detail {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    box-sizing: border-box;
                    width: 100%;
                    height: 5rem;
                    color: #fff;
                    background-color: rgba($color: #000000, $alpha: 0.5);
                    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
                    transform: translateY(100%);
                    transition: all 0.5s ease-in-out;
                    padding-top: 1rem;
                    .avatar{
                      width: 3rem;
                      height: 3rem;
                      border-radius: 50%;
                      overflow: hidden;
                      margin: 0 auto;
                      img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      }
                    }
                    .info{
                      width: 40%;
                      padding-top: 0.2rem;
                      .name{
                      font-size: 1rem;
                      text-align: left;
                      }
                    .nameinfo{
                      font-size: 0.8rem;
                      text-align: left;
                      }
                    }
                    .popularity{
                      width: 30%;
                      font-size: 0.8rem;
                      padding-left: 1rem;
                      padding-top: 1rem;
                    }


                }

                &.active .mark,
                &:hover .mark {
                  background: rgba($color: #000000, $alpha: 0);
                }

                &.active:hover .detail{
                  transform: translateY(0);
                }
            }
        }

    }
    .arrow{
      width: 1320px;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      .left{
        position: absolute;
        top: 0;
        left: 0;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }
      .right{
        position: absolute;
        top: 0;
        right: 0;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }
    }
}

@media (max-width: 768px) {
  .container {
    height: 20rem;
  }
}
</style>
