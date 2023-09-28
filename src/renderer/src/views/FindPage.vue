<template>
  <article class="container-box">
    <header>
      <h1>发现</h1>
      <nav>
        <a :href="`#${value.name}`" v-for="([key, value]) in links" :key="key">{{ value.name }}</a>
      </nav>
      <i @click="switchToHome">返回</i>
    </header>
    <main>
      <section>
        <h2 id="推荐">推荐</h2>
        <div class="images-box">
          <i :style="{ '--name': `'${value.name}'` }" v-for="([key, value]) in relatedCommendedSong" :key="value.name"
            @click="createSongWin">
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
          <i :style="{ '--name': `'${value.name}'` }" v-for="([key, value]) in topSong" :key="value.id">

          </i>
        </div>
      </section>
      <section id="歌手">
        <h2>歌手</h2>
        <div class="images-box">
          <i :style="{ '--deg': value['--deg'] }" v-for="([key, value]) in tags" :key="value['--deg']"
            @click="createSongWin"></i>
        </div>
      </section>
    </main>
  </article>
</template>

<script setup lang="ts">
import router from '@renderer/router';
import { reactive, onBeforeMount } from 'vue'
import instance from '../api/instance'
import Apis from '../api/apis'
// 在组件挂载阶段获取相关的推荐歌单
//存储相关推荐歌单的数据
let relatedCommendedSong = reactive(new Map([]))
//存储榜单歌曲
let topSong = reactive(new Map([]))
//存储热门歌手
let hotSings = reactive(new Map([]))
onBeforeMount(async () => {
  //获取推荐歌单
  instance.getRelativeRecommendedSongs({ params: { id: 1 } }).then(res => {
    // relatedCommendedSong = res.data.playlists
    res.data.playlists.forEach(item => {
      relatedCommendedSong.set(item.id, item)
    });
    console.log(111111111, relatedCommendedSong);
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

    // topSong.value = res.data.playlist.tracks.slice(0, 10)
    res.data.playlist.tracks.slice(0, 10).forEach((item) => {
      topSong.set(item.id, item);
    })
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
    // hotSings = res.data.artists
    res.data.artists.forEach(item => {
      hotSings.set(item.id, item)
    });
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
  // UI层面的状态过度
  if (!document.startViewTransition) {
    router.push('/')

  }
  document.startViewTransition(() => {
    console.log('trandiotion');

    router.push('/')

  })
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

// 保存导航链接的map对象
const links = reactive(new Map([
  ['nav1', { name: '推荐' }],
  ['nav2', { name: '最新' }],
  ['nav3', { name: '榜单' }],
  ['nav4', { name: '歌手' }],

]))
// 保存四张旋转图像的角度值的Mpa对象
const tags = reactive([
  ['song1', { '--deg': -2 }],
  ['song2', { '--deg': -1 }],
  ['song3', { '--deg': 1 }],
  ['songg4', { '--deg': 2 }],
])
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.container-box {
  margin-inline: auto;
  margin-block: 0;

  border-radius: @yihao-border-radius;
  inline-size: 95vi;

  color: @erhao-font-color;
  background-color: @yihao-red-bgc;

  header {
    display: flex;
    align-items: center;

    block-size: @sanhao-height;


    h1 {
      flex: 2;
      padding-inline-start: @sanhao-padding;
    }

    i {
      display: block;
      flex: 1;

      text-align: end;

      padding-inline-end: @sanhao-padding;

      cursor: pointer;
    }

    nav {
      display: flex;
      flex: 4;
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
        padding-block-end: @sanhao-padding;

        font-size: @erhao-font-size;
        font-weight: normal;

      }

      display: flex;
      flex-direction: column;
      justify-content: space-between;

    }

    section:nth-child(1) {


      .images-box {
        display: flex;
        justify-content: space-around;

        i {
          display: block;
          overflow: hidden;

          position: relative;

          border-radius: @erhao-border-radius;
          inline-size: 60px;
          block-size: 180px;

          background: url("../public/images/date.jpg") center/cover no-repeat;

          transition: all 0.3s;


          ::after {
            content: var(--name);

            display: block;

            position: absolute;
            // top: -100px;
            inset-block-start: -100px;

            inline-size: 80px;

            font-size: @yihao-font-size;
            text-align: center;


            color: @sanhao-font-color;

            transition: all 0.3s;
          }

          ::before {
            content: '你的名字';

            display: block;

            position: absolute;
            inset-block-end: 0px;

            inline-size: 60px;
            block-size: 40px;

            font-size: @yihao-font-size;
            line-height: 40px;
            text-align: center;

            color: @sanhao-font-color;

            background: @sihao-font-color;

            transition: all 0.3s;

          }
        }

        i:hover {
          border-radius: @erhao-border-radius;
          inline-size: 80px;

          ::before {
            inset-block-end: -60px;

            inline-size: 80px;
          }

          :after {
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

          position: relative;

          border-radius: @erhao-border-radius;
          inline-size: 120px;
          block-size: 140px;

          background: url("../public/images/my-2.jpg") center/cover no-repeat;

          transition: all 0.3s;


          ::before {
            content: "love  is painful xxxx";

            display: block;

            position: absolute;
            inset-block-end: 10px;

            inline-size: 100%;

            text-align: center;

            color: @sihao-font-color;

            transition: all 0.3s;

          }

          :hover {
            block-size: 120px;

            ::before {
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

        position: relative;

        margin-block-end: @yihao-margin;
        border-radius: @erhao-border-radius;
        inline-size: 120px;
        block-size: 120px;

        background: url("../public/images/flower-logo.jpg") center/cover no-repeat;



        ::before {
          content: var(--name);

          display: block;

          position: absolute;
          inset-block-end: 0px;
          inset-inline-start: 10px;

          inline-size: 100%;


          font-size: @yihao-font-size;
          text-align: center;

          transform: translateY(calc(100% + 5px));


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

          border-radius: @erhao-border-radius;
          inline-size: 150px;
          block-size: 200px;

          background: url("../public/images/home-2.jpg") center/cover no-repeat;

          transform: rotate(calc(var(--deg) * 10deg));
          transform-origin: 50%;
        }

        ::before {
          content: "";

          display: block;
        }
      }
    }




  }
}
</style>