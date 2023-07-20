<script setup lang="ts">

import headerPage from './components/headerPage.vue'; 
// 引入headerPage组件
import sidebarPage from './components/sidebarPage.vue';
// 引入sidebarPage组件
import contentPage from './components/contentPage.vue';
// 引入contentPage组件
</script>

<template>
<div class="container">
    <headerPage></headerPage>
 <!-- 头部组件 -->
<sidebarPage></sidebarPage>
<!-- 侧边栏组件 -->
<contentPage></contentPage>
<!-- 内容展示组件 -->
</div>
</template>

<style lang="less">
@import "./assets/css/styles.less";
html {
    -webkit-app-region: drag;
    background-color: #fff;
}
.container {
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);
    background-color: #FFEDEB;
    transform: translate(50px, 50px);
    border-radius: 10px;
}
</style>
