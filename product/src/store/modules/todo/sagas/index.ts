// tslint:disable-next-line
import { takeEvery } from 'redux-saga/effects';
import {
    TODO_GET_LIST_REQ,
    TODO_ADD_REQ,
    TODO_MODIFY_REQ,
} from '../constants';
import { todoGetListSaga } from './TodoGetListSaga';
import { todoAddSaga } from './TodoAddSaga';
import { todoModifySaga } from './TodoModifySaga';


export function* rootTodoSaga() {

    yield takeEvery(TODO_GET_LIST_REQ, todoGetListSaga);
    yield takeEvery(TODO_ADD_REQ, todoAddSaga);
    yield takeEvery(TODO_MODIFY_REQ, todoModifySaga);
}
