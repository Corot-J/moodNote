<template>
  <div class="new-note">
    <div class="new-note-header">
        <router-link to="/" tag="div" class="cancel-btn"><i class="iconfont icon-Clear"></i></router-link>
        <div class="confirm-btn" @click='addNote'>保存</div>
    </div>
    <div class="new-note-content">
        <div class="new-note-mood">
            <div class="new-note-title">心情：</div>
            <textarea placeholder="心情..." v-model="note.mood"></textarea> 
        </div>
        <div class="new-note-time">
            <div class="new-note-title">日期：</div>
            <input type="date" v-model="note.date">
        </div>
        <div class="new-note-img">
            <label class="choose-img" for="imgChoose" v-if="note.img==''">+</label>
            <label class="img-show" for="imgChoose" v-else>
                <img :src="note.img">
            </label>
            <input id="imgChoose" type="file" accept="image/*" style="display:none" @change='chooseImg($event)'>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewNote',
  data () {
    return {
        note:{
            mood: '',
            date: '',
            img: ''
        }
    }
  },
  mounted:function(){
      this.$nextTick(function(){
          this.init();
      })
  },
  methods:{
      init:function(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        month = month>9?month:'0'+month;
        var day = date.getDate();
        day = day>9?day:'0'+day;
        this.note.date = year+'-'+month+'-'+day;
      },
      chooseImg:function(e){
        var url = window.URL.createObjectURL(e.target.files[0]);
        this.note.img = url;
      },
      addNote:function(){
        this.$store.dispatch('addNote', this.note)
        this.$router.back()
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
.new-note-content{
    width: calc(100% - 20px);
    height: calc(100% - 50px);
    padding: 0 10px;
}
.new-note-title{
    font-size: 14px;
    line-height: 21px;
    padding-bottom: 10px;
    color: #535353;
}
.new-note-mood{
    width: 100%;
    padding-top: 10px;
}
.new-note-mood textarea{
    width: calc(100% - 20px);
    height: 150px;
    padding: 10px;
    resize: none;
    border-color: #d7d7d7;
    outline: none;
}
.new-note-time{
    width: 100%;
}
.new-note-time input{
    width: calc(100% - 20px);
    height: 40px;
    padding: 0 10px;
    border: 1px solid #d7d7d7
}
.new-note-img{
    width: 100%;
    text-align: center;
    margin-top: 20px;
}
.choose-img{
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 40px;
    background-color: rgb(243, 243, 243)
}
.img-show{
    display: inline-block;
    width: 100%;
}
.img-show img{
    width: 100%;
}
</style>
