import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { TodoSummaryList } from '../../components';
import { TodoAction, todoGetListReq } from '../../store/modules/todo/actions';
import { RootState } from '../../store/rootReducer';
import { TodoData, TodoGetListReqPayload } from '../../store/modules/todo/types';
import { getTodos, getLastId, canLoading, getInitList } from '../../store/modules/todo/getters';

interface ReduxProps {
    datas: TodoData[];
    lastId: number;
    canLoading: boolean;
    initList: boolean;
}
interface DispatchProps {
    todoGetListReq: typeof todoGetListReq;
}
type Props = DispatchProps & ReduxProps & RouteComponentProps;


class TodoSearchComponent extends React.Component<Props> {

    public componentDidMount() {
        const { todoGetListReq, lastId, initList } = this.props;
        if (!initList) {
            todoGetListReq({ lastId: lastId });
            window.addEventListener('scroll', this.onHandleScroll, true);
        }
    }

    public componentWillUnmount() {
        window.removeEventListener('scroll', this.onHandleScroll);
    }
    public render() {
        const { datas } = this.props;
        return (<TodoSummaryList datas={datas} />);
    }

    private onHandleScroll = () => {
        // todo
        // 1. 스코롤이 없을 때 처리 필요
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { todoGetListReq, lastId, canLoading } = this.props;

        const scrollTop = (document.documentElement && document.documentElement.scrollTop)
            || document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop < 40) {
            if (canLoading) {
                todoGetListReq({ lastId: lastId });
            }
        }
    };
}

const mapStateProps = (state: RootState): ReduxProps => ({
    datas: getTodos(state),
    lastId: getLastId(state),
    canLoading: canLoading(state),
    initList: getInitList(state),
});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({
    todoGetListReq: (payload: TodoGetListReqPayload) => dispatch(todoGetListReq(payload)),
});

export const TodoSearchPage = withRouter(connect(mapStateProps, mapDispatchProps)(TodoSearchComponent));