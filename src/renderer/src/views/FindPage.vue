<template>
  <article class="container-box">
    <header>
      <h1>发现</h1>
      <nav>
        <a href="">推荐</a>
        <a href="">最新</a>
        <a href="">榜单</a>
        <a href="">歌手</a>
      </nav>
      <button>返回</button>
    </header>
    <main>
      <section>
        <h2>推荐</h2>
        <div class="images-box">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </section>
      <section>
        <h2>最新</h2>
        <div class="images-box">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </section>
      <section>
        <h2>榜单</h2>
        <div class="images-box">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </section>
      <section>
        <h2>歌手</h2>
        <div class="images-box">
          <i style="--deg:-2"></i>
          <i style="--deg:-1"></i>
          <i style="--deg:1"></i>
          <i style="--deg:2"></i>
        </div>
      </section>
    </main>
  </article>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container-box {
  width: 95vw;
  border-radius: 10px;
  margin: 0 auto;
  color: #fff;
  background-color: #dececd;

  header {
    height: 50px;
    display: flex;
    align-items: center;

    h1 {
      flex: 2;
      padding-left: 15px;
    }

    button {
      flex: 1;
    }

    nav {
      flex: 4;
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        color: #fff;
      }
    }

  }

  main {
    section {
      h2 {
        font-size: 20px;
        font-weight: normal;
        padding-bottom: 20px;
      }

      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 20px 20px;
    }

    section:nth-child(1) {


      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          width: 60px;
          height: 180px;
          border-radius: 30px;
          display: block;
          position: relative;
          transition: all 0.3s;
          overflow: hidden;
          background: url('../public/images/date.jpg') center/cover no-repeat;


          &::after {
            content: "你的名字 12345678  1234567890 12345";
            color: #fff;
            font-size: 18px;
            text-align: center;
            display: block;
            position: absolute;
            top: -100px;
            width: 80px;
            transition: all 0.3s;
          }

          &::before {
            content: "你的名字";
            color: #000;
            font-size: 18px;
            text-align: center;
            display: block;
            position: absolute;
            bottom: 0;
            width: 60px;
            height: 40px;
            line-height: 40px;
            background: #fff;
            transition: all 0.3s;

          }
        }

        i:hover {
          width: 80px;
          border-radius: 40px;

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
          border-radius: 10px;
          // overflow-x: hidden;
          position: relative;
          transition: all 0.3s;
          background: url('../public/images/my-2.jpg') center/cover no-repeat;

          &::before {
            content: "love  is painful xxxx";
            display: block;
            position: absolute;
            color: #ab9d97;
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
        border-radius: 10px;
        background: url('../public/images/flower-logo.jpg') center/cover no-repeat;
        margin-bottom: 30px;
        position: relative;

        &::after {
          content: "l";
          position: absolute;
          bottom: 0px;
          transform: translateY(calc(100% + 5px));
          font-size: 30px;
          color: skyblue;
          left: 0px;
          width: 20px;

        }

        &::before {
          content: "ove is painful";
          display: block;
          position: absolute;
          bottom: 0px;
          font-size: 25px;
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
          border-radius: 10px;
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