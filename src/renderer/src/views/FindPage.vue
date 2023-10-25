<template>
  <div class="container-box">
    <section cite="">
      <header>
        <h1>发现</h1>
      </header>
      <nav>
        <a :href="`#${value.name}`" ref="section" v-for="([key, value]) in links" :key="key">{{ value.name }}</a>
      </nav>
      <i @click="switchToHome">返回</i>
    </section>
    <main>
      <section cite="">
        <h2 id="推荐">推荐</h2>
        <div class="images-box">
          <!-- loadToast组件 -->
          <load-toast v-if="commendLoadFlag"></load-toast>
          <i v-if="!commendLoadFlag && !commendErrorFlag && relatedCommendedSong.size"
            :style="{ '--name': `'${value.name}'` }" v-for="([key, value]) in relatedCommendedSong" :key="value.name"
            @click="createSongWin">
          </i>
          <empty-placeholder
            v-if="!commendLoadFlag && !commendErrorFlag && !relatedCommendedSong.size"></empty-placeholder>
          <error-placeholder v-if="!commendLoadFlag && commendErrorFlag && !relatedCommendedSong.size"
            @retryToRequest="getRelativeLatestSongs"></error-placeholder>
        </div>
      </section>
      <section cite="">
        <h2 id="最新">最新</h2>
        <div class="images-box">
          <i v-for="n in 10" :key="n" @click="createSongWin"></i>
        </div>
      </section>
      <section cite="">
        <h2 id="榜单">榜单</h2>
        <div class="images-box">
          <load-toast v-if="topLoadFlag"></load-toast>
          <i v-if="!topLoadFlag && !topErrorFlag && topSong.size" :style="{ '--name': `'${value.name}'` }"
            v-for="([key, value]) in topSong" :key="value.id">
          </i>
          <empty-placeholder v-if="!topLoadFlag && !topErrorFlag && !topSong.size"></empty-placeholder>
          <error-placeholder v-if="!topLoadFlag && topErrorFlag && !topSong.size"
            @retryToRequest="getTopSongs"></error-placeholder>
        </div>
      </section>
      <section id="歌手" cite="">
        <h2>歌手</h2>
        <div class="images-box">
          <load-toast v-if="hotLoadFlag"></load-toast>
          <i v-if="!hotLoadFlag && !hotErrorFlag && hotSings.size" :style="{ '--deg': value['--deg'] }"
            v-for="([key, value]) in tags" :key="value['--deg']" @click="createSongWin"></i>
          <empty-placeholder v-if="!hotLoadFlag && !hotErrorFlag && !hotSings"></empty-placeholder>
          <error-placeholder v-if="!hotLoadFlag && hotErrorFlag && !hotSings.size"
            @retryToRequest="getSings"></error-placeholder>
        </div>
      </section>
    </main>
  </div>

  <!-- messageToast组件 -->
  <message-toast class="message-toast"></message-toast>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'
import router from '@renderer/router';
import instance from '../api/modules/find_module/index'
import { useMessageToastStore } from '../store/message_toast_store/index';
import { nanoid } from 'nanoid'

//useMessageToastStore
const messageToastStore = useMessageToastStore();


// 在组件挂载阶段获取相关的推荐歌单
//存储相关推荐歌单的数据
let relatedCommendedSong = reactive(new Map([]));
//推荐是否加载
let commendLoadFlag = ref(true);
//推荐是否出错
let commendErrorFlag = ref(false);
//获取推荐歌单
const getRelativeLatestSongs = async () => {
  try {

    const res = await instance.getRelativeRecommendedSongs({ params: { id: 1 } });

    commendLoadFlag.value = false;

    res.data.playlists.forEach(item => {
      relatedCommendedSong.set(item.id, item);
    });
  } catch (err) {
    console.log('1111111111111finderror', err);
    commendErrorFlag.value = true;
    messageToastStore.addToToastList({
      id: nanoid(), isShowMessageToast: true, messageToastTitle: '努力多少次看来都是错的QAQ', messageToastContent: `${err}`
    })
  }
}

//存储榜单歌曲
let topSong = reactive(new Map([]));
//榜单是否加载
let topLoadFlag = ref(true);
//榜单是否出错
let topErrorFlag = ref(false);
// 获取歌单分类
let songType
const getSongTypes = async () => {

  try {
    let res = await instance.getSongsType();

    songType = res.data.sub[1].name;
  } catch (err) {
    messageToastStore.addToToastList({
      id: nanoid(), isShowMessageToast: true, messageToastTitle: '努力多少次看来都是错的QAQ', messageToastContent: `${err}`
    })
  }
}
// 获取最新的歌单
const getLastedSongs = async () => {
  try {
    await instance.getRelativeLatestSongs({ params: { order: 'new', cat: songType, limit: 50, offset: 1 } })
  } catch (err) {
    messageToastStore.addToToastList({
      id: nanoid(), isShowMessageToast: true, messageToastTitle: '努力多少次看来都是错的QAQ', messageToastContent: `${err}`
    })
  }
}


