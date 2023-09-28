<template>
    <section class="contain animation">
        <div class="pop-dialog" v-if="isLogin">
            <content-page></content-page>
        </div>
    </section>
    <img :style="{ '--i': value['--i'] }" class="animation" :src="value.src" alt="" v-for="([key, value]) in  images  "
        :key="key">
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 引入contentpage组件
import contentPage from './contentPage.vue'

// 是否登录
const isLogin = localStorage.getItem('isLogin');

// 保存images数据的map对象,具有极快的查找速度，对于键值对存储循环增删的时候是更好的选择
const images = reactive(
    new Map([
        ['images-5',
            {
                src: '/src/public/images/home-5.jpg',
                '--i': 1
            }
        ],
        [
            'images-4',
            {
                src: '/src/public/images/home-4.jpg',
                '--i': 2
            }
        ],
        ['images-3',
            {
                src: '/src/public/images/home-3.jpg',
                '--i': 3
            }
        ],
        ['images-2',
            {
                src: '/src/public/images/home-2.jpg',
                '--i': 4
            }
        ],
        ['images-1',
            {
                src: '/src/public/images/home-1.jpg',
                '--i': 5
            }
        ],

    ])
);

/* reactive([
    // 这里要用/src这种形式的绝对路径,不能用../public这种相对路径,否则图片无法渲染
    { src: '/src/public/images/home-5.jpg', '--i': 1 },
    { src: '/src/public/images/home-4.jpg', '--i': 2 },
    { src: '/src/public/images/home-3.jpg', '--i': 3 },
    { src: '/src/public/images/home-2.jpg', '--i': 4 },
    { src: '/src/public/images/home-1.jpg', '--i': 5 },
]) */
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

@media screen and (min-width:0px) {
    .contain {
        inline-size: calc(100vi - 120px);
    }
}

@media screen and (min-width:1000px) {
    .contain {
        inline-size: calc(80vi - 120px);
    }
}

// @media screen and (min-height:0px) {
//     .contain {
//         inline-size: calc(100vi - 120px);
//     }
// }

// @media screen and (min-height:1000px) {
//     .contain {
//         inline-size: calc(80vi - 120px);
//     }
// }




.contain {

    position: relative;

    margin-inline: 10px;
    margin-block-end: 10px;

    .pop-dialog {
        position: absolute;
        inset-block-start: 50%;
        inset-inline-start: 50%;

        background: rgba(0, 0, 0, .03) url("../public/images/home-1.jpg") center/cover no-repeat fixed;


        transform: translate(-50%, -50%);
    }

    animation: backgroundAnimate 60s linear 0s infinite both;
    animation-delay: 0.7s;
    border-radius: @erhao-border-radius;


    @keyframes backgroundAnimate {
        0% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-1.jpg") center/cover no-repeat fixed;
        }

        19.5% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-1.jpg") center/cover no-repeat fixed;
        }

        20% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-2.jpg") center/cover no-repeat fixed;


        }

        39.5% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-2.jpg") center/cover no-repeat fixed;


        }

        40% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-3.jpg") center/cover no-repeat fixed;

        }

        59.5% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-3.jpg") center/cover no-repeat fixed;

        }



        60% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-4.jpg") center/cover no-repeat fixed;

        }

        79.5% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-4.jpg") center/cover no-repeat fixed;

        }

        80% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-5.jpg") center/cover no-repeat fixed;

        }

        99.5% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-5.jpg") center/cover no-repeat fixed;

        }

        100% {
            background: rgba(0, 0, 0, .03) url("../public/images/home-1.jpg") center/cover no-repeat fixed;

        }
    }


}

img {
    position: absolute;
    inset-block-end: 50px;
    inset-inline-end: 0;

    border: @erhao-border solid #fff;
    border-radius: @erhao-border-radius;
    inline-size: 10vi;
    aspect-ratio: 1 / 1;
    object-view-box: inset(20% 20% 30% 20%);
    object-fit: cover;


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
        transform: translateX(0);
        opacity: 1;
    }
}
</style>