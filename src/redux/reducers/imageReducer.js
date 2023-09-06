
const initialState = {
  selectedImage: null,
  imageName: '',
  //*Quiz Image relate
  selectedQuizImage: null,
  quizImageName:''
};

export const Imagereducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_IMAGE':
      return {
        ...state,
        selectedImage: action.payload,
      };
    case 'SET_IMAGE_NAME':
      return {
        ...state,
        imageName: action.payload,
      };
    //*Quiz Image related
    case 'SET_SELECTED_QUIZ_IMAGE':
      return {
        ...state,
        selectedQuizImage: action.payload,
      };
    case 'SET_IMAGE_QUIZ_NAME':
      return {
        ...state,
        quizImageName: action.payload,
      };
    case 'RESET_IMAGE':
      return {
        ...state,
        selectedQuizImage: null,
        quizImageName: '',
      };
    default:
      return state;
  }
};

