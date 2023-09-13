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
// 创建loginStore
// import { useLoginStore } from '../store/loginStore/index';
// const loginStore = useLoginStore()
const createMyWin = () => {
    const options = {
        h: 800,
        w: 400
    }
    window.api.createWinMy(options)
    // loginStore.setLogin()
    localStorage.setItem('isLogin', 'true')
    // console.log(`1111111111111,${loginStore.isLogin}`);

}
</script>

<style lang="less" scoped>
.container-box {
    width: 100vw;
    height: 100vh;
    background: url('../public/images/sign.jpg') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'YinWanZi';
    color: #fff;

    .sign-box {
        width: 70vw;
        height: 70vh;
        border: 13px rgba(102, 139, 191, 0.4) solid;

        .info-box {
            width: 40vw;
            height: calc(70vh - 26px);
            background: rgba(102, 139, 191, 0.4);
            float: right;
            text-align: center;

            header {
                height: 80px;
                background: rgba(102, 139, 191, 0.8);
                transform: translateY(-13px);
                display: flex;
                justify-content: space-around;
                align-items: center;

                h1 {
                    font-weight: normal;
                }

                a {
                    display: block;
                    width: 60px;
                    height: 30px;
                    background: #5279b2;
                    border-radius: 20px;

                    &::before {
                        content: "";
                        display: block;
                        height: 30px;
                        width: 30px;
                        border-radius: 50%;
                        background: #fff;
                    }
                }


            }

            form {

                text-align: center;

                input {
                    padding: 0 20px;
                    margin: 10px 0;
                    height: 40px;
                    background: #5279b2;
                    color: #fff;
                    border-radius: 5px;

                    &::placeholder {
                        color: #ffffff9e;
                    }
                }
            }
        }

        button {
            width: 50px;
            height: 30px;
            border-radius: 5px;
            text-align: center;
            background: #ae7d78;
            color: #fff;
            margin-top: 30px;
        }
    }
}
</style>