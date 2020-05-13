import { combineReducers } from 'redux';
import { todoReducer, TodoState } from './modules/todo/reducer';

// [ Redux 만들기 ] step 4: reducer 등록
// reducer 등록

export interface RootState {
    todo: TodoState;
}

export const rootReducer = combineReducers({
    todo: todoReducer,
});

