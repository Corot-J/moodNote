import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import NewNote from '../components/newNote'
import NoteDetail from '../components/noteDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/newNote',
      name: 'newNote',
      component: NewNote
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: NoteDetail
    }
  ]
})
