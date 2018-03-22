<template>
  <div class="navbar">
    {{toDay}}
    <router-link class="iconfont icon-edit-copy edit-btn" tag="i" to="newNote"></router-link>
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
  background-color: fff;
  font-size: 14px;
  color: #999;
  text-align: center;
  position: relative;
  box-shadow: 0 1px 5px 0 #eee;
}
.navbar .edit-btn{
  font-size: 25px;
  position: absolute;
  right: 15px;
  top: 0;
  font-weight: bold;
}
</style>
