import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        noteList:[
            { id: 1, img: 'static/img/head.jpg', date: '2017/12/11', mood: '今天心情不错'},
            { id: 2, img: 'static/img/tough.jpg', date: '2017/12/12', mood: '今天心情一般'},
            { id: 3, img: 'static/img/head.jpg', date: '2017/12/11', mood: '今天心情不错'},
            { id: 4, img: 'static/img/tough.jpg', date: '2017/12/12', mood: '今天心情一般'},
            { id: 5, img: 'static/img/head.jpg', date: '2017/12/11', mood: '今天心情不错'},
            { id: 6, img: 'static/img/tough.jpg', date: '2017/12/12', mood: '今天心情一般'}
        ]
    },
    getters
})