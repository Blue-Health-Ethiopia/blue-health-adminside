import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
    isExpanded:true
}

const sidePanelReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDE_PANEL':
            return{...state,isExpanded:!state.isExpanded}
       default:
        return state
    }

}

const rootReducer = combineReducers({
    panel:sidePanelReducer
})
export default rootReducer