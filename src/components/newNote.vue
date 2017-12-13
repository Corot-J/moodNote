<template>
  <div class="new-note">
    <div class="new-note-header">
        <router-link to="/" tag="div" class="cancel-btn"><i class="iconfont icon-Clear"></i></router-link>
        <div class="confirm-btn">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewNote',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-note{
    width: 100%;
    height: 100%;
}
.new-note-header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: relative;
}
.cancel-btn,.confirm-btn{
    position: absolute;
    top: 0;
}
.cancel-btn i{
    font-size: 14px;
    cursor: pointer;
}
.cancel-btn{
    left: 15px;
}
.confirm-btn{
    right: 15px;
    font-size: 14px;
    color: #15ae11
}
</style>
