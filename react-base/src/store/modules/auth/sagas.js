import { toast } from 'react-toastify';
import * as types from '../types';
import * as actions from './actions';
import { all, takeLatest, call } from 'redux-saga/effects';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login com sucesso');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuario ou senha invalida');
    yield put(actions.loginFailure());
  }
}
export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
