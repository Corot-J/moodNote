import * as types from './mutation-types'

export const addNote = ({commit},note) =>{
    commit(types.ADD_NOTE,note)
}