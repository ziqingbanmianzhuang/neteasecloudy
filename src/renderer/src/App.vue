<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    window.api.getProcessValue((event, env) => {
        localStorage.setItem('envValue', env)
    })
})
</script>
<template>
    <!-- <button @click="getBooks">请求books</button> -->
    <router-view></router-view>
</template>

<style lang="less" >
@import "./assets/styles/reset.less";
@import "./assets/fonts/font.css";
@import "./assets/iconfonts/iconfont.css";
// variable变量似乎有组件作用域隔离,子组件访问不到该文件里面的变量
// @import "./assets/css/variable/index.less";
</style>
