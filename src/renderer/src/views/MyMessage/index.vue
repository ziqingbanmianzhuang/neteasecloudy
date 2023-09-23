<template>
    <div class="container-box">
        <nav>
            <input type="text" placeholder="搜索聊天列表">
        </nav>
        <section class="main-box">
            <section class="li-box">
                <li v-for="(li) in lis" :key="li.id" :class="li.active ? 'active' : ''" @click="switchToChat(li.name)">
                    <img :src="li.avatar" alt="">
                    <aside>
                        <h2>{{ li.name }}</h2>
                        <p>{{ li.lastinfo }}</p>
                        <i>{{ li.time }}</i>
                    </aside>
                </li>

            </section>
            <section class="chatbox">
                <router-view></router-view>
            </section>
        </section>

    </div>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { ref } from 'vue'
// 聊天列表数据
const lis = ref([
    { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]', time: '昨天', active: true },
    { id: 2, avatar: '/src/public/images/sign.jpg', name: '张三丰', lastinfo: '[图片]', time: '昨天' },
    { id: 3, avatar: '/src/public/images/sign.jpg', name: '龙啸天', lastinfo: '[图片]', time: '昨天' },
    { id: 4, avatar: '/src/public/images/sign.jpg', name: '镇四海', lastinfo: '[图片]', time: '昨天' },
    { id: 5, avatar: '/src/public/images/sign.jpg', name: '胡巴', lastinfo: '[图片]', time: '昨天' },
    { id: 6, avatar: '/src/public/images/sign.jpg', name: '欧阳娜娜', lastinfo: '[图片]', time: '昨天' },
    { id: 7, avatar: '/src/public/images/sign.jpg', name: '张飞', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
    { id: 8, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]', time: '昨天' },
])
// 跳转到聊天二级页面
const switchToChat = (name) => {
    router.push({
        path: '/message/chat', query: {
            name
        }
    })
}
</script>

<style lang="less" scoped>
@import "../../assets/css/variable/index.less";

.container-box {
    margin: @yihao-margin;
    border-radius: @erhao-border-radius;


    nav {
        block-size: 40px;
        inline-size: calc(100vi - 20px);
        background-color: @erhao-red-bgc;
        border-start-start-radius: @erhao-border-radius;
        border-start-end-radius: @erhao-border-radius;

        input {
            inline-size: calc(25vi - 10px);
            // margin: @yihao-margin 0 0 @yihao-margin ;
            margin-block-start: @yihao-margin ;
            margin-block-end: 0;
            margin-inline-start: @yihao-margin ;
            margin-inline-end: 0;

            block-size: 20px;
            border-radius: @yihao-border-radius;
            color: @shiyi-font-color;
            // padding-left: @erhao-padding;
            padding-inline-start: @erhao-padding;

            &::placeholder {
                color: @shiyi-font-color;
            }

        }

    }

    .main-box {
        display: flex;

        .li-box {
            block-size: calc(100vb - 40px);
            overflow: auto;
            inline-size: 25vi;
            margin: 0;

            li {
                block-size: 60px;
                inline-size: 25vi;
                display: flex;
                align-items: center;
                // border-right: 1px solid @sihao-font-color;
                border-inline-end: 1px solid @sihao-font-color;
                padding-inline-end: @sanhao-padding;
                position: relative;
                // margin: erhao-margin 0;
                margin-block: @erhao-margin ;
                margin-inline: 0;

            }

            li.active {
                // border-left: 1px solid @sihao-font-color;
                border-inline-start: 1px solid @sihao-font-color;
            }

            img {
                block-size: 50px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                // margin: 0 @yihao-margin;
                margin-block: 0;
                margin-inline: @erhao-margin;

            }

            aside {

                h2 {
                    font-size: 20px;
                    color: @sihao-font-color;
                    font-family: "YinWanZi";
                }

                p {
                    color: @wuhao-font-color;
                    font-size: 15px;
                }

                i {
                    position: absolute;
                    // right: 10px;
                    inset-inline-end: 10px;
                    // top: 50%;
                    inset-block-start: 50%;
                    transform: translateY(-50%);
                    color: @wuhao-font-color;
                    font-size: 15px;

                }


            }


        }

        .chat-box {
            inline-size: calc(75vi - 30px);
        }


    }


}
</style>