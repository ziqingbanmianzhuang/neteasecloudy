<template>
  <section class="container-box">
    <section class="bgc-box"></section>
    <section class="info-box">
      <aside>
        <img src="../public/images/my-2.jpg" alt="" class="avatar-box">
        <h1>半面妆</h1>
        <nav>
          <a href="">16关注</a>
          <a href="">5粉丝</a>
          <a href="">Lv7</a>
        </nav>
        <p>这归途尚远,且迷人且倔强</p>
      </aside>
    </section>
    <section class="tool-box">
      <i class="iconfont">&#xe61a;</i>
      <i class="iconfont">&#xe619;</i>
    </section>
    <section class="mys-box">
      <ul>
        <li>我的历史</li>
        <li>我的收藏</li>
        <li>我的关注</li>
        <li>我的歌单</li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">

</script>
<style lang="less" scoped>
.container-box {
  overflow: hidden;
  width: 100vw;
  font-family: "YinWanZi";



  .bgc-box {
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    height: 200px;
    background: #f8efe0 url('../public/images/my-1.jpg') center/100vw 200px no-repeat;
  }

  .info-box {
    height: 200px;
    width: 80%;
    margin: 180px auto 0px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.3),
      -3px -3px 3px 0 rgba(0, 0, 0, 0.1);

    aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: #78ae87;

      h1 {
        font-size: 60px;
      }

      p {
        font-size: 45px;
      }

      nav a {
        color: #78ae87;
        font-size: 38px;
      }

      .avatar-box {
        width: 100px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: #f8efe0;
      }
    }


  }

  .tool-box {
    width: 80vw;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    .iconfont {
      font-family: 'iconfont';
      color: #ffedee;
      font-size: 120px;
    }
  }

  .mys-box {
    height: 340px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: #b08079;

      li {
        height: 50px;
        line-height: 50px;
        width: 80%;
        padding: 0 50px;
        margin: 10px 0;
        text-align: center;
        border-radius: 10px;
        box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.1),
          -1px -1px 3px 0 rgba(0, 0, 0, 0.1);

      }
    }
  }
}
</style>