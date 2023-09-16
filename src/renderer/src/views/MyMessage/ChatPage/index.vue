<template>
    <div class="container-chat-box">
        <h1>{{ $route.query.name }}</h1>
        <section class="show-chat"></section>
        <section class="chat-box">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <section class="button-group">
                <button>关闭</button>
                <button>发送</button>
            </section>
        </section>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import "../../../assets/css/variable/index.less";

.container-chat-box {
    width: calc(75vw - 30px);
    height: calc(100vh - 40px);
    transform: translateX(10px);
    text-align: center;

    h1 {
        font-size: 30px;
        font-family: "YinWanZi";
        color: @jiuhao-font-color;
        margin-top: yihao-margin;


    }

    .show-chat {
        width: 100%;
        height: 400px;
        border-bottom: 1px solid @sihao-font-color;
        overflow: auto;
    }

    .chat-box {
        width: 100%;
        height: calc(100vh - 440px);

        textarea {
            padding-top: @sanhao-padding;
            width: 100%;
            height: 100%;
            color: @wuhao-font-color;
        }

        .button-group {
            position: absolute;
            right: 10px;
            bottom: 20px;

            button {
                background: @erhao-red-bgc;
                width: 50px;
                height: 30px;
                padding: @sanhao-padding;
                border-radius: @yihao-border-radius;
                color: @qihao-white-bgc;
                margin-right: @yihao-margin;
            }
        }
    }
}
</style>