<template>
  <section class="contain">
    <h2>音丸子</h2>
    <p>你好,欢迎来到音丸子,丸子终于被发现啦,我这里收藏了好多密码宝藏呢!和我做好朋友就有几乎和我一起遨游音乐世界噢~~~~~~而且丸子还有好多话想和你说,快点加入进来,接下来,带上耳机,丸子和你一起听歌啦♥♥</p>
    <section class="login-cancel-button">
      <button>加入丸子</button>
      <button>俺先看看</button>
    </section>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@media screen and (min-width:0px) {
  .contain {
    width: calc(100vw - 100px);
  }
}

@media screen and (min-width:1000px) {
  .contain {
    width: calc(80vw - 100px);
  }
}

.contain {
  background-color: rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;

  h2 {
    color: #78AE87;
    font-size: 50px;
    font-family: "YinWanZi";
    text-align: center;
    margin-top: 30px;
  }

  p {
    color: #fff;
    font-size: 20px;
    font-family: "YinWanZi";
    text-indent: 40px;
    margin-top: 50px;
  }

  .login-cancel-button {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    button {
      font-size: 18px;
      width: 100px;
      height: 50px;
      border-radius: 10px;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
      margin: 0 30px;
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
}</style>