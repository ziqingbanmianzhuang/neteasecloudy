<template>
  <article class="container-box">
    <header>
      <h1>发现</h1>
      <nav>
        <a href="#" v-for="(link, index) in links" :key="index">{{ link.name }}</a>
      </nav>
      <i @click="switchToHome">返回</i>
    </header>
    <main>
      <section>
        <h2>推荐</h2>
        <div class="images-box">
          <i v-for="n in 8" :key="n"></i>
          <i></i>
        </div>
      </section>
      <section>
        <h2>最新</h2>
        <div class="images-box">
          <i v-for="n in 4" :key="n"></i>
        </div>
      </section>
      <section>
        <h2>榜单</h2>
        <div class="images-box">
          <i v-for="n in 10" :key="n"></i>
        </div>
      </section>
      <section>
        <h2>歌手</h2>
        <div class="images-box">
          <i v-for="tag in tags" :key="tag['--deg']" :style="{ '--deg': tag['--deg'] }"></i>
        </div>
      </section>
    </main>
  </article>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { ref } from 'vue'
// 跳转home页面
const switchToHome = () => {
  router.push('/')
}
// 保存导航链接的对象数组
const links = ref([
  { name: '推荐' },
  { name: '最新' },
  { name: '榜单' },
  { name: '歌手' },
])
// 保存四张旋转图像的角度值的对象数组
const tags = ref([
  { '--deg': -2 },
  { '--deg': -1 },
  { '--deg': 1 },
  { '--deg': 2 },
])
</script>

<style lang="less" scoped>
@import "../assets/css/variable/index.less";

.container-box {
  width: 95vw;
  border-radius: @yihao-border-radius;
  margin: 0 auto;
  color: @sanhao-font-color;
  background-color: @jiuhao-red-bgc;

  header {
    height: @yihao-height;
    display: flex;
    align-items: center;

    h1 {
      flex: 2;
      padding-left: @sanhao-padding;
    }

    i {
      display: block;
      text-align: right;
      padding-right: @wuhao-padding;
      flex: 1;
      cursor: pointer;
      ;
    }

    nav {
      flex: 4;
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        color: @sanhao-font-color;
      }
    }

  }

  main {
    section {
      h2 {
        font-size: @sanhao-font-size;
        font-weight: normal;
        padding-bottom: @wuhao-padding;
      }

      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: @wuhao-padding;
    }

    section:nth-child(1) {


      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          width: 60px;
          height: 180px;
          border-radius: @erhao-border-radius;
          display: block;
          position: relative;
          transition: all 0.3s;
          overflow: hidden;
          background: url('../public/images/date.jpg') center/cover no-repeat;


          &::after {
            content: "你的名字 12345678  1234567890 12345";
            color: @sanhao-font-color;
            font-size: @sanhao-font-size;
            text-align: center;
            display: block;
            position: absolute;
            top: -100px;
            width: 80px;
            transition: all 0.3s;
          }

          &::before {
            content: "你的名字";
            color: @bahao-font-color;
            font-size: @sanhao-font-size;
            text-align: center;
            display: block;
            position: absolute;
            bottom: 0;
            width: 60px;
            height: 40px;
            line-height: 40px;
            background: @qihao-white-bgc;
            transition: all 0.3s;

          }
        }

        i:hover {
          width: 80px;
          border-radius: @erhao-border-radius;

          &::before {
            width: 80px;
            bottom: -60px;
          }

          &:after {
            top: 80px;
          }
        }



      }
    }

    section:nth-child(2) {
      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          display: block;
          width: 120px;
          height: 140px;
          border-radius: @yihao-border-radius;
          // overflow-x: hidden;
          position: relative;
          transition: all 0.3s;
          background: url('../public/images/my-2.jpg') center/cover no-repeat;

          &::before {
            content: "love  is painful xxxx";
            display: block;
            position: absolute;
            color: @qihao-font-color;
            width: 100%;
            text-align: center;
            bottom: 10px;
            transition: all 0.3s;

          }

          &:hover {
            height: 120px;

            &::before {
              transform: translateY(calc(100% + 10px));
            }
          }
        }
      }
    }

    section:nth-child(3) {
      .images-box {
        display: flex;
        justify-content: space-around;
        align-items: space-around;
        flex-wrap: wrap;
      }

      i {
        display: block;
        width: 120px;
        height: 120px;
        border-radius: @yihao-border-radius;
        background: url('../public/images/flower-logo.jpg') center/cover no-repeat;
        margin-bottom: @sihao-margin;
        position: relative;

        &::after {
          content: "l";
          position: absolute;
          bottom: 0px;
          transform: translateY(calc(100% + 5px));
          font-size: @yihao-font-size;
          color: skyblue;
          left: 0px;
          width: 20px;

        }

        &::before {
          content: "ove is painful";
          display: block;
          position: absolute;
          bottom: 0px;
          font-size: @sanhao-font-size;
          width: 100%;
          left: 10px;
          transform: translateY(calc(100% + 5px));
          text-align: center;
        }
      }

    }

    section:nth-child(4) {
      width: 100%;

      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          display: block;
          width: 150px;
          height: 200px;
          border-radius: @yihao-border-radius;
          background: url(../public/images/home-2.jpg) center/cover no-repeat;
          transform: rotate(calc(var(--deg) * 10deg));
          transform-origin: 50%;
        }

        &::before {
          content: "";
          display: block;
        }
      }
    }




  }
}
</style>