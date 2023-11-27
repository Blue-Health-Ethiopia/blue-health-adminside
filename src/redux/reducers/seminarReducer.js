import { virtualseminars } from "../../data/virtualseminars";

const seminarsInitialState = {
  seminars: virtualseminars,
  isEditing:false,
  virtualSeminarTitle: '',
  image:null,
  presenterName: '',
  occupations: [],
  state: '',
  ceuPoint: '',
  zoomLink:''
};

export const seminarsReducer = (state = seminarsInitialState, action) => {
  switch (action.type) {
    case 'CREATE_SEMINAR':
      return {
        seminars: [...state.seminars, action.payload],
      };
    case 'ADD_TITLE':
      return {
        ...state,
        virtualSeminarTitle: action.payload,
      };
    case 'ADD_PRESENTER':
      return {
        ...state,
        presenterName: action.payload,
      };
    case 'ADD_OCCUPATIONS':
      return {
        ...state,
        occupations: [action.payload],
      };
    case 'ADD_CEU':
      return {
        ...state,
        ceuPoint: action.payload,
      };
    case 'ADD_LINK':
      return {
        ...state,
        zoomLink: action.payload,
      };
    case 'RESET_INPUT':
      return {
        ...state,
        virtualSeminarTitle: '',
        presenterName: '',
        occupations: [],
        ceuPoint: '',
        zoomLink: '',
      };
    default:
      return state;
  }
};
