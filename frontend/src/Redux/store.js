import { legacy_createStore as createStore,applyMiddleware, combineReducers} from "redux";
import {postsreducer} from "./reducer"

import thunk from "redux-thunk";
import { reducergif } from "./reducergif";


// const newmiddleware = (store) => (next) => (action) =>{
//   if(typeof action === "function")
//   {
//     return action(store.dispatch);
//   }
//   next(action)
// }
const rootreducer = combineReducers({
  POSTS:postsreducer,
  GIF:reducergif
})

export const Store = createStore(rootreducer,applyMiddleware(thunk)) 