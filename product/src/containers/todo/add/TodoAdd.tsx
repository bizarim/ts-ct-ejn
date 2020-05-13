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


interface ReduxProps {

}
interface DispatchProps {
    todoAddReq: typeof todoAddReq;
}
type Props = DispatchProps & ReduxProps;
interface State {
    todo: TodoData;
}

class TodoAddComponent extends React.Component<Props, State> {
    public state = {
        todo: {  } as TodoData,
    };

    public render() {
        return (
            <div className="modify">
                <div className="modify__wrap">
                    <TodoTextInputElement label={'제목'} value={''} placeHolder={'제목을 입력하세요.'} onHandle={() => { }} />
                    <TodoTextareaElement label={'내용'} value={''} placeHolder={'내용을 입력하세요.'} onHandle={() => { }} />
                    <TodoSelectElement label={'내용'} value={''} options={[ePriority.high.toString(), ePriority.middle.toString(), ePriority.low.toString()]} onHandle={() => { }} />
                    <TodoDateInputElement label={'마감기한'} value={Date.now.toString()} onHandle={() => { }} />
                    <TodoSelectElement label={'완료여부'} value={''} options={['진행중', '완료']} onHandle={() => { }} />
                    <div className="modify__wrap__foot">
                        <button className="btn btn-primary" onClick={this.onClicked}> add </button>
                    </div>

                </div>
            </div>
        );
    }

    private onClicked = () => {

    }
}


const mapStateProps = (state: RootState): ReduxProps => ({

});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({
    todoAddReq: (payload: TodoAddReqPayload) => dispatch(todoAddReq(payload)),
});

export const TodoAdd = connect(mapStateProps, mapDispatchProps)(TodoAddComponent);