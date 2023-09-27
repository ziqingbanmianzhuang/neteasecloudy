<template>
    <div class="container-chat-box">
        <h1>{{ $route.query.name }}</h1>
        <section class="show-chat"></section>
        <section class="chat-text-area">
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
    inline-size: calc(100vi - 300px);
    block-size: calc(100vb - calc(2 * @yihao-margin) - 50px);
    // overflow: hidden;
    text-align: center;

    h1 {
        font-size: 30px;
        block-size: 50px;
        font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
        color: @jiuhao-font-color;
        margin-block-start: @yihao-margin;
        // margin-top: yihao-margin;


    }

    .show-chat {
        inline-size: 100%;
        block-size: 400px;
        // border-bottom: 1px solid @sihao-font-color;
        border-block-end: 1px solid @sihao-font-color;
        overflow: auto;
    }

    .chat-text-area {
        inline-size: 100%;
        block-size: calc(100vb - calc(2 * @yihao-margin) - 500px);
        position: relative;
        overflow: hidden;

        textarea {
            // padding-top: @sanhao-padding;
            padding-block-start: @sanhao-padding;
            inline-size: 100%;
            block-size: calc(100vb - 500px - calc(2 * @yihao-margin));
            color: @wuhao-font-color;
        }

        .button-group {
            position: absolute;
            // right: 10px;
            inset-inline-end: 10px;
            // bottom: 20px;
            inset-block-end: 20px;

            button {
                background: @erhao-red-bgc;
                inline-size: 50px;
                block-size: 30px;
                padding: @sanhao-padding;
                border-radius: @yihao-border-radius;
                color: @qihao-white-bgc;
                // margin-right: @yihao-margin;
                margin-inline-end: @yihao-margin;
            }
        }
    }
}
</style>