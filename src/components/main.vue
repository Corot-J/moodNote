<template>
  <div class="main">
      <navbar></navbar>
      <newNote></newNote>
  </div>
</template>

<script>
import Navbar from './navbar'
import NewNote from './newNote'
export default {
  name: 'Main',
  components: {
      Navbar,NewNote
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
