<template>
  <div class="note-detail">
    <div class="note-detail-header">
        <router-link to="/" tag="div" class="back-btn"><i class="iconfont icon-back"></i></router-link>
        <div class="note-time">{{note.date}}</div>
    </div>
    <div class="note-detail-content">
        <div class="note-title">{{note.mood}}</div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    note:function(){
        return this.$store.getters.noteDetail(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note-detail{
    width: 100%;
    height: 100%;
}
.note-detail-header{
    width: 100%;
    height: 50px;
    line-height: 50px;
}
.back-btn{
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 50px;
}
.note-time{
    display: inline-block;
    width: calc(100% - 100px);
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    color: #535353;
}
.note-detail-content{
    height: calc(100% - 50px);
    overflow-y: auto;
}
.note-img{
    width: 100%;
}
.note-img img{
    width: 100%;
}

</style>
