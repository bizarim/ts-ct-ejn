import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { TodoModify } from '../../containers';
import { TodoDetails } from '../../components';
import { TodoAction } from '../../store/modules/todo/actions';
import { RootState } from '../../store/rootReducer';
import { TodoData } from '../../store/modules/todo/types';
import { getTodos } from '../../store/modules/todo/getters';

interface ReduxProps {
    datas: TodoData[];
}
interface DispatchProps {

}
interface MatchParams {
    id: string;
}
type MatchProps = RouteComponentProps<MatchParams>;
type Props = DispatchProps & ReduxProps & MatchProps;

interface State {
    isModify: boolean;
}

class TodoDetailsComponent extends React.Component<Props, State> {
    public state = {
        isModify: false,
    };

    public render() {
        const { datas, match, history } = this.props;
        const data = datas.find(o => o.id === parseInt(match.params.id));
        if (undefined === data) return null;
        const { isModify } = this.state;
        return isModify
            ? (<TodoModify item={data} onHandle={this.onModify} />)
            : (<TodoDetails history={history} item={data} onHandle={this.onModify} />);
    }

    private onModify = () => {
        const { isModify } = this.state;
        this.setState({ isModify: !isModify });
    }
}


const mapStateProps = (state: RootState): ReduxProps => ({
    datas: getTodos(state),
});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({

});

export const TodoDetailsPage = withRouter(connect(mapStateProps, mapDispatchProps)(TodoDetailsComponent));