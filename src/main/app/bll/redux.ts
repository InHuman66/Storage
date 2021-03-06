import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./Reducers/app-reducer";



export type ReduxStateType = ReturnType<typeof reducersBatch>
export type reduxStoreType = typeof store
export type reduxDispatchType = typeof  dispatch;

let  reducersBatch = combineReducers({
    form: formReducer,
    appReducer: appReducer,
});


export  const  store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducersBatch>

let state = store.getState()

let dispatch = store.dispatch