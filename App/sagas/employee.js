import { put, call, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import JustCauseApi from '../services/JustCauseApi';

import { EmployeeTypes } from '../store/reducers/employee';

async function saveTokenAndUser(token, user) {
    await AsyncStorage.multiSet([
        ['@JustCause:token', token],
        ['@JustCause:user', user],
    ]);
}

function* fetchLogin(action) {
    const { username, password } = action.payload;
    let response = yield call(JustCauseApi.login, username, password);
    const { data } = response;
    if (response.ok) {
        const { funcionario, token } = data;
        
        yield call(saveTokenAndUser, token, JSON.stringify(funcionario));

        yield put({ type: EmployeeTypes.LOGIN_SECESS, data: funcionario });
    } else {
        const { message } = data;
        yield put({ type: EmployeeTypes.LOGIN_FAILED, data: message });
    }
}

async function clearStorage() {
    await AsyncStorage.clear();
}

function* fetchLogout(action) {
    yield call(clearStorage);
    yield put({ type: EmployeeTypes.LOGOUT });
}

export const logoutRequest = function*(action) {
    yield takeLatest(EmployeeTypes.LOGOUT_REQUEST, fetchLogout);
};

export const loginRequest = function*(action) {
    yield takeLatest(EmployeeTypes.LOGIN_REQUEST, fetchLogin);
};
