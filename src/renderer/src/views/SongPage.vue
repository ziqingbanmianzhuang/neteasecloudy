<template>
    <div class="container-box">
        <a class="return" href="" @click="switchToMy">返回</a>
        <h1>简单</h1>
        <aside>
            <i>歌手:鬼卞</i>
            <i>来源:2023全网</i>
        </aside>
        <secton class="btn-group">
            <button>歌词</button>
            <button>评论</button>
        </secton>
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
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.container-box {
    margin-block: 0;
    margin-inline: @yihao-margin;

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
            background: @wuhao-font-color;
            color: @qihao-white-bgc;
            border-radius: @yihao-border-radius;
            font-size: @sanhao-font-size;
            margin-block-start: @erhao-margin 0;
            margin-inline: 0;

        }
    }
}
</style>