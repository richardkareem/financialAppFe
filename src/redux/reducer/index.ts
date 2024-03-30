import { combineReducers } from "redux"
// import { HomeReducer } from "./HomeReducer";
import userReducer from "./userReducer";
import { counterSlice } from "./counter";


const reducer = combineReducers({
    // HomeReducer,
    userReducer,
    counter: counterSlice,
    test: counterSlice,
})

export default reducer;