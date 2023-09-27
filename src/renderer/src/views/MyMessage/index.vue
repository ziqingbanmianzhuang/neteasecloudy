<template>
    <div class="container-box">
        <nav>
            <input type="text" placeholder="搜索聊天列表">
        </nav>
        <section class="main-box">
            <section class="li-box">
                <li v-for="([key, value]) in lis" :key="key" :class="value.active ? 'active' : ''"
                    @click="switchToChat(value.name)">
                    <img :src="value.avatar" alt="">
                    <aside>
                        <h2>{{ value.name }}</h2>
                        <p>{{ value.lastinfo }}</p>
                        <i>{{ value.time }}</i>
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
import { reactive } from 'vue'
//存储列表聊天数据的Map对象
const lis = reactive(new Map([
    ['id1', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: true }],
    ['id2', { id: 1, avatar: '/src/public/images/sign.jpg', name: '张三丰', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id3', { id: 1, avatar: '/src/public/images/sign.jpg', name: '龙啸天', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id4', { id: 1, avatar: '/src/public/images/sign.jpg', name: '镇四海', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id5', { id: 1, avatar: '/src/public/images/sign.jpg', name: '欧阳娜娜', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id6', { id: 1, avatar: '/src/public/images/sign.jpg', name: '张飞', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id7', { id: 1, avatar: '/src/public/images/sign.jpg', name: '妮妮', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id8', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id9', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id10', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id11', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id12', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id13', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id14', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id15', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id16', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
    ['id17', { id: 1, avatar: '/src/public/images/sign.jpg', name: '半面妆', lastinfo: '[图片]xxxxxxxxxxxxxxxxxxxxxxxxxx', time: '昨天', active: false }],
]))
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
    block-size: calc(100vb - calc(2 * @yihao-margin));
    inline-size: calc(100vi - calc(2 * @yihao-margin));
    overflow-x: hidden;
    border-radius: @erhao-border-radius;


    nav {
        block-size: 40px;
        inline-size: calc(100vi - 20px);
        background-color: @erhao-red-bgc;
        border-start-start-radius: @erhao-border-radius;
        border-start-end-radius: @erhao-border-radius;

        input {
            inline-size: 250px;
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
            overscroll-behavior: none;
            block-size: calc(100vb - 40px - calc(2 * @yihao-margin));
            overflow-y: auto;
            overflow-x: hidden;
            inline-size: 280px;
            margin: 0;
            border-inline-end: 1px solid @sihao-font-color;

            li {
                block-size: 60px;
                inline-size: 260px;
                display: flex;
                align-items: center;
                padding-inline-end: @sanhao-padding;
                position: relative;
                margin-block: @erhao-margin ;
                margin-inline: 0;

            }

            li.active {
                border-inline-start: 1px solid @sihao-font-color;
            }

            img {
                block-size: 50px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                // margin: 0 @yihao-margin;
                margin-block: 0;
                margin-inline: @yihao-margin;
                object-view-box: inset(5% 5% 5% 5%);
                object-fit: cover;

            }

            aside {

                h2 {
                    font-size: 20px;
                    color: @sihao-font-color;
                    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
                }

                p {
                    color: @wuhao-font-color;
                    font-size: 15px;
                    display: block;
                    inline-size: 70px;
                    // white-space: nowrap;
                    // overflow: hidden;
                    // text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

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
            block-size: calc(100vb - calc(2 * @yihao-margin) - 50px);
        }


    }


}
</style>