<template>
  <header class="keep-px">
    <!-- <header> 元素应该被用作介绍性内容的容器。元素通常包含：一个或多个标题元素 (<h1> - <h6>)logo 或 icon作者信息 -->
    <nav>
      <!-- 元定义导航链接集合。 -->
      <h1>
        <img class="flower-logo" src="../public/images/flower-logo.jpg" alt="">
        <a class="keep-px" href="">音丸子</a>
      </h1>
      <h2>
        <a class="keep-px" ref="" @click="judgeIsLogin">我的</a>
        <!-- // 通知父级跳转Find路由页面 -->
        <a class="keep-px" ref="" @click="switchToComponent('/find')">发现</a>
        <a class="keep-px" ref="" @click="switchToComponent('/setting')">设置</a>
        <!-- // 通知父级跳转About路由页面 -->
        <a class="keep-px" ref="" @click="switchToComponent('/about')">关于</a>
      </h2>
      <div></div>
      <ul>
        <li class="keep-px" @click="hiddenWin">-</li>
        <li class="keep-px" @click="maximizeWin">+</li>
        <li class="keep-px" @click="closeWin">x</li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['switchToComponent'])
// 导航跳转函数,触发父级导航跳转
const switchToComponent = (path) => {
  emit('switchToComponent', path)
}
localStorage.setItem('isLogin', 'false')
//判断是否登录
const judgeIsLogin = () => {
  // 是否登录
  if (localStorage.getItem('isLogin') === 'true') {
    const options = {
      h: 800,
      w: 400
    }
    window.api.createWinMy(options)
  }
  else {
    const options = {
      h: 600,
      w: 900
    }
    // 创建提示登录注册窗口
    window.api.createSignTips(options)

  }
}
// 关闭窗口
const closeWin = () => {
  let page = 'main'
  window.api.closeWin(page)
}
// 隐藏窗口
const hiddenWin = () => {
  let page = 'main'
  window.api.hiddenWin(page)
}
// 最大化窗口
const maximizeWin = () => {
  let page = 'main'
  window.api.maximizeWin(page)
}



</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

header.keep-px {
  position: relative;

  inline-size: 100%;
  block-size: @sanhao-height;

  nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: @sanhao-height;

    block-size: 100%;


    h1 {
      display: flex;
      justify-content: center;
      justify-self: start;
      align-items: center;

      font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;



      .flower-logo {
        margin-inline: @yihao-margin;
        margin-block: 0;
        border-radius: 50%;
        inline-size: @sanhao-width;
        block-size: @erhao-height;

        vertical-align: middle;
      }

      a.keep-px {
        display: block;

        font-size: @sanhao-font-size;
        line-height: @sanhao-height;

        color: @liuhao-font-color;

        -webkit-app-region: drag;



      }
    }

    h2 {
      position: relative;
      z-index: 1;

      text-align: center;

      background-color: @yihao-red-bgc;


      a.keep-px {
        position: relative;

        padding-inline: @sanhao-padding;
        padding-block: 0 @liuhao-padding;
        inline-size: @erhao-width;
        block-size: @sanhao-height;

        font-size: @yihao-font-size;

        color: @wuhao-font-color;


        ::before {
          content: '';
          display: block;

          position: absolute;
          inset-block-end: 10px;
          inset-inline-start: 7px;


          inline-size: @sihao-width;
          block-size: 2px;

          background-color: @transparent-bgc;
        }

        :hover::before {
          background-color: @wuhao-green-bgc;
        }
      }
    }

    ul {
      position: absolute;
      inset-block-start: 0;
      inset-inline-end: 10px;

      font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
      text-align: center;

      li.keep-px {
        display: inline-block;

        padding-inline: @sanhao-padding;
        padding-block-end: @liuhao-padding;

        font-size: @erhao-font-size;

        color: @wuhao-font-color;
        -webkit-text-stroke: 1px @yihao-stroke-color;

        cursor: pointer;
      }
    }
  }
}

/* FontsAPI备用字体回退 */
.fonts-loaded h1 {
  font-family: "YinWanZi" !important;
}
</style>