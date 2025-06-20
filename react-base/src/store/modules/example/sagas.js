import { call } from 'redux-saga';
import * as actions from './actions';

const requisicao = () => new Promise(( resolve, reject) => {
setTimeout(() => {
    resolve();
}, 2000);
});

function* exampleRequest() {
    try{
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    }catch{
        yield put(actions.clicaBotaoFailure());

    }
}