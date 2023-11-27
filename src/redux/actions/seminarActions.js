export const createSeminar = (seminar) => ({
    type: 'CREATE_SEMINAR',
    payload: seminar
})

export const addTitle = (title) => ({
  type: 'ADD_TITLE',
  payload: title,
});
export const addPresenter = (name) => ({
  type: 'ADD_PRESENTER',
  payload: name,
});
export const addOccupations = (occupations) => ({
  type: 'ADD_OCCUPATIONS',
  payload: occupations,
});
export const addCeu = (ceu) => ({
  type: 'ADD_CEU',
  payload: ceu,
});
export const addLink = (link) => ({
  type: 'ADD_LINK',
  payload: link,
});
export const addImage = (image) => ({
  type: 'ADD_IMAGE',
  payload: image,
});
export const resetInputs = () => ({
  type:'RESET_INPUT'
})
