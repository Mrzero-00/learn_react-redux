import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import post from "./postModule";


const rootReducer = combineReducers({
    counter,
    todos,
    post
})

export default rootReducer;