//获取榜单歌曲
const getTopSongs = async () => {
  try {
    const res = await instance.getTopSongs({ params: { id: 2809577409 } })

    topLoadFlag.value = false

    res.data.playlist.tracks.slice(0, 10).forEach((item) => {
      topSong.set(item.id, item);
    })
  } catch (err) {
    topErrorFlag.value = true;
    messageToastStore.addToToastList({
      id: nanoid(), isShowMessageToast: true, messageToastTitle: '努力多少次看来都是错的QAQ', messageToastContent: `${err}`
    })
  }
}

//存储热门歌手
let hotSings = reactive(new Map([]));
//热门歌手是否加载
let hotLoadFlag = ref(true);
//热门歌手是否出错
let hotErrorFlag = ref(false);

//获取歌手列表
const getSings = async () => {
  try {
    const res = await instance.getSingList({ params: { limit: 4, offset: 1 } })
    hotLoadFlag.value = false;
    res.data.artists.forEach(item => {
      hotSings.set(item.id, item)
    });
  } catch (err) {
    hotErrorFlag.value = true;
    messageToastStore.addToToastList({
      id: nanoid(), isShowMessageToast: true, messageToastTitle: '努力多少次看来都是错的QAQ', messageToastContent: `${err}`
    })
  }
}



onBeforeMount(() => {

  //获取推荐歌单
  getRelativeLatestSongs();

  // 获取歌单分类
  getSongTypes();

  // 获取最新的歌单
  getLastedSongs();


  //获取榜单歌曲
  getTopSongs();

  //获取歌手列表
  getSings();
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
};

//创建播放歌曲的窗口
// 创建唱歌播放窗口
const createSongWin = () => {
  const options = {
    w: 400,
    h: 800
  };

  window.api.createSongWin(options)
};

// 保存导航链接的map对象
const links = reactive(new Map([
  [
    'nav1',
    { name: '推荐' }
  ],
  [
    'nav2',
    { name: '最新' }
  ],
  [
    'nav3',
    { name: '榜单' }
  ],
  [
    'nav4',
    { name: '歌手' }
  ],

]))

// 保存四张旋转图像的角度值的Mpa对象
const tags = reactive([
  [
    'song1',
    { '--deg': -2 }
  ],
  [
    'song2',
    { '--deg': -1 }
  ],
  [
    'song3',
    { '--deg': 1 }
  ],
  [
    'songg4',
    { '--deg': 2 }
  ],
])
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";

.message-toast {
  position: fixed;
  inset-inline-end: 10px;
  inset-block-start: 10px;
  z-index: 100;
}

.container-box {
  overflow: hidden;

  margin-inline: auto;
  margin-block: 0;

  border-radius: @yihao-border-radius;
  inline-size: 95vi;

  color: @erhao-font-color;
  background-color: @yihao-red-bgc;

  >section {
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
      justify-content: space-around;

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


          &::after {
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

          &::before {
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

          &::before {
            inset-block-end: -60px;

            inline-size: 80px;
          }

          &:after {
            inset-block-start: 80px;
          }
        }



      }
    }

    section:nth-child(2) {
      .images-box {
        display: flex;
        justify-content: center;

        i {
          display: block;

          position: relative;

          border-radius: @erhao-border-radius;
          inline-size: 120px;
          block-size: 140px;

          background: url("../public/images/my-2.jpg") center/cover no-repeat;

          transition: all 0.3s;


          &::before {
            content: "love  is painful xxxx";

            display: block;

            position: absolute;
            inset-block-end: 10px;

            inline-size: 100%;

            text-align: center;

            color: @sihao-font-color;

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

        position: relative;

        margin-block-end: @yihao-margin;
        border-radius: @erhao-border-radius;
        inline-size: 120px;
        block-size: 120px;

        background: url("../public/images/flower-logo.jpg") center/cover no-repeat;



        &::before {
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
      // inline-size: 100%;

      .images-box {
        display: flex;
        justify-content: center;

        i {
          display: block;

          border-radius: @erhao-border-radius;
          inline-size: 150px;
          block-size: 200px;

          background: url("../public/images/home-2.jpg") center/cover no-repeat;

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