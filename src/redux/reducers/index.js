import {playerReducer} from "./player";
import {combineReducers} from "redux"; // 리덕스를 합쳐주는 function


/*
리덕스가 2개 이상일 경우에는 리덕스를 합쳐줘야 한다.
index.js를 생성한다.
 */
export const allReducer = combineReducers({
  playerReducer,
})
