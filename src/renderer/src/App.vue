<script setup lang="ts">


</script>
<template>
    <router-view></router-view>
</template>

<style lang="less" >
@import "./assets/css/styles.less";
@import "./assets/fonts/font.css";
@import "./assets/iconfonts/iconfont.css";
// variable变量似乎有组件作用域隔离,子组件访问不到该文件里面的变量
// @import "./assets/css/variable/index.less";
</style>
