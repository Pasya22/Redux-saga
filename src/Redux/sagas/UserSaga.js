import {
    call,
    put
} from "redux-saga/effects";
import apiUsers from "../Service/ApiUsersService";

import {
    getUsersSucceed,
    getUsersFailed,
    createUserSucceed,
    createUserFailed,
    updateUsersSucceed,
    updateUsersFailed,
    deleteUserSucceed,
    deleteUserFailed
} from "../Actions/reducerAction"


function* handleUser() {
    try {
        const result = yield call(apiUsers.getAll);
        yield put(getUsersSucceed(result.data));
        console.log(result.data)
    } catch (error) {
        yield put(getUsersFailed(error));
    }
}

function* handleADDUser(action) {
    try {
        const result = yield call(apiUsers.create, action.payload);
        yield put(createUserSucceed(result.data))
    } catch (error) {
        yield put(createUserFailed(error))
    }

}

function* handleUpdateUser(action) {
    try {
        const result = yield call(apiUsers.update, action.payload);
        yield put(updateUsersSucceed(result.data))
    } catch (error) {
        yield put(updateUsersFailed(error))
    }

}

function* handleDeleteUser(action) {
    try {
        const result = yield call(apiUsers.remove, action.payload);
        yield put(deleteUserSucceed(result.data))
    } catch (error) {
        yield put(deleteUserFailed(error))
    }

}

export {
    handleUser,
    handleADDUser,
    handleUpdateUser,
    handleDeleteUser
};