<template>
  <article class="container-box">
    <header>
      <h1>发现</h1>
      <nav>
        <a :href="`#${link.name}`" v-for="(link, index) in links" :key="index">{{ link.name }}</a>
      </nav>
      <i @click="switchToHome">返回</i>
    </header>
    <main>
      <section>
        <h2 id="推荐">推荐</h2>
        <div class="images-box">
          <i v-for="song in relatedCommendedSong" :key="song.name" @click="createSongWin" :style="{
            '--name': `'${song.name}'`
          }">
            <!-- {{ song.name }} -->
          </i>
        </div>
      </section>
      <section>
        <h2 id="最新">最新</h2>
        <div class="images-box">
          <i v-for="n in 10" :key="n" @click="createSongWin"></i>
        </div>
      </section>
      <section>
        <h2 id="榜单">榜单</h2>
        <div class="images-box">
          <i v-for="top in topSong" :key="top.id" :style="{
            '--name': `'${top.name}'`
          }"></i>
        </div>
      </section>
      <section id="歌手">
        <h2>歌手</h2>
        <div class="images-box">
          <i v-for="tag in tags" :key="tag['--deg']" :style="{ '--deg': tag['--deg'] }" @click="createSongWin"></i>
        </div>
      </section>
    </main>
  </article>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { ref, onBeforeMount } from 'vue'
import instance from '../api/instance'
import Apis from '../api/Apis'
import { log } from 'console';
// 在组件挂载阶段获取相关的推荐歌单
//存储相关推荐歌单的数据
let relatedCommendedSong = ref([])
//存储榜单歌曲
let topSong = ref([])
//存储热门歌手
let hotSings = ref([])
onBeforeMount(async () => {
  //获取推荐歌单
  instance.getRelativeRecommendedSongs({ params: { id: 1 } }).then(res => {
    relatedCommendedSong.value = res.data.playlists
    console.log(111111111, relatedCommendedSong.value);
  }).catch(err => {
    return Apis.reqMiddleware[0].onRejected(err)
  }).then(res => {
    console.log(res);

  }, err => {
    console.log(err);

  })
  // 获取歌单分类
  let songType = ''
  await instance.getSongsType().then(res => {
    console.log('type', res.data.sub[9].name);
    songType = res.data.sub[1].name
  }).catch(err => {
    return Apis.reqMiddleware[0].onRejected(err)
  }).then(res => {
    console.log(res);

  }, err => {
    console.log(err);

  })
  // 获取最新的歌单
  instance.getRelativeLatestSongs({ params: { order: 'new', cat: songType, limit: 50, offset: 1 } }).then(res => {
    console.log('last', res);

  }).catch(err => {
    return Apis.reqMiddleware[0].onRejected(err)
  }).then(res => {
    console.log(res);

  }, err => {
    console.log(err);

  })
  //获取榜单歌曲
  instance.getTopSongs({ params: { id: 2809577409 } }).then(res => {

    topSong.value = res.data.playlist.tracks.slice(0, 10)
    console.log('top', topSong);
  }).catch(err => {
    return Apis.reqMiddleware[0].onRejected(err)
  }).then(res => {
    console.log(res);

  }, err => {
    console.log(err);

  })
  //获取歌手列表
  instance.getSingList({ params: { limit: 4, offset: 1 } }).then(res => {
    hotSings = res.data.artists
    console.log('sing', hotSings);

  }).catch(err => {
    return Apis.reqMiddleware[0].onRejected(err)
  }).then(res => {
    console.log(res);

  }, err => {
    console.log(err);

  })

})


// 跳转home页面
const switchToHome = () => {
  router.push('/')
}
//创建播放歌曲的窗口
// 创建唱歌播放窗口
const createSongWin = () => {
  const options = {
    w: 400,
    h: 800
  }
  window.api.createSongWin(options)
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
  inline-size: 95vi;
  block-size: 100vb;
  border-radius: @yihao-border-radius;
  // margin: 0 auto;
  margin-block: 0;
  margin-inline: auto;
  color: @erhao-font-color;
  background-color: @yihao-red-bgc;

  header {
    block-size: @sanhao-height;
    display: flex;
    align-items: center;

    h1 {
      flex: 2;
      // padding-left: @sanhao-padding;
      padding-inline-start: @sanhao-padding;
    }

    i {
      display: block;
      text-align: end;
      // padding-right: @sanhao-padding;
      padding-inline-end: @sanhao-padding;

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
        color: @erhao-font-color;
      }
    }

  }

  main {
    section {
      block-size: @qihao-height;

      h2 {
        font-size: @erhao-font-size;
        font-weight: normal;
        // padding-bottom: @sanhao-padding;
        padding-block-end: @sanhao-padding;

      }

      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: @sanhao-padding;
    }

    section:nth-child(1) {


      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          inline-size: 60px;
          block-size: 180px;
          border-radius: @erhao-border-radius;
          display: block;
          position: relative;
          transition: all 0.3s;
          overflow: hidden;
          background: url('../public/images/date.jpg') center/cover no-repeat;


          &::after {
            content: var(--name);
            color: @sanhao-font-color;
            font-size: @yihao-font-size;
            text-align: center;
            display: block;
            position: absolute;
            // top: -100px;
            inset-block-start: -100px;
            inline-size: 80px;
            transition: all 0.3s;
          }

          &::before {
            content: '你的名字';
            color: @sanhao-font-color;
            font-size: @yihao-font-size;
            text-align: center;
            display: block;
            position: absolute;
            // bottom: 0;
            inset-block-end: 0px;
            inline-size: 60px;
            block-size: 40px;
            line-height: 40px;
            background: @sihao-font-color;
            transition: all 0.3s;

          }
        }

        i:hover {
          inline-size: 80px;
          border-radius: @erhao-border-radius;

          &::before {
            inline-size: 80px;
            // bottom: -60px;
            inset-block-end: -60px;
          }

          &:after {
            // top: 80px;
            inset-block-start: 80px;
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
          inline-size: 120px;
          block-size: 140px;
          border-radius: @erhao-border-radius;
          // overflow-x: hidden;
          position: relative;
          transition: all 0.3s;
          background: url('../public/images/my-2.jpg') center/cover no-repeat;

          &::before {
            content: "love  is painful xxxx";
            display: block;
            position: absolute;
            color: @sihao-font-color;
            inline-size: 100%;
            text-align: center;
            // bottom: 10px;
            inset-block-end: 10px;
            transition: all 0.3s;

          }

          &:hover {
            block-size: 120px;

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
        inline-size: 120px;
        block-size: 120px;
        border-radius: @erhao-border-radius;
        background: url('../public/images/flower-logo.jpg') center/cover no-repeat;
        // margin-bottom: @yihao-margin;
        margin-block-end: @yihao-margin;
        position: relative;

        &::after {
          content: "l";
          position: absolute;
          // bottom: 0px;
          inset-block-end: 0px;
          transform: translateY(calc(100% + 5px));
          font-size: @yihao-font-size;
          color: @sihao-font-color;
          // left: 0px;
          inset-inline-start: 0px;
          inline-size: 20px;

        }

        &::before {
          content: var(--name);
          display: block;
          position: absolute;
          // bottom: 0px;
          inset-block-end: 0px;
          font-size: @yihao-font-size;
          inline-size: 100%;
          // left: 10px;
          inset-inline-start: 10px;
          transform: translateY(calc(100% + 5px));
          text-align: center;
        }
      }

    }

    section:nth-child(4) {
      inline-size: 100%;

      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          display: block;
          inline-size: 150px;
          block-size: 200px;
          border-radius: @erhao-border-radius;
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