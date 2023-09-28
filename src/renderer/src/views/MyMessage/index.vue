<template>
    <div class="container-box">
        <nav>
            <input type="text" placeholder="搜索聊天列表">
        </nav>
        <section class="main-box">
            <section class="li-box">
                <li :class="value.active ? 'active' : ''" v-for="([key, value]) in lis" :key="key"
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
@import "../../assets/styles/variable.less";

.container-box {
    overflow-x: hidden;

    margin: @yihao-margin;
    border-radius: @erhao-border-radius;
    block-size: calc(100vb - calc(2 * @yihao-margin));
    inline-size: calc(100vi - calc(2 * @yihao-margin));


    nav {
        border-start-start-radius: @erhao-border-radius;
        border-start-end-radius: @erhao-border-radius;
        inline-size: calc(100vi - 20px);
        block-size: 40px;

        background-color: @erhao-red-bgc;

        input {
            margin-block-start: @yihao-margin 0;
            margin-inline-start: @yihao-margin 0;
            padding-inline-start: @erhao-padding;
            border-radius: @yihao-border-radius;
            inline-size: 250px;
            block-size: 20px;

            color: @shiyi-font-color;

            ::placeholder {
                color: @shiyi-font-color;
            }

        }

    }

    .main-box {
        display: flex;

        .li-box {
            overflow-y: auto;
            overflow-x: hidden;

            margin: 0;
            border-inline-end: 1px solid @sihao-font-color;
            inline-size: 280px;
            block-size: calc(100vb - 40px - calc(2 * @yihao-margin));

            overscroll-behavior: none;

            li {
                display: flex;
                align-items: center;

                position: relative;

                margin-inline: 0;
                margin-block: @erhao-margin ;
                padding-inline-end: @sanhao-padding;
                inline-size: 260px;
                block-size: 60px;
            }

            li.active {
                border-inline-start: 1px solid @sihao-font-color;
            }

            img {
                margin-inline: @yihao-margin;
                margin-block: 0;
                border-radius: 50%;
                block-size: 50px;
                aspect-ratio: 1/1;
                object-view-box: inset(5% 5% 5% 5%);
                object-fit: cover;

            }

            aside {

                h2 {
                    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
                    font-size: 20px;

                    color: @sihao-font-color;
                }

                p {
                    overflow: hidden;
                    display: block;

                    inline-size: 70px;


                    font-size: 15px;
                    white-space: nowrap;
                    text-overflow: ellipsis;


                    color: @wuhao-font-color;


                }

                i {
                    position: absolute;
                    inset-inline-end: 10px;
                    inset-block-start: 50%;

                    font-size: 15px;

                    color: @wuhao-font-color;

                    transform: translateY(-50%);
                }


            }


        }

        .chat-box {
            block-size: calc(100vb - calc(2 * @yihao-margin) - 50px);
        }


    }


}
</style>