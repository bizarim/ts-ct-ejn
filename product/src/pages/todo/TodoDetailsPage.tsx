import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { TodoModify } from '../../containers';
import { TodoDetails } from '../../components';
import { TodoAction } from '../../store/modules/todo/actions';
import { RootState } from '../../store/rootReducer';

interface ReduxProps {

}
interface DispatchProps {

}
type Props = DispatchProps & ReduxProps & RouteComponentProps;

interface State {
    isModify: boolean;
}

const data = { id: 1, title: '1' };

class TodoDetailsComponent extends React.Component<Props, State> {
    public state = {
        isModify: false,
    };

    public render() {
        const { isModify } = this.state;
        return isModify
            ? (<TodoModify item={data} onHandle={this.onModify} />)
            : (<TodoDetails item={data} onHandle={this.onModify} />);
    }

    private onModify = () => {
        const { isModify } = this.state;
        this.setState({ isModify: !isModify });
    }
}


const mapStateProps = (state: RootState): ReduxProps => ({

});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({

});

export const TodoDetailsPage = withRouter(connect(mapStateProps, mapDispatchProps)(TodoDetailsComponent));