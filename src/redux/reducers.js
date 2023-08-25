import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
    start:'Started'
}


const rootReducer = combineReducers({
    start:initialState
})
export default rootReducer