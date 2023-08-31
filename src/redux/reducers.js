import { combineReducers } from "@reduxjs/toolkit";
import { virtualseminars } from "../data/virtualseminars";
import { quiz } from "../data/quiz";

const initialState = {
    isExpanded:true,
}
const seminarsInitialState = {
  seminars: virtualseminars,
};
const quizsInitialState = {
  quizs:quiz
}
const editInitialState = {
  title: false,
  name: false,
  // Add more fields if needed
};

const sidePanelReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDE_PANEL':
            return{...state,isExpanded:!state.isExpanded}
       default:
        return state
    }

}
const seminarsReducer = (state = seminarsInitialState, action) => {
    switch (action.type) {
        case 'CREATE_SEMINAR':
            return {
              seminars: [...state.seminars, action.payload],
            };
      default:
         return state;
    }
   
}
 const editingReducer = (state = editInitialState, action) => {
   switch (action.type) {
     case 'TOGGLE_EDITING':
       const field = action.payload;
       return {
         ...state,
         [field]: !state[field],
       };
     default:
       return state;
   }
 };
const quizReducer = (state = quizsInitialState, action) => {
   return state
 }
const rootReducer = combineReducers({
    panel: sidePanelReducer,
    seminars: seminarsReducer,
    editing: editingReducer,
    quiz: quizReducer
})
export default rootReducer