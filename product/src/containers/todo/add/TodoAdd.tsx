import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ePriority } from '../../../constants';
import {
    TodoTextInputElement,
    TodoTextareaElement,
    TodoSelectElement,
    TodoDateInputElement,
} from '../../../components';
import { RootState } from '../../../store/rootReducer';
import { todoAddReq, TodoAction } from '../../../store/modules/todo/actions';
import { TodoData, TodoAddReqPayload } from '../../../store/modules/todo/types';
import { DateNow } from '../../../components/utill';


interface ReduxProps {

}

interface DispatchProps {
    todoAddReq: typeof todoAddReq;
}
type Props = DispatchProps & ReduxProps;
interface State {
    todo: TodoData;
}
// todo
const title = '제목';
const contents = '내용';
const titlePlaceHolder = '제목을 입력하세요.';
const contentsPlacHolder = '내용을 입력하세요.';
const priority = '우선순위';
const lastDate = '마감기한';

class TodoAddComponent extends React.Component<Props, State> {
    public state = {
        todo: {
            id: 0,
            title: '',
            contents: '',
            LastDate: DateNow(),
            regDate: DateNow(),
            completed: false,
            priority: '',
        },
    };

    public render() {
        const { todo } = this.state;
        return (
            <div className="modify">
                <div className="modify__wrap">
                    <TodoTextInputElement label={title} value={todo.title} placeHolder={titlePlaceHolder} onHandle={this.onChangedTitle} />
                    <TodoTextareaElement label={contents} value={todo.contents} placeHolder={contentsPlacHolder} onHandle={this.onChangedContents} />
                    <TodoSelectElement label={priority} value={ePriority[todo.priority as ePriority]}
                        options={[(ePriority[ePriority.high]).toString(), (ePriority[ePriority.middle]).toString(), (ePriority[ePriority.low]).toString()]}
                        onHandle={this.onChangedPriority} />
                    <TodoDateInputElement label={lastDate} value={todo.LastDate} onHandle={this.onChangedLastDate} />

                    <div className="modify__wrap__foot">
                        <button className="btn btn-primary" onClick={this.onClicked}> add </button>
                    </div>

                </div>
            </div>
        );
    }


    private onChangedTitle = (text: string) => {
        const { todo } = this.state;
        todo.title = text;
        this.setState({
            todo: todo,
        });
    }

    private onChangedContents = (text: string) => {
        const { todo } = this.state;
        todo.contents = text;
        this.setState({
            todo: todo,
        });
    }

    private onChangedPriority = (text: string) => {
        const { todo } = this.state;
        todo.priority = text;
        this.setState({
            todo: todo,
        });
    }

    private onChangedLastDate = (text: string) => {
        const { todo } = this.state;
        todo.LastDate = text;
        this.setState({
            todo: todo,
        });
    }

    private onClicked = () => {
        const { todoAddReq } = this.props;
        const { todo } = this.state;
        todoAddReq({
            title: todo.title,
            contents: todo.contents,
            completed: todo.completed,
            LastDate: todo.LastDate,
            priority: todo.priority,
            regDate: todo.regDate,
        });
    }
}


const mapStateProps = (state: RootState): ReduxProps => ({

});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({
    todoAddReq: (payload: TodoAddReqPayload) => dispatch(todoAddReq(payload)),
});

export const TodoAdd = connect(mapStateProps, mapDispatchProps)(TodoAddComponent);