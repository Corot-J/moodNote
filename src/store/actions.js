import * as types from './mutation-types'

export const addNote = ({commit},note) =>{
    commit(types.ADD_NOTE,note)
}

// export const toNoteDetail = ({commit},id) => {
//     commit(types.SET_NOTE_ID,{id: id})
// }