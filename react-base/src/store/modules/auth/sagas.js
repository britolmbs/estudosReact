import * as types from '../types';
import * as actions from './actions';
import { all, takeLatest, call } from 'redux-saga/effects';

function* loginRequest({ payload }) {}
export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
