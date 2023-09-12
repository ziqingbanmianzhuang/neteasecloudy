<template>
    <div class="container-box">
        <section></section>
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
                <li>邮箱:1387545</li>
                <li>github:47545859586</li>
                <li>微信:13dfdhf</li>
            </ul>
        </section>
        <section>
            <h2>Flower Wind</h2>
            <p>随风起舞的自由的花</p>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container-box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    color: #a7ccb0;
    text-align: center;

    section:nth-child(1) {
        width: 60vw;
        height: 30vh;
        background: #f1fff1;
        position: absolute;
        left: 0;
    }

    section:nth-child(2) {
        width: 40vw;
        height: 45vh;
        background: #f8fff8;
        position: absolute;
        right: 0;

        h1 {
            font-weight: normal;
            letter-spacing: 10px;
        }

        p {
            font-size: 14px;
        }

        button {
            margin-top: 20px;
            border: 1px solid #d9e9dd;
            color: #93be9e;
            border-radius: 5px;
            background: #fff;
        }

        label {
            display: block;
            font-size: 18px;
        }

        nav {
            margin-top: 10px;

            a {
                padding-right: 10px;
                color: #93be9e;
                font-family: 'YinWanZi';
            }
        }
    }

    section:nth-child(3) {
        width: 70vw;
        height: 70vh;
        background: #c5dccb;
        position: absolute;
        bottom: 0;
        text-align-last: left;
        padding-left: 30px;

        h1 {
            color: #fff;
            font-weight: normal;
        }

        ul li {
            color: #91c0b2;
        }
    }

    section:nth-child(4) {
        width: 80vw;
        height: 60vh;
        background: #ffedeb;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(130px, 100px) rotate(-30deg);
        color: #fff;

        h2 {
            margin-top: 10px;
            font-size: 80px;
        }

        p {
            font-family: 'YinWanZi';
            font-size: 60px;

        }
    }
}
</style>