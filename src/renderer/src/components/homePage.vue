<template>
    <section class="contain">
    </section>
    <img :src="image.src" alt="" v-for="(image) in  images  " :key="image['---i']" :style="{ '--i': image['--i'] }">
    <div v-if="isLogin" class="popdialog">
        <content-page></content-page>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入contentpage组件
import contentPage from './contentPage.vue'
// 是否登录
const isLogin = localStorage.getItem('isLogin')
// 保存images数据的数组对象
const images = ref([
    // 这里要用/src这种形式的绝对路径,不能用../public这种相对路径,否则图片无法渲染
    { src: '/src/public/images/home-5.jpg', '--i': 1 },
    { src: '/src/public/images/home-4.jpg', '--i': 2 },
    { src: '/src/public/images/home-3.jpg', '--i': 3 },
    { src: '/src/public/images/home-2.jpg', '--i': 4 },
    { src: '/src/public/images/home-1.jpg', '--i': 5 },
])
</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

@media screen and (min-width:0px) {
    .contain {
        width: calc(100vw - 100px);
    }
}

@media screen and (min-width:1000px) {
    .contain {
        width: calc(80vw - 100px);
    }
}

.popdialog {
    position: absolute;
    top: 200px;
}

.contain {
    animation: backgroundAnimate 60s linear 0s infinite both;
    animation-delay: 0.7s;
    border-radius: @yihao-border-radius;
    padding: @wuhao-padding;

    @keyframes backgroundAnimate {
        0% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-1.jpg) center/cover no-repeat fixed;
        }

        19.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-1.jpg) center/cover no-repeat fixed;
        }

        20% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-2.jpg) center/cover no-repeat fixed;


        }

        39.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-2.jpg) center/cover no-repeat fixed;


        }

        40% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-3.jpg) center/cover no-repeat fixed;

        }

        59.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-3.jpg) center/cover no-repeat fixed;

        }



        60% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-4.jpg) center/cover no-repeat fixed;

        }

        79.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-4.jpg) center/cover no-repeat fixed;

        }

        80% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-5.jpg) center/cover no-repeat fixed;

        }

        99.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-5.jpg) center/cover no-repeat fixed;

        }

        100% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-1.jpg) center/cover no-repeat fixed;

        }
    }


}

img {
    position: absolute;
    bottom: 50px;
    right: 0px;
    width: @wuohao-width;
    height: @sihao-height;
    border: @yihao-border solid #fff;
    border-radius: @erhao-border-radius;
    animation: translateAnimate 60s linear 0s infinite both;
    animation-delay: calc(var(--i) * -12s);
}

@keyframes translateAnimate {
    0% {
        transform: translateX(0);
        z-index: 1;
        opacity: 1;
    }

    19% {
        transform: translateX(0);
        z-index: 1;
        opacity: 1;

    }

    20% {
        transform: translateX(-40px);
        z-index: 2;
        opacity: 1;

    }

    39% {
        transform: translateX(-40px);
        z-index: 2;
        opacity: 1;

    }

    40% {
        transform: translateX(-80px);
        z-index: 3;
        opacity: 1;

    }

    59% {
        transform: translateX(-80px);
        z-index: 3;
        opacity: 1;

    }

    60% {
        transform: translateX(-120px);
        z-index: 4;
        opacity: 1;

    }

    79% {
        transform: translateX(-120px);
        z-index: 4;
        opacity: 1;

    }

    80% {
        transform: translateX(-160px);
        z-index: 5;
        opacity: 1;

    }

    99% {
        transform: translateX(-160px);
        z-index: 5;
        opacity: 1;

    }

    99.2% {
        transform: translateX(-200px);
        opacity: 0;
    }

    99.4% {
        z-index: 1;
    }

    100% {
        z-index: 1;
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>