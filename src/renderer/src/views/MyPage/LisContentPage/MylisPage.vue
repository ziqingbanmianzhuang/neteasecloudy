<template>
    <div class="container-box">
        <section cite="">
            <h2> {{ $route.query.name }}</h2>
            <a href="#" ref="prev" @click="switchToMyLisIndex">返回</a>
        </section>
        <ul>
            <li v-for="(li) in lis" :key="li.id" @click="switchSong">
                <a href="#" ref="nofollow">{{ li.id }}</a>
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
    </div>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { ref } from 'vue'

const switchToMyLisIndex = () => {
    router.push('/my/index')
};

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
]);

/* 创建唱歌播放窗口
const createSongWin = () => {
    const options = {
        w: 400,
        h: 800
    }
    window.api.createSongWin(options)
} */

// 跳转唱歌播放接口
const switchSong = () => {
    router.push('/song')
};

</script>

<style lang="less" scoped>
@import "../../../assets/styles/variable.less";

.container-box {
    padding: @qihao-padding;

    section {
        display: flex;
        justify-content: space-between;

        block-size: 50px;

        a {
            color: @shisan-font-color;
        }

        h2 {
            padding-block-end: @sanhao-padding ;

            color: @qihao-font-color;
        }
    }

    ul {
        overflow: auto;

        margin-block-start: @yihao-margin;
        border-block-start: 1px solid @erhao-border-color;
        block-size: 300px;

        overscroll-behavior: none;


        li {
            display: flex;
            align-items: center;

            position: relative;

            margin-inline: 0;
            margin-block: @yihao-margin;


            a {
                padding-inline-end: @sanhao-padding;

                color: @qihao-font-color;
            }

            aside {
                padding-inline-start: @sanhao-padding;


                h3 {
                    color: @shiyi-font-color;
                }

                i:nth-of-type(2) {
                    font-size: @yihao-font-size;

                    color: @qihao-font-color;

                }

                i:nth-of-type(1) {
                    padding-inline-end: @sanhao-padding;

                    font-family: 'Courier New', Courier, monospace;
                    font-size: @yihao-font-size;

                    color: @jiuhao-font-color;
                }


            }

            footer {
                position: absolute;
                inset-inline-end: 10px;
                inset-block-start: 50%;

                color: @yihao-border-color;

                transform: translateX(-50%);


                i:nth-child(1) {
                    padding-inline-end: @sanhao-padding;
                }
            }
        }
    }

}
</style>