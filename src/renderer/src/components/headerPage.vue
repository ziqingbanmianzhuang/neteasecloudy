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
        <a ref="" class="keep-px" @click="createWinToMy">我的</a>
        <!-- // 通知父级跳转Find路由页面 -->
        <a ref="" class="keep-px" @click="$emit('switchToFind')">发现</a>
        <a ref="" class="keep-px" @click="$emit('switchToSetting')">设置</a>
        <!-- // 通知父级跳转About路由页面 -->
        <a ref="" class="keep-px" @click="$emit('switchToAbout')">关于</a>
      </h2>
      <div></div>
      <ul>
        <li class="keep-px">-</li>
        <li class="keep-px">+</li>
        <li class="keep-px">x</li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script setup lang="ts">
// 是否登录
const isLogin = false;
// 创建My窗口
const createWinToMy = () => {
  if (isLogin) {
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
    // 登录注册窗口
    // window.api.createSign(options)
    // 提示登录注册窗口
    window.api.createSignTips(options)

  }

}


</script>

<style lang="less" scoped>
header.keep-px {
  width: 100%;
  height: 50px;
  // background-color: red;
  -webkit-app-region: drag;
  position: relative;

  nav {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: 50px;

    h1 {
      justify-self: start;
      // width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "YinWanZi";

      .flower-logo {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 10px 0 10px;
        vertical-align: middle;
      }

      a.keep-px {
        color: #78AE87;
        font-size: 32px;
        line-height: 50px;
        display: block;

      }
    }

    h2 {
      -webkit-app-region: no-drag;
      text-align: center;
      background-color: #FFEDEB;
      position: relative;
      z-index: 9999;

      a.keep-px {
        width: 14px;
        height: 14px;
        font-size: 14px;
        color: #AE7D78;
        padding: 0 14px;
        padding-bottom: 30px;
        position: relative;

        &::before {
          content: '';
          display: block;
          height: 2px;
          width: 42px;
          position: absolute;
          bottom: 10px;
          left: 7px;
          background-color: transparent;
        }

        &:hover::before {
          background-color: #78AE87;
        }
      }
    }

    ul {
      font-family: "YinWanZi";
      position: absolute;
      top: 0px;
      right: 10px;
      justify-self: end;
      text-align: center;

      li.keep-px {
        display: inline-block;
        padding: 0 10px;
        font-size: 30px;
        color: #FFEDEB;
        -webkit-text-stroke: 1px #666;


      }
    }
  }
}
</style>