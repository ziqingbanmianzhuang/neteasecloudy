<template>
    <div class="container-box">
        <h1>设置</h1>
        <i @click="switchToHome">返回</i>
        <nav>
            <a :href="`#${value.name}`" v-for="([key, value]) in links" :key="key">{{ value.name }}</a>
        </nav>
        <section class="zhanghao" id="账号">
            <ul>
                <li><img :src="value.src" v-for="([key, value]) in images" alt="" :key="key"></li>
                <li>
                    <a href="">绑定账号</a>
                    <i>-></i>
                </li>
            </ul>
            <button>修改个人信息</button>
        </section>
        <section class="changgui" id="常规">
            <h1>常规</h1>
            <h2>字体选择</h2>
            <select id="font-setting" name="">
                <optgroup>
                    <option :value="value.value" :selected="value.selected" v-for="([key, value]) in fontOpts" :key="key">{{
                        value.value }}
                    </option>
                </optgroup>
            </select>
            <template v-for="([key, value]) in settings" :key="key">
                <h2>{{ value.title }}</h2>
                <label><input type="radio">{{ value.info }}</label>
            </template>
            <h2>关闭主面板</h2>
            <label><input name="mianban" type="radio">最小化到系统托盘</label>
            <label><input name="mianban" type="radio">退出音丸子</label>
            <h2>定时关机</h2>
            <section class="time-box">
                <button>剩余关机时间</button>
                <div class="hours">
                    <select id="hours" name="">
                        <optgroup>
                            <option :value="value.value" :selected="value.selected" v-for="[key, value] in times"
                                :key="key">{{ value.value }}</option>
                        </optgroup>
                    </select>
                    <i>时</i>
                </div>
                <div class="minutes">
                    <select id="minutes" name="">
                        <optgroup>
                            <option :value="value.value" :selected="value.selected" v-for="[key, value] in times"
                                :key="key">{{ value.value }}</option>
                        </optgroup>
                    </select>
                    <i>分</i>
                </div>
            </section>

        </section>
        <section class="bofang" id="播放">
            <h1>播放</h1>
            <h2>高清屏幕适配</h2>
            <label><input type="radio" name="gaoqing">最小化到系统托盘</label>
            <label><input type="radio" name="gaoqing">退出音丸子</label>
        </section>
    </div>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { reactive } from 'vue'

// 跳转home
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

// 保存工具栏的链接的Map对象
const links = reactive(new Map([
    [
        '账号',
        { name: '账号' }
    ],
    [
        '常规',
        { name: '常规' }
    ],
    [
        '播放',
        { name: '播放' }
    ],
    [
        '消息和隐私',
        { name: '消息和隐私' }
    ],
    [
        '快捷键',
        { name: '快捷键' }
    ],
    [
        '下载',
        { name: '下载' }
    ],
    [
        '歌词',
        { name: '歌词' }
    ],
    [
        '工具',
        { name: '工具' }
    ],
]));

// 保存账号头像的链接的Map对象
const images = reactive(new Map([
    [
        '头像1',
        { src: '/src/public/images/home-1.jpg' }
    ],
    [
        '头像2',
        { src: '/src/public/images/home-2.jpg' }
    ],
    [
        '头像3',
        { src: '/src/public/images/home-3.jpg' }
    ],
]));

// 保存选择字体大小数据的Map对象,
const fontOpts = reactive(new Map([
    [
        '默认',
        { value: '默认', selected: false }
    ],
    [
        '14px',
        { value: '14px', selected: false }
    ],
    [
        '20px',
        { value: '20px', selected: true }
    ],
    [
        '25px',
        { value: '25px', selected: false }
    ],
    [
        '30px',
        { value: '30px', selected: false }
    ]
]));

const settings = reactive(new Map([
    [
        '启动',
        {
            title: '启动',
            info: '开启自动运行'
        }],
    [
        '关联',
        {
            title: '关联',
            info: '设置为默认浏览器'
        }],
    [
        '动画',
        {
            title: '动画',
            info: '禁用动画效果'
        }],
    [
        'gpu加速',
        {
            title: 'gpu加速',
            info: '禁用gpu加速'
        }],
]));

// 保存时间option的数据的Map对象
const times = reactive(new Map([
    [
        '默认',
        {
            value: '默认',
            selected: false
        }],
    [
        '10',
        {
            value: 10,
            selected: true
        }],
    [
        '20',
        {
            value: 20,
            selected: false
        }],
    [
        '30',
        {
            value: 30,
            selected: false
        }],
    [
        '40',
        {
            value: 40,
            selected: false
        }],
    [
        '50',
        {
            value: 50,
            selected: false
        }],
    [
        '60',
        {
            value: 60,
            selected: false
        }]
]));

</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.container-box {
    padding-inline-start: @liuhao-padding;

    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;

    >i {
        display: block;

        position: fixed;
        top: 0;
        left: 0;

        color: @jiuhao-font-color;

        cursor: pointer;
    }

    h1 {
        margin-block-start: @yihao-margin;
    }

    h2 {
        margin-block-start: @yihao-margin;

        font-weight: 600;
    }

    >section {
        border-block-end: @yihao-border solid @erhao-border-color;
        padding-block-end: @sihao-padding;
    }

    nav {
        display: flex;
        justify-content: space-around;

        margin-block-start: @yihao-margin;

        font-weight: 600;





        a {
            border-block-end: @yihao-border solid transparent;


            :hover {
                border-block-end: @yihao-border solid @erhao-border-color;

            }
        }
    }

    .zhanghao {
        margin-block-start: @yihao-margin;



        ul {
            display: flex;

            li:nth-last-child(2) {
                padding-inline-end: @sihao-padding;
            }

            img {
                border-radius: 50%;
                inline-size: @sanhao-width;
                block-size: @erhao-height;
            }
        }

        button {
            margin-block-start: @yihao-margin;
            border-block-end: @yihao-border solid @erhao-border-color;
            border-radius: @yihao-border-radius;
            padding: @sihao-padding;

            font-weight: 600;

            background: @sihao-green-bgc;

        }
    }

    .changgui {
        #font-setting {
            inline-size: @liuhao-width;
        }

        .time-box {
            display: flex;
            justify-content: space-around;
            align-items: center;

            padding-block-start: @sihao-padding;
            inline-size: 40vi;

            button {
                border: @yihao-border solid @yihao-border-color;
                border-radius: @yihao-border-radius;
                padding: @sihao-padding;

                background: @sihao-green-bgc;
            }
        }


    }

    .bofang {
        label {
            display: block;
        }
    }
}
</style>