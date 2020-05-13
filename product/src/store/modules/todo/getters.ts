import { TodoState } from './reducer';
import { RootState } from '../../rootReducer';

export const getTodos = (state: RootState): TodoState['datas'] => state.todo.datas;