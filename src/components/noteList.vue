<template>
  <div class="note-list">
    <div class="note-item" v-for="(note, index) in noteList" v-bind:key="note.id">
        <img  class="note-img" :src="note.img">
        <div class="note-footer">
            <div class="note-mood">{{note.mood}}</div>
            <div class="note-date">{{note.date}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'NoteList',
  computed:{
      ...mapGetters(['noteList'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note-list{
    width: 100%;
    height: calc(100% - 70px);
    padding: 10px 0;
    overflow-y: auto;
}
.note-item{
    width: calc(100% - 40px);
    height: 200px;
    margin: 0 auto 10px;
    position: relative;
    overflow: hidden;
}
.note-img{
    width: 100%;
}
.note-footer{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
}
.note-mood{
    font-size: 14px;
    line-height: 35px;
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
}
.note-date{
    font-size: 12px;
    line-height: 24px;
    padding-left: 5px;
    color: #eee;
}
</style>
