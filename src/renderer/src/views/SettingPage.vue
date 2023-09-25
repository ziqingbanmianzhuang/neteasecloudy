<template>
    <div class="container-box">
        <h1>设置</h1>
        <i @click="switchToHome">返回</i>
        <nav>
            <a :href="`#${link.name}`" v-for="(link) in links" :key="link.name">{{ link.name }}</a>
        </nav>
        <section class="zhanghao" id="账号">
            <ul>
                <li><img v-for="(image) in images" alt="" :key="image.src" :src="image.src"></li>
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
            <select name="" id="font-setting">
                <optgroup>
                    <option :value="fontOpt.value" v-for="(fontOpt, index) in fontOpts" :key="index">{{ fontOpt.value }}
                    </option>
                </optgroup>
            </select>
            <template :key="index" v-for="(setting) in settings">
                <h2>{{ setting.title }}</h2>
                <label><input type="radio">{{ setting.info }}</label>
            </template>
            <h2>关闭主面板</h2>
            <label><input type="radio" name="mianban">最小化到系统托盘</label>
            <label><input type="radio" name="mianban">退出音丸子</label>
            <h2>定时关机</h2>
            <section class="time-box">
                <button>剩余关机时间</button>
                <div class="hours">
                    <select name="" id="hours">
                        <optgroup>
                            <option :value="time.value" v-for="time in times" :key="time.value">{{ time.value }}</option>
                        </optgroup>
                    </select>
                    <i>时</i>
                </div>
                <div class="minutes">
                    <select name="" id="minutes">
                        <optgroup>
                            <option :value="time.value" v-for="time in times" :key="time.value">{{ time.value }}</option>
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
import { ref } from 'vue'
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
}
// 保存工具栏的链接的对象数组
const links = ref([
    { name: '账号' },
    { name: '常规' },
    { name: '播放' },
    { name: '消息和隐私' },
    { name: '快捷键' },
    { name: '下载' },
    { name: '歌词' },
    { name: '工具' },
])
// 保存账号头像的链接的对象数组
const images = ref([
    { src: '/src/public/images/home-1.jpg' },
    { src: '/src/public/images/home-2.jpg' },
    { src: '/src/public/images/home-3.jpg' }
])
// 保存选择字体大小数据的对象数组
const fontOpts = ref([
    { value: '默认' },
    { value: '14px' },
    { value: '20px' },
    { value: '25px' },
    { value: '30px' },
])
// 保存设置的数据的对象数组
const settings = ref([
    { title: '启动', info: '开启自动运行' },
    { title: '关联', info: '设置为默认浏览器' },
    { title: '动画', info: '禁用动画效果' },
    { title: 'gpu加速', info: '禁用gpu加速' },
])
// 保存时间option的数据的对象数组
const times = ref([
    { value: '默认' },
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
    { value: 60 }
])
</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

.container-box {
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    // padding-left: @liuhao-padding;
    padding-inline-start: @liuhao-padding;

    >i {
        display: block;
        color: @jiuhao-font-color;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    h1 {
        // margin-top: @yihao-margin;
        margin-block-start: @yihao-margin;
    }

    h2 {
        // margin-top: @yihao-margin;
        margin-block-start: @yihao-margin;
        font-weight: 600;
    }

    >section {
        // padding-bottom: @sihao-padding;
        padding-block-end: @sihao-padding;
        // border-bottom: @yihao-border solid @erhao-border-color;
        border-block-end: @yihao-border solid @erhao-border-color;
    }

    nav {
        display: flex;
        justify-content: space-around;
        font-weight: 600;
        // margin-top: @yihao-margin;
        margin-block-start: @yihao-margin;




        a {
            // border-bottom: @yihao-border solid transparent;
            border-block-end: @yihao-border solid transparent;


            &:hover {
                // border-bottom: @yihao-border solid @yihao-border-color;
                border-block-end: @yihao-border solid @erhao-border-color;

            }
        }
    }

    .zhanghao {
        // margin-top: @yihao-margin;
        margin-block-start: @yihao-margin;



        ul {
            display: flex;

            li:nth-last-child(2) {
                // padding-right: @sihao-padding;
                padding-inline-end: @sihao-padding;
            }

            img {
                inline-size: @sanhao-width;
                block-size: @erhao-height;
                border-radius: 50%;
            }
        }

        button {
            border-block-end: @yihao-border solid @erhao-border-color;
            // border: @yihao-border solid @yihao-border-color;
            background: @sihao-green-bgc;
            border-radius: @yihao-border-radius;
            padding: @sihao-padding;
            font-weight: 600;
            // margin-top: @yihao-margin;
            margin-block-start: @yihao-margin;

        }
    }

    .changgui {
        #font-setting {
            inline-size: @liuhao-width;
        }

        .time-box {
            inline-size: 40vi;
            display: flex;
            justify-content: space-around;
            align-items: center;
            // padding-top: @sihao-padding;
            padding-block-start: @sihao-padding;

            button {
                border: @yihao-border solid @yihao-border-color;
                background: @sihao-green-bgc;
                border-radius: @yihao-border-radius;
                padding: @sihao-padding;
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