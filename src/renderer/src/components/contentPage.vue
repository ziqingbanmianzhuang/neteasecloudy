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
// @media screen and (min-width:0px) {
//   .contain-box {
//     width: calc(100vb - 400px);
//   }
// }

// @media screen and (min-width:1000px) {
//   .contain-box {
//     width: calc(80vb - 400px);
//   }
// }
@media screen and (min-height:0px) {
  .contain-box {
    inline-size: calc(100vi - 400px);
  }
}

@media screen and (min-height:1000px) {
  .contain-box {
    inline-size: calc(80vi - 400px);
  }
}

.contain-box {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;

  h2 {
    color: #78AE87;
    font-size: 50px;
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    text-align: center;
    // margin-top: 30px;
    margin-block-start: 30px;
  }

  p {
    color: #fff;
    font-size: 20px;
    font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
    text-indent: 40px;
    // margin-top: 50px;
    margin-block-start: 50px;
  }

  .login-cancel-button {
    display: flex;
    justify-content: center;
    // margin-top: 50px;
    margin-block-start: 50px;


    button {
      font-size: 18px;
      inline-size: 100px;
      block-size: 50px;
      border-radius: 10px;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
      // margin: 0 30px;
      margin-block: 0px;
      margin-inline: 30px;
    }

    button:nth-of-type(1) {
      background-color: #F9B3AB;
      color: #fff;
    }

    button:nth-of-type(2) {
      background-color: #fff;
      color: #F9B3AB;
    }
  }
}
</style>