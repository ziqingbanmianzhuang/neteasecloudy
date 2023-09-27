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
                    <!-- <input type="text" v-model="name" placeholder="your name"> -->
                    <input type="text" v-model="password" placeholder="your password">
                    <input type="text" v-model="password" placeholder="your password again">
                    <input type="text" v-model.number="phone" placeholder="your phone">
                    <!-- <input type="text" v-model.number="captcha" placeholder="your captcha"> -->
                </form>
                <button @click="sendCaptcha">发送验证码</button>
                <button @click="createMyWin">确定</button>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import instance from '../api/instance'
import Apis from '../api/apis'
let name = ref('')
let password = ref('')
let phone = ref(0)
let captcha = ref(0)
const createMyWin = () => {
    // if (!name.value || !password.value || !phone.value || !captcha.value) return;
    // instance.signUp({ params: { phone: phone.value, captcha: captcha.value, password: password.value, nickname: name.value } }).then(res => {
    //     console.log('signup', res);
    // }).catch(err => {
    //     return Apis.reqMiddleware[0].onRejected(err)
    // }).then(res => {
    //     console.log(res);

    // }, err => {
    //     console.log(err);

    // })
    const options = {
        h: 800,
        w: 400
    }
    window.api.createWinMy(options)
    localStorage.setItem('isLogin', 'true')
}
// const sendCaptcha = () => {
//     instance.sendCaptcha({ params: { phone: phone.value } }).then(res => {
//         console.log('sendCaptcha', res);
//     }).catch(err => {
//         return Apis.reqMiddleware[0].onRejected(err)
//     }).then(res => {
//         console.log(res);

//     }, err => {
//         console.log(err);

//     })
// }
//登录
const signIn = () => {
    instance.signIn({ params: { phone: phone.value, password: password.value } }).then(res => {
        console.log('sgnIn', res);
    }).catch(err => {
        return Apis.reqMiddleware[0].onRejected(err)
    }).then(res => {
        console.log(res);

    }, err => {
        console.log(err);

    })
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.container-box {
    inline-size: 100vi;
    block-size: 100vb;
    background: url("../public/images/sign.jpg") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    color: @sanhao-font-color;

    .sign-box {
        inline-size: 70vi;
        block-size: 70vb;
        border: 13px @wuhao-border-color solid;

        .info-box {
            inline-size: 40vi;
            block-size: calc(70vb - 26px);
            background: @shiyihao-blue-bgc;
            float: inline-end;
            text-align: center;

            header {
                block-size: 80px;
                background: @shierhao-blue-bgc;
                transform: translateX(-13px);
                display: flex;
                justify-content: space-around;
                align-items: center;

                h1 {
                    font-weight: normal;
                }

                a {
                    display: block;
                    inline-size: @sanhao-height;
                    block-size: @erhao-height;
                    background: @shisanhao-blue-bgc;
                    border-radius: @erhao-border-radius;

                    ::before {
                        content: "";
                        display: block;
                        block-size: @erhao-height;
                        inline-size: @sanhao-width;
                        border-radius: 50%;
                        background: @sanhao-font-color;
                    }
                }


            }

            form {

                text-align: center;

                input {
                    padding-inline: @wuhao-padding;
                    padding-block: 0;
                    margin-block: @yihao-margin;
                    margin-inline: 0;
                    block-size: @erhao-height;
                    background: @shisanhao-blue-bgc;
                    color: @sanhao-font-color;
                    border-radius: @erhao-border-radius;

                    ::placeholder {
                        color: @shier-font-color;
                    }
                }
            }
        }

        button {
            inline-size: @sihao-width;
            block-size: @erhao-height;
            border-radius: @erhao-border-radius;
            text-align: center;
            background: @wuhao-green-bgc;
            color: @qihao-white-bgc;
            margin-block-start: @yihao-margin;
        }
    }
}
</style>