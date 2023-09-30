<template>
    <div class="container-chat-box">
        <h1>{{ $route.query.name }}</h1>
        <aside class="show-chat"></aside>
        <main class="chat-text-area">
            <textarea id="" name="" cols="30" rows="10"></textarea>
            <section class="button-group">
                <button>关闭</button>
                <button>发送</button>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import "../../../assets/styles/variable.less";

.container-chat-box {
    inline-size: calc(100vi - 300px);
    block-size: calc(100vb - calc(2 * @yihao-margin) - 50px);

    text-align: center;

    h1 {
        margin-block-start: @yihao-margin;
        block-size: 50px;

        font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
        font-size: 30px;

        color: @jiuhao-font-color;



    }

    .show-chat {
        overflow: auto;

        border-block-end: 1px solid @sihao-font-color;
        inline-size: 100%;
        block-size: 400px;
    }

    .chat-text-area {
        overflow: hidden;

        position: relative;

        inline-size: 100%;
        block-size: calc(100vb - calc(2 * @yihao-margin) - 500px);


        textarea {
            padding-block-start: @sanhao-padding;
            inline-size: 100%;
            block-size: calc(100vb - 500px - calc(2 * @yihao-margin));

            color: @wuhao-font-color;
        }

        .button-group {
            position: absolute;
            inset-inline-end: 10px;
            inset-block-end: 20px;

            button {
                margin-inline-end: @yihao-margin;
                border-radius: @yihao-border-radius;
                padding: @sanhao-padding;
                inline-size: 50px;
                block-size: 30px;

                color: @qihao-white-bgc;
                background: @erhao-red-bgc;
            }
        }
    }
}
</style>