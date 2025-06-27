import * as types from '../types';
import * as actions from './actions';

function* loginRequest(payload){

}
export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);