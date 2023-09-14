<template>
    <section class="container-box">
        <div class="sign-box">
            <section class="info-box">
                <header>
                    <h1>登录</h1>
                    <a href="#"></a>
                    <h1>注册</h1>
                </header>
                <form action="">
                    <input type="text" placeholder="your name">
                    <input type="text" placeholder="your password">
                    <input type="text" placeholder="your password again">
                </form>
                <button @click="createMyWin">确定</button>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
const createMyWin = () => {
    const options = {
        h: 800,
        w: 400
    }
    window.api.createWinMy(options)
    localStorage.setItem('isLogin', 'true')
}
</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

.container-box {
    width: 100vw;
    height: 100vh;
    background: url('../public/images/sign.jpg') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'YinWanZi';
    color: @sanhao-font-color;

    .sign-box {
        width: 70vw;
        height: 70vh;
        border: 13px @wuhao-border-color solid;

        .info-box {
            width: 40vw;
            height: calc(70vh - 26px);
            background: @shiyihao-blue-bgc;
            float: right;
            text-align: center;

            header {
                height: 80px;
                background: @shierhao-blue-bgc;
                transform: translateY(-13px);
                display: flex;
                justify-content: space-around;
                align-items: center;

                h1 {
                    font-weight: normal;
                }

                a {
                    display: block;
                    width: @erhao-height;
                    height: @erhao-height;
                    background: @shisanhao-blue-bgc;
                    border-radius: @sanhao-border-radius;

                    &::before {
                        content: "";
                        display: block;
                        height: @erhao-height;
                        width: @erhao-width;
                        border-radius: 50%;
                        background: @sanhao-font-color;
                    }
                }


            }

            form {

                text-align: center;

                input {
                    padding: 0 @wuhao-padding;
                    margin: @erhao-margin 0;
                    height: @erhao-height;
                    background: @shisanhao-blue-bgc;
                    color: @sanhao-font-color;
                    border-radius: @sihao-border-radius;

                    &::placeholder {
                        color: @shier-font-color;
                    }
                }
            }
        }

        button {
            width: @sihao-width;
            height: @erhao-height;
            border-radius: @sihao-border-radius;
            text-align: center;
            background: @shisihao-red-color;
            color: @qihao-white-bgc;
            margin-top: @sihao-margin;
        }
    }
}
</style>