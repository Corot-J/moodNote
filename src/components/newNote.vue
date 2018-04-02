<template>
  <div class="new-note">
    <div class="input-item">
        <div class="input-key">今天的天气怎么样？</div>
        <div class="input-value">
            <div class="radio-item" v-for="(weather, index) in weathers" v-bind:key="weather.code">
                <input :id="'weather_'+index" type="radio" name="weather" @change="weatherChoose(index)">
                <label :for="'weather_'+index">
                    <div class="radio-btn">
                        <div class="radio-btn-point"></div>
                    </div>
                    <span>{{weather.name}}</span>
                </label>
            </div>
        </div>
    </div>
    <div class="input-item">
        <div class="input-key">你的心情怎么样？</div>
        <div class="input-value">
            <input type="text" placeholder="今天过的还开心吗?">
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
            weather: '',
            mood: '',
            regret: '',
            happy: '',
            date: ''
        },
        weathers:[
            {name: '晴天', code: 1},
            {name: '阴天', code: 2},
            {name: '下雨天', code: 3}
        ]
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
      weatherChoose:function(index){
        this.note.weather = this.weathers[index].name;
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
    width: calc(100% - 40px);
    height: calc(100% - 50px);
    padding: 0 20px;
    background-color: #fff;
    font-size: 0;
    overflow: hidden;
}
.input-item{
    width: 100%;
    padding: 20px 0;
}
.input-key{
    max-width: calc(100% - 32px);
    font-size: 1rem;
    color: #999;
    transition: transform 0.3s ease;
    -webkit-transition: transform 0.3s ease;
    padding: 10px 15px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 5px 5px 20px 1px #eee;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    margin-bottom: 10px;
}
.input-key::before,.input-key::after{
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    border: solid transparent;
}
.input-key::before{
    border-width: 9px;
    left: -18px;
    top: calc(50% - 12px);
    border-right-color: #e5e5e5;
}
.input-key::after{
    border-width: 7px;
    left: -14px;
    top: calc(50% - 10px);
    border-right-color: #fff;
}
.hide-key{
    transform: translateX(210%);
}
.input-value{
    width: 100%;
    margin-top: 10px;
}
.radio-item{
    display: inline;
    vertical-align: top;
}
.radio-item input{
    vertical-align: middle;
    display: none;
}
.radio-item label{
    vertical-align: middle;
    margin: 0 10px;
    display: inline-block;
}
.radio-item label span{
    font-size: 0.8rem;
    color: #535353;
    vertical-align: middle;
    margin-left: 10px;
}
.radio-item label .radio-btn{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #535353;
    border-radius: 50%;
    text-align: center;
}
.radio-item input:checked + label .radio-btn-point{
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    background-color: rgb(175, 117, 91);
    border-radius: 50%;
}
.input-item input[type=text]{
    width: calc(100% - 40px);
    height: 30px;
    padding: 0 20px;
    border: none;
    border-bottom: 1px solid #999;
    outline: none;
}
.input-item input[type=text]::-webkit-input-placeholder{
    color: #9f9f9f
}
</style>
