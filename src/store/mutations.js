import * as types from './mutation-types'

const mutations = {
    [types.ADD_NOTE] (state,note) {
        state.noteList.push({
            id: state.noteList.length+1,
            regret: note.regret,
            happy: note.happy,
            mood: note.mood,
            date: note.date
        })
        localStorage.setItem('noteList',JSON.stringify(state.noteList));
    },
    [types.GET_NOTE] (state){
        state.noteList = localStorage.getItem('noteList')==null?[]:JSON.parse(localStorage.getItem('noteList'));
    },
    [types.SET_NOTE_ID] (state,id) {
        state.noteDetailId = id;
        console.log(id);
    }
}

export default mutations