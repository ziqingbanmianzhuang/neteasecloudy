<template>
    <div class="error-placeholder-container">
        oh my god,这里什么也没有呀~~~
        <a href="" @click="$emit('retryToReques')">再踢两脚试试</a>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.error-placeholder-container {
    font-family: "YinWanZi";
}
</style>