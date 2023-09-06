
export const setSelectedImage = (imageData) => ({
  type: 'SET_SELECTED_IMAGE',
  payload: imageData,
});

export const setImageName = (name) => ({
  type: 'SET_IMAGE_NAME',
  payload: name,
});

export const setQuizImage = (imageData) => ({
  type: 'SET_SELECTED_QUIZ_IMAGE',
  payload: imageData,
});

export const setQuizImageName = (name) => ({
  type: 'SET_IMAGE_QUIZ_NAME',
  payload: name,
});
export const resetImage = () => ({
  type: 'RESET_IMAGE',
});
