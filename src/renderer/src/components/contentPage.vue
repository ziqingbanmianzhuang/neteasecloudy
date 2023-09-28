<template>
  <section class="contain-box" ref="popdialog">
    <h2>音丸子</h2>
    <p>你好,欢迎来到音丸子,丸子终于被发现啦,我这里收藏了好多密码宝藏呢!和我做好朋友就有几乎和我一起遨游音乐世界噢~~~~~~而且丸子还有好多话想和你说,快点加入进来,接下来,带上耳机,丸子和你一起听歌啦♥♥</p>
    <section class="login-cancel-button">
      <button @click="createSign">加入丸子</button>
      <button @click="cancelSign">俺先看看</button>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const popdialog = ref()
const isLogin = localStorage.getItem('isLogin')
// 创建登录注册窗口
// 初始化dislog对话框
const initalDialog = () => {
  if (!isLogin)
    popdialog.value.style.display = "block"

}
const createSign = () => {
  const options = {
    h: 600,
    w: 900
  }
  window.api.createSign(options)
  popdialog.value.style.display = "none"
}
// 取消登录注册
const cancelSign = () => {
  popdialog.value.style.display = "none"
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

@media screen and (min-width:0px) {
  .contain-box {
    inline-size: calc(100vi - 120px);
    block-size: calc(100vb - 220px);
  }
}

@media screen and (min-width:1000px) {
  .contain-box {
    inline-size: calc(80vi - 120px);
    block-size: calc(100vb - 220px);
  }
}

// @media screen and (min-width:0px) {
//     .contain {
//         inline-size: calc(100vi - 120px);
//     }
// }

// @media screen and (min-width:1000px) {
//     .contain {
//         inline-size: calc(80vi - 120px);
//     }
// }

.contain-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: auto;

  border-radius: @erhao-border-radius;
  padding: @wuhao-padding;

  background-color: rgba(0, 0, 0, .3);


  h2 {
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    font-size: 50px;
    text-align: center;

    color: #78AE87;

  }

  p {
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    font-size: 20px;
    text-indent: 40px;

    color: #fff;

  }

  .login-cancel-button {
    display: flex;
    justify-content: center;


    button {
      box-shadow: 5px 5px 20px rgba(0, 0, 0, .2);
      margin-inline: 30px;
      margin-block: 0px;
      border-radius: 10px;
      inline-size: 100px;
      block-size: 50px;

      font-size: 18px;

    }

    button:nth-of-type(1) {
      color: #fff;
      background-color: #F9B3AB;
    }

    button:nth-of-type(2) {
      color: #F9B3AB;
      background-color: #fff;
    }
  }
}
</style>