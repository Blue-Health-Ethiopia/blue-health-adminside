import { combineReducers } from "@reduxjs/toolkit";
import { quizReducer } from "./reducers/quizReducer";
import { seminarsReducer } from "./reducers/seminarReducer";

const initialState = {
    isExpanded:true,
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

const rootReducer = combineReducers({
    panel: sidePanelReducer,
    seminars: seminarsReducer,
    editing: editingReducer,
    quiz: quizReducer
})
export default rootReducer