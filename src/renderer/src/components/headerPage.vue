<template>
  <header class="keep-px">
    <!-- <header> 元素应该被用作介绍性内容的容器。元素通常包含：一个或多个标题元素 (<h1> - <h6>)logo 或 icon作者信息 -->
    <nav>
      <!-- 元定义导航链接集合。 -->
      <h1>
        <img class="flower-logo" src="../public/images/flower-logo.jpg" alt="">
        <a href="" class="keep-px">音丸子</a>
      </h1>
      <h2>
        <a ref="" class="keep-px" @click="judgeIsLogin">我的</a>
        <!-- // 通知父级跳转Find路由页面 -->
        <a ref="" class="keep-px" @click="$emit('switchToComponent', '/find')">发现</a>
        <a ref="" class="keep-px" @click="$emit('switchToComponent', '/setting')">设置</a>
        <!-- // 通知父级跳转About路由页面 -->
        <a ref="" class="keep-px" @click="$emit('switchToComponent', '/about')">关于</a>
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
@import "../assets/css/variable/index.less";

header.keep-px {
  width: 100%;
  height: @yihao-height;
  position: relative;

  nav {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: @yihao-height;

    h1 {
      justify-self: start;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "YinWanZi";

      .flower-logo {
        width: @erhao-width;
        height: @erhao-height;
        border-radius: 50%;
        margin: 0 @erhao-margin 0 @erhao-margin;
        vertical-align: middle;
      }

      a.keep-px {
        color: #78AE87;
        font-size: @yihao-font-size;
        line-height: @yihao-height;
        display: block;
        -webkit-app-region: drag;

      }
    }

    h2 {
      text-align: center;
      background-color: @yihao-red-bgc;
      position: relative;
      z-index: 1;

      a.keep-px {
        width: @sanhao-width;
        height: @sanhao-height;
        font-size: @erhao-font-size;
        color: @erhao-font-color;
        padding: 0 @sanhao-padding;
        padding-bottom: @sihao-padding;
        position: relative;

        &::before {
          content: '';
          display: block;
          height: 2px;
          width: @sihao-width;
          position: absolute;
          bottom: 10px;
          left: 7px;
          background-color: @transparent-bgc;
        }

        &:hover::before {
          background-color: @erhao-green-bgc;
        }
      }
    }

    ul {
      font-family: "YinWanZi";
      position: absolute;
      top: 0px;
      right: 10px;
      // justify-self: end;
      text-align: center;

      li.keep-px {
        display: inline-block;
        padding: 0 @erhao-padding;
        font-size: @yihao-font-size;
        color: @yihao-font-color;
        -webkit-text-stroke: 1px @yihao-stroke-color;
        cursor: pointer;
      }
    }
  }
}
</style>