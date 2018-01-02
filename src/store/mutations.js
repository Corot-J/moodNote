import * as types from './mutation-types'

const mutations = {
    [types.ADD_NOTE] (state,note) {
        state.noteList.push({
            id: state.noteList.length+1,
            img: note.img,
            date: note.date,
            mood: note.mood
        })
    }
}

export default mutations