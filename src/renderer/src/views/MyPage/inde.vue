<template>
    <section class="container-box">
        <section class="bgc-box"></section>
        <section class="info-box">
            <aside>
                <img class="avatar-box" src="../../public/images/my-2.jpg" alt="">
                <h1>半面妆</h1>
                <nav>
                    <a href="">16关注</a>
                    <a href="">5粉丝</a>
                    <a href="">Lv7</a>
                </nav>
                <p>这归途尚远,且迷人且倔强</p>
            </aside>
        </section>
        <section class="tool-box">
            <i class="iconfont" @click="createMyInfoWin">&#xe61a;</i>
            <i class="iconfont" @click="switchToMyLis('我的下载')">&#xe619;</i>
        </section>

        <router-view></router-view>

    </section>
</template>
  
<script setup lang="ts">
import router from '../../router/index'
// 保存我的xx的列表数据

// 跳转mylis二级页面
const switchToMyLis = (name) => {
    router.push({ path: '/my/mylis', query: { name } })
}
// createMyInfoWin
const createMyInfoWin = () => {
    const options = {
        w: 900,
        h: 700
    }
    window.api.createMyInfoWin(options)
}
</script>
<style lang="less" scoped>
@import "../../assets/styles/variable.less";


.container-box {
    overflow-x: hidden;

    inline-size: calc(100vi - 10px);
    block-size: 100vb;

    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;



    .bgc-box {
        position: fixed;
        inset-block-start: 0;
        inset-inline-start: 0;
        z-index: -1;

        inline-size: 100vi;
        block-size: @liuhao-height;

        background: @shihao-white-bgc url("../../public/images/my-1.jpg") center/100vi 200px no-repeat;
    }

    .info-box {
        inline-size: 80vi;
        block-size: @liuhao-height;

        margin-inline: auto;
        margin-block-start: 180px 0;
        border-radius: @yihao-border-radius;

        box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, .3),
            -3px -3px 3px 0 rgba(0, 0, 0, .1);

        aside {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            color: #78ae87;

            h1 {
                font-size: 30px;
            }

            p {
                font-size: 20px;
            }

            nav a {
                font-size: 15px;

                color: @jiuhao-font-color;
            }

            .avatar-box {
                border-radius: 50%;
                inline-size: 100px;
                aspect-ratio: 1/1;
                object-view-box: inset(10% 10% 10% 10%);
                object-fit: cover;

                background: @shihao-white-bgc;
            }
        }


    }

    .tool-box {
        display: flex;
        justify-content: space-around;
        align-items: center;

        margin-inline: auto;
        margin-block: 0;
        inline-size: 80vi;
        block-size: @sihao-height;



        .iconfont {
            font-family: 'iconfont';
            font-size: 40px;

            color: @wuhao-font-color;
        }
    }


}
</style>