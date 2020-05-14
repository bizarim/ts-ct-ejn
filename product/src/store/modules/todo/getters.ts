import { TodoState } from './reducer';
import { RootState } from '../../rootReducer';

export const getTodos = (state: RootState): TodoState['datas'] => state.todo.datas;

export const getLastId = (state: RootState): TodoState['lastId'] => state.todo.lastId;

export const getInitList = (state: RootState): TodoState['initList'] => state.todo.initList;

export const canLoading = (state: RootState): TodoState['canLoading'] => {
    if (state.todo.datas.length <= 0) return true;
    if (state.todo.lastId <= 1 ) return false;

    return state.todo.canLoading;
};