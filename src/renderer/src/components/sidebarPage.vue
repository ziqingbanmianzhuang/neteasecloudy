<template>
  <aside>
    <section class="date-box">
      <img src="../public/images/date.jpg" alt="">
        <time >夏至</time>
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
@media screen and (min-width:0px){
  aside {
    display: none;
}
}
@media screen and (min-width:1000px){
  aside {
    display: block;
    width: calc(20vw - 40px);
}
}
  aside {
    .date-box {
      color:#fff;
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
        border-radius: 20px;
        position: absolute;
      }
      time:nth-of-type(1){
        font-family: "YinWanZi";
        font-size: 30px;
        writing-mode: vertical-rl;
        color: #fff;
        transform:translateY(0px);
      }
      time:nth-of-type(2){
        transform:translateY(0px);
        font-size: 14px;
        &::before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          position:absolute;
          top: -10px;
          left: -20px;
          border-width: 2px;
          border-style: solid;
          border-color: #78AE87 transparent transparent #78AE87;
        }
        &::after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          position:absolute;
          bottom: -10px;
         right: -20px;
          border-width: 2px;
          border-style: solid;
          border-color:  transparent #78AE87 #78AE87 transparent;
        }
      }
      p {
        font-size: 14px;
        padding: 0 10px;
        color: #fff;
          transform: translateY(0px);
      }
      @keyframes animateTranslate {
        0% {
          transform:translateY(30px);
        }
        50% {
          transform:translateY(0px);
        }
        100% {
          transform:translateY(0px);
        }
      }
      @keyframes animateOpacity {
        0% {
          color: transparent;
          transform: translateY(30px);
        }
        50% {
          color: #fff;
          transform: translateY(0px);
        }
        100% {
          color: #fff;
          transform: translateY(0px);
        }
      }
      &:hover {
        time:nth-of-type(1){
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
      width:calc(100% - 70px);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: #F9B3AB;
      border-radius: 5px;
      margin-top: 10px;
      a {
      color:#fff;
      font-size: 10px;
      display: block;
      padding:5px 0;
      }
      &::before {
        content: "";
        width: 11px;
        height: 11px;
        position: absolute;
        bottom: 20px;
        right: -10px;
        background-color: #78AE87;
        border-radius: 10px;
        box-shadow: 50px 10px 0 #78AE87,
        25px 5px 0 #78AE87;

      }
      &::after {
        content: "";
        width: 30px;
        height: 2px;
        position: absolute;
        bottom: 25px;
        right: -30px;
        background-color: #78AE87;
        box-shadow: 30px 10px 0 #78AE87;
      }
    }
  }
</style>
