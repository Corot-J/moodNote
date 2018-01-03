export const noteList = state => state.noteList
export const noteDetail = (state) => (id) => {
    return state.noteList.find(note => note.id === id)
}