<template>
  <header>
    <!-- <header> 元素应该被用作介绍性内容的容器。元素通常包含：一个或多个标题元素 (<h1> - <h6>)logo 或 icon作者信息 -->
  <nav>
    <!-- 元定义导航链接集合。 -->
    <h1>
    <img class="flower-logo" src="../public/images/flower-logo.jpg" alt="">
      <a href="">音丸子</a>
    </h1>
    <h2>
      <a href="">我的</a>
      <a href="">发现</a>
      <a href="">设置</a>
      <a href="">关于</a>
    </h2>
    <div></div>
    <ul>
      <li>-</li>
      <li>+</li>
      <li>x</li>
    </ul>
    
  </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
header {
    width: 100%;
    height: 50px;
    // background-color: red;
    nav {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
      grid-template-rows:50px;
      
h1 {
 justify-self: start;
  // width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  .flower-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 10px 0 10px;
  vertical-align: middle;
}
  a{
  color:#78AE87;
  font-size: 32px;
  line-height: 50px;
  display: block;
  
  }
  }
h2 {
  text-align: center;
  background-color: #FFEDEB;
  a {
    width: 14px;
  height: 14px;
  font-size: 14px;
  color:#AE7D78;
  padding: 0 14px;
  padding-bottom: 30px;
  position: relative;
  z-index: 9999;
  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 42px;
    position: absolute;
    bottom: 10px;
    left: 7px;
  background-color:transparent;
  }
    &:hover::before {
      background-color: #78AE87;
    }
    }
  }
  ul {
    position: absolute;
    z-index: -1;
    top: 0px;
    right: 10px;
 justify-self: end;
    text-align: center;
    li {
      display: inline-block;
      padding: 0 10px;
      font-size: 30px;
      color: #FFEDEB;
      -webkit-text-stroke:1px #666;


    }
  }
      }
}


</style>