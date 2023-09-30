<template>
    <main class="container-box">
        <section>
            <i @click="switchToHome">返回</i>
        </section>
        <section>
            <h1>关于音/丸/子</h1>
            <p>当前版本:1.0.0</p>
            <button>检查更新</button>
            <label><input name="upgrade" type="radio">自动更新</label>
            <label><input name="upgrade" type="radio">有新版本的时候提醒我</label>
            <nav>
                <a href="#" v-for="([key, value]) in navLinks" :key="key"> {{ value.link }}</a>
            </nav>
        </section>
        <section>
            <h2>contact with us</h2>
            <p>if you have any question or want anything else ,please contact with us by:
            </p>
            <ul>
                <li v-for="( [key, value] ) in  contacts " :key="key">
                    {{ value.info }}
                </li>
            </ul>
        </section>
        <section>
            <h2>Flower Wind</h2>
            <p>随风起舞的自由的花</p>
        </section>
    </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 引入路由
import router from '@renderer/router';

// 跳转home页面
const switchToHome = () => {
    // UI层面的状态过度
    if (!document.startViewTransition) {
        router.push('/')

    }

    document.startViewTransition(() => {
        console.log('trandiotion');

        router.push('/')

    })
};

// 存储导航链接的Map对象数组
const navLinks = reactive(new Map([
    ['official', { link: '官网' }],
    ['rule', { link: '管理规则' }],
    ['service', { link: '服务条款' }],
    ['privacy', { link: '隐私政策' }],
    ['child', { link: '儿童隐私政策' }]
]));

// 保存联系方式的Map对象数组
const contacts = reactive(new Map([
    ['email', { info: '邮箱:1387545' }],
    ['github', { info: 'github:47545859586' }],
    ['wechat', { info: '微信:13dfdhf' }]
]));



</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.container-box {
    overflow: hidden;

    position: relative;

    inline-size: 100vi;
    block-size: 100vb;

    text-align: center;

    color: @jiuhao-font-color;


    section:nth-child(1) {
        position: absolute;
        inset-inline-start: 0;

        inline-size: 60vi;
        block-size: 30vi;

        background: @sanhao-red-bgc;



        i {
            display: block;

            position: fixed;
            inset-block-start: 0;
            inset-inline-start: 20px;

            color: @qihao-font-color;

            cursor: pointer;
        }
    }

    section:nth-child(2) {
        position: absolute;
        inset-inline-end: 0;

        inline-size: 40vi;
        block-size: 45vb;

        background: @bahao-white-bg;



        h1 {
            font-weight: normal;
            letter-spacing: @yihao-letter-spacing;
        }

        p {
            font-size: @yihao-font-size;
        }

        button {
            margin-block-start: @yihao-margin;
            border: @yihao-border solid @yihao-border-color;
            border-radius: @yihao-border-radius;

            color: @liuhao-font-color;
            background: @qihao-white-bgc;
        }

        label {
            display: block;

            font-size: @yihao-font-size;

            color: @shisan-font-color;
        }

        nav {
            margin-block-start: @yihao-margin;


            a {
                padding-inline-end: @sanhao-padding;

                font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;

                color: @liuhao-font-color;
            }
        }
    }

    section:nth-child(3) {
        position: absolute;
        inset-block-end: 0;

        padding-inline-start: @sanhao-padding;
        inline-size: 70vi;
        block-size: 70vb;

        text-align: start;

        background: @sihao-green-bgc;

        h2 {
            font-weight: normal;
            color: @sanhao-font-color;
        }

        ul li {
            display: list-item;

            margin-inline-start: @sanhao-padding;

            color: @shisan-font-color;

            ::marker {
                content: " ♥";

                color: #fff;
            }
        }
    }

    section:nth-child(4) {
        position: absolute;
        inset-block-end: 0;
        inset-inline-end: 0;

        inline-size: 80vi;
        block-size: 60vb;

        color: @sanhao-font-color;
        background: @liuhao-red-bgc;


        transform: translate(130px, 100px) rotate(-30deg);

        h2 {
            margin-block-start: @sanhao-margin;

            font-size: 80px;
        }

        p {
            font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
            font-size: 60px;

        }
    }
}
</style>