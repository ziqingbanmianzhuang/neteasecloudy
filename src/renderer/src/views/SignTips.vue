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
@import "../assets/styles/variable.less";

.container-box {
    inline-size: 100vi;
    block-size: 100vb;
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        padding: @sihao-padding;
        border-radius: @erhao-border-radius;
        background: @wuhao-green-bgc;
        color: @sanhao-font-color;
    }
}
</style>