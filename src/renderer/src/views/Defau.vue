<template>
    <div class="container">
        <div class="header">
            <headerPage @switchToComponent="switchToComponent">
            </headerPage>
        </div>
        <!-- 头部组件 -->
        <div class="main">
            <homePage></homePage>
            <!-- 内容展示组件 -->
            <sidebarPage></sidebarPage>
            <!-- 侧边栏组件 -->
        </div>
    </div>
</template>

<script setup lang="ts">

// 引入headerPage组件
import headerPage from '../components/headerPage.vue';

// 引入sidebarPage组件
import sidebarPage from '../components/sidebarPage.vue';

// 引入hompage组件
import homePage from '../components/homePage.vue';

// 引入路由器
import router from '../router/index'

// 跳转组件方法的封装
const switchToComponent = (to) => {
    // router.push(to)
    // UI层面的状态过度
    if (!document.startViewTransition) {
        router.push(to)
    }

    document.startViewTransition(() => {
        console.log('trandiotion');

        router.push(to)
    })

};


</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";


.container {
    margin: @sihao-margin;
    border-radius: @erhao-border-radius;
    inline-size: calc(100vi - 100px);
    block-size: calc(100vb - 100px);

    background-color: @yihao-red-bgc;

}

.main {
    display: flex;
    justify-content: space-between;

    margin-block-start: @sihao-margin;
    inline-size: calc(100vi - 100px);
    block-size: calc(100vb - 200px);
}
</style>