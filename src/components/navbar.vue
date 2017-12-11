<template>
  <div class="navbar">
    导航栏
    <i class="iconfont icon-add"></i>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: red;
  font-size: 14px;
  color: #fff;
  text-align: center;
  position: relative;
}
.navbar .icon-add{
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 0
}
</style>
