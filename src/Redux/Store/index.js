import {
    configureStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../sagas'
import userReducers from "../Reducer/userReducer";
import {
    combineReducers
} from "redux";

// daftar reducer
const saga = createSagaMiddleware()
const reducer = combineReducers({
    userReducers: userReducers,

})

// config store
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(saga)

})
saga.run(rootSaga)
export default store;