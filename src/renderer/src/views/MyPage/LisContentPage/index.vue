
<template>
    <section class="mys-box">
        <ul>
            <li v-for="(my) in mys" :key="my.name" @click="switchToMyLis(my.name)">{{ my.name }}</li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from './../../../router/index'
// 保存我的xx的列表数据
const mys = ref([
    { name: '我的历史' },
    { name: '我的收藏' },
    { name: '我的关注' },
    { name: '我的歌单' },
])
// 跳转mylis二级页面
const switchToMyLis = (name) => {
    router.push({ path: '/my/mylis', query: { name } })
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable/index.less";


.mys-box {
    block-size: @qihao-height;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        color: @wuhao-font-color;

        li {
            block-size: @sanhao-height;
            line-height: @sanhao-height;
            inline-size: 80%;
            // padding: 0 @liuhao-padding;
            padding-block: 0;
            padding-inline: @liuhao-padding;
            // margin: @yihao-margin 0;
            margin-block: @yihao-margin;
            margin-inline: 0;
            text-align: center;
            border-radius: @yihao-border-radius;
            box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.1),
                -1px -1px 3px 0 rgba(0, 0, 0, 0.1);

        }
    }
}
</style>