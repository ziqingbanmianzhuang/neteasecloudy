<template>
    <section class="container-box">
        <section class="bgc-box"></section>
        <section class="info-box">
            <aside>
                <img src="../../public/images/my-2.jpg" alt="" class="avatar-box">
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
@import "../../assets/css/variable/index.less";

.container-box {
    overflow: hidden;
    width: 100vw;
    font-family: "YinWanZi";



    .bgc-box {
        position: fixed;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: -1;
        height: @liuhao-height;
        background: @shihao-white-bgc url('../../public/images/my-1.jpg') center/100vw 200px no-repeat;
    }

    .info-box {
        height: @liuhao-height;
        width: 80%;
        margin: 180px auto 0px;
        border-radius: @yihao-border-radius;
        box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.3),
            -3px -3px 3px 0 rgba(0, 0, 0, 0.1);

        aside {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            color: #78ae87;

            h1 {
                font-size: 60px;
            }

            p {
                font-size: 45px;
            }

            nav a {
                color: @jiuhao-font-color;
                font-size: 38px;
            }

            .avatar-box {
                width: 100px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                background: @shihao-white-bgc;
            }
        }


    }

    .tool-box {
        width: 80vw;
        height: @sihao-height;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;

        .iconfont {
            font-family: 'iconfont';
            color: @wuhao-font-color;
            font-size: 120px;
        }
    }


}
</style>