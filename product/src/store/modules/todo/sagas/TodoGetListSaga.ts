import { put, call } from 'redux-saga/effects';
import { API } from '../../../../api';
import {
    TodoGetListReq,
    todoGetListRes,
    todoGetListErr,
} from '../actions';
import { ServiceType } from '../../../../constants';

const MAXLIMIT = 20;

export function* todoGetListSaga(action: TodoGetListReq) {

    const lastId = action.payload.lastId - 1;

    // http://localhost:8080/todos?_sort=id&_order=DESC&_limit=10&id_lte=10
    const query = `/todos?_sort=id&_order=DESC&_limit=${MAXLIMIT}` + (lastId <= 0 ? '' : `&id_lte=${lastId}`);
    try {
        const rs = yield call(API.get({ service: ServiceType.todo }), query);
        yield put(todoGetListRes({ datas: rs }));
    } catch (error) {
        yield put(todoGetListErr(error));
    }
}
