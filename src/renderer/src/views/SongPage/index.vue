<template>
    <div class="container-box">
        <a class="return" href="" @click="switchToMy">返回</a>
        <h1>简单</h1>
        <aside>
            <i>歌手:鬼卞</i>
            <i>来源:2023全网</i>
        </aside>
        <secton class="btn-group">
            <button @click="switchToWords('geci')">歌词</button>
            <button @click="switchToWords('pinglun')">评论</button>
        </secton>
        <router-view></router-view>
        <footer>
            播放器
        </footer>
    </div>
</template>

<script setup lang="ts">
import router from '../../router/index';
// 返回到我的页面
const switchToMy = () => {
    router.push('/my')
}
const switchToWords = (words) => {
    words === 'geci' ? router.push('/song/geci') : router.push('/song/pinglun')

}
</script>

<style lang="less" scoped>
@import "../../assets/styles/variable.less";

.container-box {
    margin: 0 @yihao-margin;

    .return {
        position: fixed;
        right: 10px;
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
            margin: @erhao-margin @yihao-margin 0 0;
            border-radius: @yihao-border-radius;

            font-size: @sanhao-font-size;

            color: @qihao-white-bgc;
            background: @wuhao-font-color;
        }
    }
}
</style>