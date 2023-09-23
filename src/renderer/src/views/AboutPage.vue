<template>
    <div class="container-box">
        <section>
            <i @click="switchToHome">返回</i>
        </section>
        <section>
            <h1>关于音/丸/子</h1>
            <p>当前版本:1.0.0</p>
            <button>检查更新</button>
            <label><input type="radio" name="upgrade">自动更新</label>
            <label><input type="radio" name="upgrade">有新版本的时候提醒我</label>
            <nav>
                <a href="#">官网</a>
                <a href="#">管理规则</a>
                <a href="#">服务条款</a>
                <a href="#">隐私政策</a>
                <a href="#">儿童隐私政策</a>
            </nav>
        </section>
        <section>
            <h1>contact with us</h1>
            <p>if you have any question or want anything else ,please contact with us by:
            </p>
            <ul>
                <li v-for="(contact, index) in contacts" :key="index">
                    {{ contact.info }}
                </li>
            </ul>
        </section>
        <section>
            <h2>Flower Wind</h2>
            <p>随风起舞的自由的花</p>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入路由
import router from '@renderer/router';
// 跳转home页面
const switchToHome = () => {
    router.push('/')
}
// 保存联系方式的对象数组
const contacts = ref([
    { info: '邮箱:1387545' },
    { info: 'github:47545859586' },
    { info: '微信:13dfdhf' },
])


</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

.container-box {
    inline-size: 100vh;
    block-size: 100vw;
    overflow: hidden;
    position: relative;
    color: @jiuhao-font-color;
    text-align: center;

    section:nth-child(1) {
        inline-size: 60vh;
        block-size: 30vh;
        background: @sanhao-red-bgc;
        position: absolute;
        // left: 0;
        inset-inline-start: 0;

        i {
            display: block;
            color: @qihao-font-color;
            position: fixed;
            // top: 0;
            inset-block-start: 0;
            // left: 20px;
            inset-inline-start: 20px;
            cursor: pointer;
        }
    }

    section:nth-child(2) {
        inline-size: 40vh;
        block-size: 45vw;
        background: @bahao-white-bg;
        position: absolute;
        // right: 0;
        inset-inline-end: 0;

        h1 {
            font-weight: normal;
            letter-spacing: @yihao-letter-spacing;
        }

        p {
            font-size: @yihao-font-size;
        }

        button {
            margin-block-start: @yihao-margin;
            // margin-top: @yihao-margin;
            border: @yihao-border solid @yihao-border-color;
            color: @liuhao-font-color;
            border-radius: @yihao-border-radius;
            background: @qihao-white-bgc;
        }

        label {
            display: block;
            font-size: @yihao-font-size;
            color: @shisan-font-color;
        }

        nav {
            // margin-top: @yihao-margin;
            margin-block-start: @yihao-margin;


            a {
                // padding-right: @sanhao-padding;
                padding-inline-end: @sanhao-padding;
                color: @liuhao-font-color;
                font-family: 'YinWanZi';
            }
        }
    }

    section:nth-child(3) {
        inline-size: 70vh;
        block-size: 70vw;
        background: @sihao-green-bgc;
        position: absolute;
        // bottom: 0;
        inset-block-end: 0;
        text-align: start;
        // padding-left: @sanhao-padding;
        padding-inline-start: @sanhao-padding;

        h1 {
            color: @sanhao-font-color;
            font-weight: normal;
        }

        ul li {
            color: @shisan-font-color;
        }
    }

    section:nth-child(4) {
        inline-size: 80vh;
        block-size: 60vw;
        background: @liuhao-red-bgc;
        position: absolute;
        // bottom: 0;
        inset-block-end: 0;
        // right: 0;
        inset-inline-end: 0;
        transform: translate(130px, 100px) rotate(-30deg);
        color: @sanhao-font-color;

        h2 {
            // margin-top: @sanhao-margin;
            margin-block-start: @sanhao-margin;
            font-size: 80px;
        }

        p {
            font-family: 'YinWanZi';
            font-size: 60px;

        }
    }
}
</style>