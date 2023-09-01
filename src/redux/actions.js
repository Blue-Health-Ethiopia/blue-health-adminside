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

export const addQuestion = (question) => ({
    type: "ADD_QUESTION",
    payload:question
})

export const addChoices = () => ({
    type: "ADD_CHOICE",
})

export const addQuiz = (quiz) => ({
    type: "ADD_QUIZ",
    payload:quiz
})

export const removeQuiz = (index) => ({
  type: 'REMOVE_QUIZ',
  payload: index,
});

export const resetInputs = () => ({
  type: 'RESET_INPUTS',
});

export const updateChoice = (index, choice) => ({
  type: 'UPDATE_CHOICE',
  payload: { index, choice },
});
export const removeChoice = (index) => ({
  type: 'REMOVE_CHOICE',
  payload: index,
});

export const selectChoice = (choice) => ({
  type: 'SELECT_ANSWER',
  payload: choice,
});

export const enableEditing = (index) => ({
  type: 'ENABLE_EDITING',
  payload:index
});
export const saveEditing = () => ({
  type: 'SAVE_EDIT',
});
export const editing = (indexQ, newQuestion) => ({
  type: 'EDIT_QUIZ',
  payload: { indexQ, newQuestion }, // Consistent payload structure
});
