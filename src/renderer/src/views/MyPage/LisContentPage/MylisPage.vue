<template>
    <section class="container-box">
        <nav>
            <h2> {{ $route.query.name }}</h2>
            <a href="" @click="switchToMyLisIndex">返回</a>
        </nav>
        <ul>
            <li v-for="(li) in lis" :key="li.id" @click="switchSong">
                <a href="">{{ li.id }}</a>
                <aside>
                    <h3>{{ li.songName }}</h3>
                    <i>{{ li.isLove ? '❤' : '❤' }}</i>
                    <i>{{ li.songPeople }}</i>
                </aside>
                <footer>
                    <i>△</i>
                    <i>:</i>
                </footer>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { ref } from 'vue'

const switchToMyLisIndex = () => {
    router.push('/my/index')
}
// 保存数据的li列表
const lis = ref([
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 2,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 3,
        songName: '你的名字',
        songPeople: '明天',
        isLove: false
    },
    {
        id: 4,
        songName: '骄阳似火',
        songPeople: '牛奶咖啡',
        isLove: false
    },
    {
        id: 5,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
    {
        id: 1,
        songName: '大海',
        songPeople: '张信哲',
        isLove: false
    },
])
// 创建唱歌播放窗口
// const createSongWin = () => {
//     const options = {
//         w: 400,
//         h: 800
//     }
//     window.api.createSongWin(options)
// }
// 跳转唱歌播放接口
const switchSong = () => {
    router.push('/song')
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable/index.less";

.container-box {
    padding: @qihao-padding;

    nav {
        display: flex;
        justify-content: space-between;
        block-size: 50px;

        a {
            color: @shisan-font-color;
        }

        h2 {
            color: @qihao-font-color;
            // padding-bottom: @sanhao-padding;
            padding-block-end: @sanhao-padding ;
        }
    }

    ul {
        border-block-start: 1px solid @erhao-border-color;
        // margin-top: yihao-margin;
        margin-block-start: @yihao-margin;
        block-size: 300px;
        overflow: auto;

        li {
            // margin: @yihao-margin 0;
            margin-block: @yihao-margin;
            margin-inline: 0;
            display: flex;
            align-items: center;
            position: relative;

            a {
                // padding-right: @sanhao-padding;
                padding-inline-end: @sanhao-padding;
                color: @qihao-font-color;
            }

            aside {
                // padding-left: @sanhao-padding;
                padding-inline-start: @sanhao-padding;


                h3 {
                    color: @shiyi-font-color;
                }

                i:nth-of-type(2) {
                    color: @qihao-font-color;
                    font-size: @sihao-font-size;

                }

                i:nth-of-type(1) {
                    color: @jiuhao-font-color;
                    font-size: @sihao-font-size;
                    // padding-right: @sanhao-padding;
                    padding-inline-end: @sanhao-padding;
                    font-family: 'Courier New', Courier, monospace;

                }


            }

            footer {
                position: absolute;
                right: 10px;
                // top: 50%;
                inset-block-start: 50%;
                // transform: translateY(-50%);
                transform: translateX(-50%);
                color: @yihao-border-color;

                i:nth-child(1) {
                    // padding-right: @sanhao-padding;
                    padding-inline-end: @sanhao-padding;



                }
            }
        }
    }

}
</style>