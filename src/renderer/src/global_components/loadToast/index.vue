<template>
    <div class="a">
        <div class="b"></div>
        <div class="c"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import "../../assets/styles/variable.less";

div.a {
    inline-size: 40px;
    block-size: 80px;

    animation: animateTranslate 1s linear infinite;
}

@keyframes animateTranslate {
    0% {
        transform: translateX(0px);

    }

    100% {
        transform: translateX(-40px);

    }
}


div.b {
    border-radius: 5px;
    inline-size: 40px;
    block-size: 40px;

    background: @erhao-green-bgc;

    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);

    transform-origin: 100% 100%;
    animation: animate 1s infinite;
}

div.c {
    inset-block-end: 0px;
    inset-inline-start: 40px;

    border-radius: 5px;
    inline-size: 40px;
    block-size: 40px;

    background-color: rgba(120, 174, 135, 0.4);

    transform-origin: 100% 0%;
    animation: animateni 1s infinite;
}

@keyframes animateni {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(-90deg);
    }

    90% {
        transform: rotate(-83deg);
    }

    100% {
        transform: rotate(-90deg);
    }
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(90deg);
    }

    90% {
        transform: rotate(83deg);
    }

    100% {
        transform: rotate(90deg);
    }
}
</style>