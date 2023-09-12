<template>
    <div class="container-box">
        <h1>设置</h1>
        <nav>
            <a href="#">账号</a>
            <a href="#">常规</a>
            <a href="#">播放</a>
            <a href="#">消息和隐私</a>
            <a href="#">快捷键</a>
            <a href="#">下载</a>
            <a href="#">歌词</a>
            <a href="#">工具</a>
        </nav>
        <section class="zhanghao">
            <ul>
                <li><img src="../public/images/flower-logo.jpg" alt=""></li>
                <li><img src="../public/images/flower-logo.jpg" alt=""></li>
                <li><img src="../public/images/flower-logo.jpg" alt=""></li>
                <li>
                    <a href="">绑定账号</a>
                    <i>-></i>
                </li>
            </ul>
            <button>修改个人信息</button>
        </section>
        <section class="changgui">
            <h1>常规</h1>
            <h2>字体选择</h2>
            <select name="" id="font-setting">
                <optgroup>
                    <option value="默认">默认</option>
                    <option value="14px">14px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                </optgroup>
            </select>
            <h2>启动</h2>
            <label><input type="radio">开启自动运行</label>
            <h2>关联</h2>
            <label><input type="radio">设置为默认浏览器</label>
            <h2>动画</h2>
            <label><input type="radio">禁用动画效果</label>
            <h2>gpu加速</h2>
            <label><input type="radio">禁用gpu加速</label>
            <h2>关闭主面板</h2>
            <label><input type="radio" name="mianban">最小化到系统托盘</label>
            <label><input type="radio" name="mianban">退出音丸子</label>
            <h2>定时关机</h2>
            <section class="time-box">
                <button>剩余关机时间</button>
                <div class="hours">
                    <select name="" id="hours">
                        <optgroup>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                        </optgroup>
                    </select>
                    <i>时</i>
                </div>
                <div class="minutes">
                    <select name="" id="minutes">
                        <optgroup>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                        </optgroup>
                    </select>
                    <i>分</i>
                </div>

            </section>

        </section>
        <section class="bofang">
            <h1>播放</h1>
            <h2>高清屏幕适配</h2>
            <label><input type="radio" name="gaoqing">最小化到系统托盘</label>
            <label><input type="radio" name="gaoqing">退出音丸子</label>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container-box {
    font-family: 'YinWanZi';
    padding-left: 40px;

    h1 {
        margin-top: 30px;
    }

    h2 {
        margin-top: 20px;
        font-weight: 600;
    }

    >section {
        padding-bottom: 10px;
        border-bottom: 1px solid #fff8f8;
    }

    nav {
        display: flex;
        justify-content: space-around;
        font-weight: 600;
        margin-top: 30px;


        a {
            border-bottom: 1px solid transparent;

            &:hover {
                border-bottom: 1px solid #c8a8a4;
            }
        }
    }

    .zhanghao {
        margin-top: 40px;


        ul {
            display: flex;

            li:nth-last-child(2) {
                padding-right: 20px;
            }

            img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
        }

        button {
            border: 1px solid #000;
            background: #fff;
            border-radius: 10px;
            padding: 10px;
            font-weight: 600;
            margin-top: 30px;
        }
    }

    .changgui {
        #font-setting {
            width: 100px;
        }

        .time-box {
            width: 40vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 10px;

            button {
                border: 1px solid #000;
                background: #fff;
                border-radius: 5px;
                padding: 10px;
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