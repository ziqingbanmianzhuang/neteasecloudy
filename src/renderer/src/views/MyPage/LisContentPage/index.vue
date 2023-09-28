
<template>
    <section class="mys-box">
        <ul>
            <li v-for="([key, value]) in mys" :key="key" @click="switchToMyLis(value.name)">{{ value.name }}</li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import router from './../../../router/index'
// 保存我的xx的列表数据
const mys = reactive(new Map(
    [
        ['history', { name: '我的历史' }],
        ['love', { name: '我的收藏' }],
        ['follow', { name: '我的关注' }],
        ['lis', { name: '我的歌单' }],
    ]
))
// 跳转mylis二级页面
const switchToMyLis = (name) => {
    router.push({ path: '/my/mylis', query: { name } })
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/variable.less";


.mys-box {
    block-size: @qihao-height;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        color: @wuhao-font-color;

        li {
            margin-inline: 0;
            margin-block: @yihao-margin;
            border-radius: @yihao-border-radius;
            padding-inline: @liuhao-padding;
            padding-block: 0;
            inline-size: 80%;
            block-size: @sanhao-height;

            line-height: @sanhao-height;
            text-align: center;

            box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, .1),
                -1px -1px 3px 0 rgba(0, 0, 0, .1);

        }
    }
}
</style>