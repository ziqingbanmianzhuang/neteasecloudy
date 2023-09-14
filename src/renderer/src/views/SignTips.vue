<template>
    <div class="container-box">
        <h1>QAQ,你忘记登录啦</h1>
        <button @click="switchToSign">赶紧登录一个❤</button>
    </div>
</template>

<script setup lang="ts">
import router from '../router/index';
// 登录注册窗口
const switchToSign = () => {
    router.push('/sign')
}
</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

.container-box {
    width: 100vw;
    height: 100vh;
    font-family: "YinWanZi";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        padding: @erhao-padding;
        border-radius: @sihao-border-radius;
        background: @shisihao-red-color;
        color: @sanhao-font-color;
    }
}
</style>