<template>
  <aside>
    <section class="date-box">
      <img src="../public/images/date.jpg" alt="">
      <time>夏至</time>
      <time>2023.07.18</time>
      <p>活着是为了幸福,是我们的追求,是人生的旅途</p>
    </section>
    <section class="tools-box">
      <a href="">mini模式</a>
      <a href="">主题颜色</a>
      <a href="">听歌识曲</a>
    </section>
  </aside>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

@media screen and (min-width:0px) {
  aside {
    display: none;
  }
}

@media screen and (min-width:1000px) {
  aside {
    display: block;
    width: calc(20vw - 40px);
  }
}

aside {
  .date-box {
    color: @sanhao-font-color;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: @sanhao-border-radius;
      position: absolute;
    }

    time:nth-of-type(1) {
      font-family: "YinWanZi";
      font-size: @yihao-font-size;
      writing-mode: vertical-rl;
      color: #fff;
      transform: translateY(0px);
    }

    time:nth-of-type(2) {
      transform: translateY(0px);
      font-size: @erhao-font-size;

      &::before {
        content: "";
        display: block;
        width: @sanhao-width;
        height: @sanhao-height;
        position: absolute;
        top: -10px;
        left: -20px;
        border-width: @erhao-border;
        border-style: solid;
        border-color: @yihao-border-color transparent transparent @yihao-border-color;
      }

      &::after {
        content: "";
        display: block;
        width: @sanhao-width;
        height: @sanhao-height;
        position: absolute;
        bottom: -10px;
        right: -20px;
        border-width: @erhao-border;
        border-style: solid;
        border-color: transparent @yihao-border-color @yihao-border-color transparent;
      }
    }

    p {
      font-size: @erhao-font-size;
      padding: 0 @erhao-padding;
      color: @sanhao-font-color;
      transform: translateY(0px);
    }

    @keyframes animateTranslate {
      0% {
        transform: translateY(30px);
      }

      50% {
        transform: translateY(0px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes animateOpacity {
      0% {
        color: transparent;
        transform: translateY(30px);
      }

      50% {
        color: @sanhao-font-color;
        transform: translateY(0px);
      }

      100% {
        color: @sanhao-font-color;
        transform: translateY(0px);
      }
    }

    &:hover {
      time:nth-of-type(1) {
        animation: animateTranslate 1s ease-out 0.01s 1;
      }

      time:nth-of-type(2) {
        animation: animateTranslate 1s ease-out 0.05s 1;
      }

      p {
        transition: opacity 1s ease-out;
        animation: animateOpacity 1s ease-out 0.1s 1;
      }
    }
  }

  .tools-box {
    position: relative;
    width: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: @erhao-red-bgc;
    border-radius: @yihao-border-radius;
    margin-top: @erhao-margin;

    a {
      color: @sanhao-font-color;
      font-size: @erhao-font-size;
      display: block;
      padding: @liuhao-padding 0;
    }

    &::before {
      content: "";
      width: 11px;
      height: 11px;
      position: absolute;
      bottom: 20px;
      right: -10px;
      background-color: @erhao-green-bgc;
      border-radius: @yihao-border-radius;
      box-shadow: 50px 10px 0 @erhao-green-bgc,
        25px 5px 0 @erhao-green-bgc;

    }

    &::after {
      content: "";
      width: 30px;
      height: 2px;
      position: absolute;
      bottom: 25px;
      right: -30px;
      background-color: @erhao-green-bgc;
      box-shadow: 30px 10px 0 @erhao-green-bgc;
    }
  }
}
</style>
