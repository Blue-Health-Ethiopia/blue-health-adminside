const quizsInitialState = {
  quizs: [], // Initialize with an empty array or your quiz data
  question: '', // Initialize with a default value
  choices: [],
  correctAnswer: '',
  isEditing: false,
  selectedQuestionIndex: null,
};

export const quizReducer = (state = quizsInitialState, action) => {
  switch (action.type) {
    case 'ADD_CHOICE':
      return {
        ...state,
        choices: [...state.choices, ''],
      };
    case 'ADD_QUESTION':
      return {
        ...state,
        question: action.payload,
      };
    case 'ADD_QUIZ':
      return {
        ...state,
        quizs: [...state.quizs, ...action.payload],
      };
    case 'REMOVE_QUIZ':
      const updatedQuizzes = [...state.quizs];
      updatedQuizzes.splice(action.payload, 1); // Remove the quiz at the specified index
      return {
        ...state,
        quizs: updatedQuizzes,
      };
    case 'UPDATE_CHOICE':
      const { index, choice } = action.payload;
      const updatedChoices = [...state.choices];
      updatedChoices[index] = choice;
      return {
        ...state,
        choices: updatedChoices,
      };
    case 'REMOVE_CHOICE':
      const indexToRemove = action.payload;
      const restChoices = state.choices.filter(
        (_, index) => index !== indexToRemove
      );
      return {
        ...state,
        choices: restChoices,
      };
    case 'RESET_INPUTS':
      return {
        ...state,
        question: '',
        choices: [],
        correctAnswer: '',
      };
    case 'SELECT_ANSWER':
      return {
        ...state,
        correctAnswer: action.payload,
      };
    case 'ENABLE_EDITING':
      return {
        ...state,
        isEditing: true,
        selectedQuestionIndex: action.payload,
      };
    case 'SAVE_EDIT':
      return {
        ...state,
        isEditing: false,
        selectedQuestionIndex: null,
      };
    case 'EDIT_QUIZ':
      const { indexQ, newQuestion } = action.payload;
      const updatedQuizze = [...state.quizs];
        updatedQuizze[indexQ] = {
          ...updatedQuizze[indexQ],
          question: newQuestion,
        };
      return {
        ...state,
        quizs: updatedQuizze,
      };

    default:
      return state;
  }
};