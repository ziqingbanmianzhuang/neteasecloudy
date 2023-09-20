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
  width: 95vw;
  border-radius: @yihao-border-radius;
  margin: 0 auto;
  color: @erhao-font-color;
  background-color: @yihao-red-bgc;

  header {
    height: @sanhao-height;
    display: flex;
    align-items: center;

    h1 {
      flex: 2;
      padding-left: @sanhao-padding;
    }

    i {
      display: block;
      text-align: right;
      padding-right: @sanhao-padding;
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
      h2 {
        font-size: @erhao-font-size;
        font-weight: normal;
        padding-bottom: @sanhao-padding;
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
          width: 60px;
          height: 180px;
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
            top: -100px;
            width: 80px;
            transition: all 0.3s;
          }

          &::before {
            content: '你的名字';
            color: @sanhao-font-color;
            font-size: @yihao-font-size;
            text-align: center;
            display: block;
            position: absolute;
            bottom: 0;
            width: 60px;
            height: 40px;
            line-height: 40px;
            background: @sihao-font-color;
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
        border-radius: @erhao-border-radius;
        background: url('../public/images/flower-logo.jpg') center/cover no-repeat;
        margin-bottom: @yihao-margin;
        position: relative;

        &::after {
          content: "l";
          position: absolute;
          bottom: 0px;
          transform: translateY(calc(100% + 5px));
          font-size: @yihao-font-size;
          color: @sihao-font-color;
          left: 0px;
          width: 20px;

        }

        &::before {
          content: var(--name);
          display: block;
          position: absolute;
          bottom: 0px;
          font-size: @yihao-font-size;
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