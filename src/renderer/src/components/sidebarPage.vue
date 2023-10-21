<template>
  <aside>
    <section class="date-box" cite="">
      <img src="../public/images/date.jpg" alt="">
      <time>夏至</time>
      <time>2023.07.18</time>
      <p>活着是为了幸福,是我们的追求,是人生的旅途</p>
    </section>
    <section class="tools-box">
      <a href="#" ref="nofollow">mini模式</a>
      <a href="#" ref="nofollow">主题颜色</a>
      <a href="#" ref="nofollow">听歌识曲</a>
    </section>
  </aside>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

@media screen and (min-width:0px) {
  aside {
    display: none;
  }
}

@media screen and (min-width:1000px) {
  aside {
    display: block;
    width: calc(20vi - 40px);
  }
}

// @media screen and (min-height:0px) {
//   aside {
//     display: none;
//   }
// }

// @media screen and (min-height:500px) {
//   aside {
//     display: block;
//     inline-size: calc(20vi - 40px);
//   }
// }

aside {
  margin-inline-end: 10px;

  .date-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    inline-size: 100%;
    aspect-ratio: 1/1;

    position: relative;

    color: @sanhao-font-color;


    img {
      position: absolute;

      border-radius: @erhao-border-radius;
      inline-size: 100%;
      aspect-ratio: 1/1;
      object-view-box: inset(0% 0% 10% 0%);
      object-fit: cover;



    }

    time:nth-of-type(1) {
      writing-mode: vertical-rl;

      font-family: "YinWanZi", 'Courier New', Courier, monospace, sans-serif;
      font-size: @sanhao-font-size;

      color: @sanhao-font-color;

      transform: translateY(0);
    }

    time:nth-of-type(2) {
      font-size: @erhao-font-size;

      transform: translateY(0);

      ::before {
        content: "";
        display: block;

        position: absolute;
        inset-block-start: -10px;
        inset-inline-start: -20px;

        border-width: @erhao-border;
        border-style: solid;
        border-block-start-color: @yihao-border-color;
        border-inline-end-color: transparent;
        border-block-end-color: transparent;
        border-inline-start-color: @yihao-border-color;
        inline-size: @erhao-width;
        block-size: @yihao-height;


      }

      ::after {
        content: "";
        display: block;

        position: absolute;
        inset-block-end: -10px;
        inset-inline-end: -20px;

        border-width: @erhao-border;
        border-style: solid;
        border-block-start-color: transparent;
        border-inline-end-color: @yihao-border-color ;
        border-block-end-color: @yihao-border-color;
        border-inline-start-color: transparent;
        inline-size: @erhao-width;
        block-size: @yihao-height;


      }
    }

    p {
      padding-inline: @sanhao-padding;
      padding-block: 0;

      font-size: @yihao-font-size;

      color: @sanhao-font-color;

      transform: translateY(0);
    }

    @keyframes animateTranslate {
      0% {
        transform: translateY(30px);
      }

      50% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(0);
      }
    }

    @keyframes animateOpacity {
      0% {
        color: transparent;
        transform: translateY(30px);
      }

      50% {
        color: @sanhao-font-color;
        transform: translateY(0);
      }

      100% {
        color: @sanhao-font-color;
        transform: translateY(0);
      }
    }

    :hover {
      time:nth-of-type(1) {
        animation: animateTranslate 1s ease-out .01s 1;
      }

      time:nth-of-type(2) {
        animation: animateTranslate 1s ease-out .05s 1;
      }

      p {
        transition: opacity 1s ease-out;
        animation: animateOpacity 1s ease-out .1s 1;
      }
    }
  }

  .tools-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    position: relative;

    margin-block-start: @yihao-margin;
    border-radius: @erhao-border-radius;
    inline-size: calc(100% - 70px);

    background-color: @erhao-red-bgc;

    a {
      display: list-item;

      padding-inline: 0;
      padding-block: @sanhao-padding;

      font-size: @yihao-font-size;

      color: @sanhao-font-color;

    }

    a::marker {
      content: "♥ ";
      color: @jiuhao-font-color;
    }

    ::before {
      content: "";

      position: absolute;
      inset-block-end: 20px;
      inset-inline-end: -10px;

      border-radius: @erhao-border-radius;
      inline-size: 11px;
      block-size: 11px;

      background-color: @wuhao-green-bgc;

      box-shadow: 50px 10px 0@wuhao-green-bgc,
        25px 5px 0 @wuhao-green-bgc;

    }

    ::after {
      content: "";

      position: absolute;
      inset-block-end: 25px;
      inset-inline-end: -30px;

      inline-size: 30px;
      block-size: 2px;

      background-color: @wuhao-green-bgc;

      box-shadow: 30px 10px 0 @wuhao-green-bgc;
    }
  }
}
</style>
