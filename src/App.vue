<style src='./css/iconfont.css'></style>

<template>
  <div id="app">
    <transition name="slide-right">
      <router-view class="Router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
*{
  padding: 0;
  margin:  0;
}
#app{
  width: 100%;
  height: 100%;
}
.Router {
     position: absolute;
     width: 100%;
     transition: all .8s ease;
     top: 0;
}
.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
