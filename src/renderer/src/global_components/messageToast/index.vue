<template>
    <div>
        <transition-group name="list" mode="out-in">
            <div class="message-toast-container" v-show="toast.isShowMessageToast" v-for="toast in toastList"
                :key="toast.id">
                <h1>{{ toast.messageToastTitle }}</h1>
                <p>{{ toast.messageToastContent }}</p>
                <i @click="closeMessageToast(toast.id)">x</i>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMessageToastStore } from "../../store/message_toast_store/index";

//使用计算属性跟踪依赖toastlise,当所跟踪的依赖项发生变化的时候会自动更新页面
const toastList = computed(() => useMessageToastStore().toastList)

//关闭messagetoast的函数
const closeMessageToast = (id) => {
    useMessageToastStore().deleteToastList(id)
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/variable.less";




.message-toast-container {
    overflow-y: auto;

    position: relative;

    margin-block: @yihao-margin;
    border-radius: 10px;
    padding: @erhao-padding;
    inline-size: 200px;
    block-size: 100px;

    font-family: 'YinWanZi';
    text-align: center;
    overflow-wrap: anywhere;

    background-color: #fff;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4),
        -2px -2px 4px rgba(0, 0, 0, 0.1);

    // overscroll-behavior: none;
    overscroll-behavior: none;


    &::-webkit-scrollbar {
        display: none;
    }

    h1 {

        padding-block-start: @erhao-padding;

        font-size: @erhao-font-size;
        font-weight: 700;

        color: @sihao-font-color;

        &::before {
            content: "";

            display: inline-block;


            border-width: @yihao-border;
            border-style: solid;
            border-block-start-color: @liuhao-border-color;
            border-inline-end-color: transparent;
            border-block-end-color: transparent;
            border-inline-start-color: @liuhao-border-color;
            inline-size: @yihao-width;
            block-size: @yihao-height;
        }

        &::after {
            content: "";

            display: inline-block;

            border-width: @yihao-border;
            border-style: solid;
            border-block-start-color: transparent;
            border-inline-end-color: @liuhao-border-color;
            border-block-end-color: @liuhao-border-color;
            border-inline-start-color: transparent;
            inline-size: @yihao-width;
            block-size: @yihao-height;
        }
    }

    p {
        padding-block-start: @erhao-padding;

        font-size: @yihao-font-size;

        color: @liuhao-font-color;

    }

    i {
        position: absolute;
        inset-inline-end: 5px;
        inset-block-start: 0px;

        font-size: 20px;

        color: @erhao-font-color;
    }

}

.list-enter-active,
.list-leave-active,
.list-move {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-leave-active {
    position: absolute !important;
    transform: translateX(0px);
}
</style>