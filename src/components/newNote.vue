<template>
  <div class="new-note">
    <div class="new-note-header">
        <router-link to="/" tag="div" class="cancel-btn"><i class="iconfont icon-back"></i></router-link>
        <div class="new-note-date"><input type="date" v-model="note.date"></div>
        <div class="confirm-btn" @click='addNote'><i class="iconfont icon-check"></i></div>
    </div>
    <div class="new-note-content">
        <div class="new-note-mood">
            <textarea class="new-note-input" placeholder="今天的心情..." v-model="note.mood"></textarea> 
        </div>
        <div class="new-note-regret">
            <textarea class="new-note-input" type="text" placeholder="今天的遗憾..." v-model="note.regret"></textarea>
        </div>
        <div class="new-note-happy">
            <textarea class="new-note-input" type="text" placeholder="值得高兴的事情..."></textarea>
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
            regret: '',
            happy: '',
            date: ''
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
    background-color: #fff;
    font-size: 0;
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
    font-weight: bold;
}
.cancel-btn i{
    font-size: 14px;
    cursor: pointer;
}
.cancel-btn{
    left: 20px;
}
.confirm-btn{
    right: 15px;
}
.confirm-btn i{
    font-size: 20px;
    color: #15ae11;
    font-weight: bold;
}
.new-note-date{
    width: 50%;
    margin: 0 auto;
    text-align: center;
}
.new-note-date input{
    border: none;
    text-align: center;
}
.new-note-date input[type="date"]::-webkit-calendar-picker-indicator{
    display: none;
}
.new-note-date input[type="date"]::-webkit-clear-button{
    display: none;
}
.new-note-content{
    width: calc(100% - 40px);
    height: calc(100% - 50px);
    padding: 0 20px;
}
.new-note-mood{
    width: 100%;
    padding-top: 10px;
}
.new-note-input{
    width: calc(100% - 42px);
    height: 50px;
    padding: 15px 20px;
    resize: none;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 0 10px 0 #eee inset;
    font-size: 1rem;
}
.new-note-input::-webkit-input-placeholder{
    color: #999;
}
.new-note-regret,.new-note-happy{
    margin-top: 20px;
}
</style>
