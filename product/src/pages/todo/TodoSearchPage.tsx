import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { TodoSummaryList } from '../../components';
import { TodoAction, todoGetListReq } from '../../store/modules/todo/actions';
import { RootState } from '../../store/rootReducer';
import { TodoData, TodoGetListReqPayload } from '../../store/modules/todo/types';
import { getTodos } from '../../store/modules/todo/getters';

interface ReduxProps {
    datas: TodoData[];
}
interface DispatchProps {
    todoGetListReq: typeof todoGetListReq;
}
type Props = DispatchProps & ReduxProps & RouteComponentProps;

class TodoSearchComponent extends React.Component<Props> {

    public render() {
        return (<TodoSummaryList />);
    }
}

const mapStateProps = (state: RootState): ReduxProps => ({
    datas: getTodos(state),
});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({
    todoGetListReq: (payload: TodoGetListReqPayload) => dispatch(todoGetListReq(payload)),
});

export const TodoSearchPage = withRouter(connect(mapStateProps, mapDispatchProps)(TodoSearchComponent));

// todo
// 스크롤 처리
// https://velog.io/@killi8n/Dnote-6-1.-React-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4%EB%A7%81-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84.-79jmep7xes