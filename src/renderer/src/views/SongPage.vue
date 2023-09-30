<template>
    <div class="container-box">
        <header>
            <a class="return" href="" @click="switchToMy">返回</a>
            <h1>简单</h1>
        </header>
        <aside>
            <i>歌手:鬼卞</i>
            <i>来源:2023全网</i>
        </aside>
        <main class="btn-group">
            <button>歌词</button>
            <button>评论</button>
        </main>
        <router-view></router-view>
        <footer>
            播放器
        </footer>
    </div>
</template>

<script setup lang="ts">
import router from '@renderer/router';

const switchToMy = () => {
    router.push('/my')
};

</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.container-box {
    margin-inline: @yihao-margin;
    margin-block: 0;

    .return {
        position: fixed;
        inset-inline-end: 10px;
    }

    h1 {
        font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;

        color: @jiuhao-font-color;


    }

    aside {
        i {
            font-size: @sihao-font-size;

            color: @jiuhao-font-color;
        }
    }

    .btn-group {
        button {

            margin-inline: 0;
            margin-block-start: @erhao-margin 0;
            border-radius: @yihao-border-radius;


            font-size: @sanhao-font-size;

            color: @qihao-white-bgc;
            background: @wuhao-font-color;


        }
    }
}
</style>