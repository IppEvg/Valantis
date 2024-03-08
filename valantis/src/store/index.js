import {createStore,compose} from "redux"
import { loadReducer } from "./profile/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(loadReducer,composeEnhancers())