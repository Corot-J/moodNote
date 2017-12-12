<template>
  <div class="main">
      <navbar></navbar>
      <noteList></noteList>
  </div>
</template>

<script>
import Navbar from './navbar'
import NoteList from './noteList'
export default {
  name: 'Main',
  components: {
      Navbar,NoteList
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height: 100%;
  width: 100%;
}
</style>
