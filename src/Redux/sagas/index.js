import {
    takeEvery
} from "redux-saga/effects";
import {
    handleUser,
    handleADDUser,
    handleUpdateUser,
    handleDeleteUser
} from '../sagas/UserSaga';
import ActionTypes from "../Constant/ActionType";
import {
    all
} from "axios";

function* WacthALl() {
    yield all([
        takeEvery(ActionTypes.GET_USERS, handleUser),
        takeEvery(ActionTypes.ADD_USER, handleADDUser),
        takeEvery(ActionTypes.UPDATE_USER, handleUpdateUser),
        takeEvery(ActionTypes.DEL_USER, handleDeleteUser),
    ])
}

export default WacthALl