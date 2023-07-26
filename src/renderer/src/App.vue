<script setup lang="ts">

import headerPage from './components/headerPage.vue';
// 引入headerPage组件
import sidebarPage from './components/sidebarPage.vue';
// 引入sidebarPage组件
import contentPage from './components/contentPage.vue';
// 引入contentPage组件
import homePage from './components/homePage.vue';
</script>

<template>
    <div class="container">
        <headerPage></headerPage>
        <!-- 头部组件 -->
        <section class="main">
            <!-- <contentPage></contentPage> -->
            <homePage></homePage>
            <!-- 内容展示组件 -->
            <sidebarPage></sidebarPage>
            <!-- 侧边栏组件 -->
        </section>
    </div>
</template>

<style lang="less" >
@import "./assets/css/styles.less";
@import "./assets/fonts/font.css";

.container {
    width: calc(100vw - 100px);
    margin: 50px;
    // height: calc(100vh - 100px);
    min-height: auto;
    height: calc(100vh - 100px);
    background-color: #FFEDEB;
    border-radius: 10px;
}

.main {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    width: calc(100vw - 100px);
    height: calc(100vh - 200px);
}
</style>
