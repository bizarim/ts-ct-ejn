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
import { TodoData, TodoModifyReqPayload } from '../../../store/modules/todo/types';
import { TodoAction, todoModifyReq } from '../../../store/modules/todo/actions';
import { RootState } from '../../../store/rootReducer';


interface ReduxProps {

}
interface DispatchProps {
    todoModifyReq: typeof todoModifyReq;
}
interface TodoModifyProps {
    item: TodoData;
    onHandle(): void;
}

type Props = DispatchProps & ReduxProps & TodoModifyProps;

interface State {

}

class TodoModifyComponent extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { item } = this.props;
        return (
            <div className="modify">
                <div className="modify__wrap">
                    <TodoTextInputElement label={'제목'} value={item.title} placeHolder={'제목을 입력하세요.'} onHandle={() => { }} />
                    <TodoTextareaElement label={'내용'} value={item.title} placeHolder={'내용을 입력하세요.'} onHandle={() => { }} />
                    <TodoSelectElement label={'내용'} value={ePriority.high.toString()} options={[ePriority.high.toString(), ePriority.middle.toString(), ePriority.low.toString()]} onHandle={() => { }} />
                    <TodoDateInputElement label={'마감기한'} value={item.title} onHandle={() => { }} />
                    <TodoSelectElement label={'완료여부'} value={''} options={['진행중', '완료']} onHandle={() => { }} />
                    <div className="modify__wrap__foot">
                        <button className="btn btn-primary" onClick={this.onModify}> complete </button>
                    </div>

                </div>
            </div>
        );
    }

    private onModify = () => {
        const { onHandle } = this.props;
        onHandle();
    }
}


const mapStateProps = (state: RootState): ReduxProps => ({

});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({
    todoModifyReq: (payload: TodoModifyReqPayload) => dispatch(todoModifyReq(payload)),
});

export const TodoModify = connect(mapStateProps, mapDispatchProps)(TodoModifyComponent);