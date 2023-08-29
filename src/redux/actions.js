export const toggleSidePanel = () => ({
    type:'TOGGLE_SIDE_PANEL'
})

export const createSeminar = (newseminar) => ({
    type: 'CREATE_SEMINAR',
    payload:newseminar
})

export const toggleEditing = (field) => ({
    type:"TOGGLE_EDITING",
    payload:field
})