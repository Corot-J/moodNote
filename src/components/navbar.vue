<template>
  <div class="navbar">
    {{toDay}}
    <router-link class="iconfont icon-add" tag="i" to="newNote"></router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  },
  computed:{
    toDay:function(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      return year+'/'+month+'/'+day;
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
