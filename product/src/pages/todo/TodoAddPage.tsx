import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { TodoAction } from '../../store/modules/todo/actions';
import { RootState } from '../../store/rootReducer';
import { TodoAdd } from '../../containers';

interface ReduxProps {

}
interface DispatchProps {

}
type Props = DispatchProps & ReduxProps & RouteComponentProps;

class TodoAddComponent extends React.Component<Props> {

    public render() {
        return (<TodoAdd />);
    }
}

const mapStateProps = (state: RootState): ReduxProps => ({

});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({

});

export const TodoAddPage = withRouter(connect(mapStateProps, mapDispatchProps)(TodoAddComponent));