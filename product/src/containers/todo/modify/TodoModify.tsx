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
    modifyItem: TodoData;
}
// todo
const title = '제목';
const contents = '내용';
const titlePlaceHolder = '제목을 입력하세요.';
const contentsPlacHolder = '내용을 입력하세요.';
const priority = '우선순위';
const lastDate = '마감기한';
const complete = '완료여부';

class TodoModifyComponent extends React.Component<Props, State> {
    public state = {
        modifyItem: JSON.parse(JSON.stringify(this.props.item)) as TodoData,
    };

    public render() {
        const { modifyItem } = this.state;
        return (
            <div className="modify">
                <div className="modify__wrap">
                    <TodoTextInputElement label={title} value={modifyItem.title} placeHolder={titlePlaceHolder} onHandle={this.onChangedTitle} />
                    <TodoTextareaElement label={contents} value={modifyItem.contents} placeHolder={contentsPlacHolder} onHandle={this.onChangedContents} />
                    <TodoSelectElement label={priority} value={ePriority[modifyItem.priority as ePriority]}
                        options={[(ePriority[ePriority.high]).toString(), (ePriority[ePriority.middle]).toString(), (ePriority[ePriority.low]).toString()]}
                        onHandle={this.onChangedPriority} />
                    <TodoDateInputElement label={lastDate} value={modifyItem.LastDate} onHandle={this.onChangedLastDate} />
                    <TodoSelectElement label={complete} value={`${modifyItem.completed}`} options={['false', 'true']} onHandle={this.onChangedComplete} />
                    <div className="modify__wrap__foot">
                        <button className="btn btn-primary" onClick={this.onCompleted}> complete </button>
                    </div>

                </div>
            </div>
        );
    }

    private onChangedTitle = (text: string) => {
        const { modifyItem } = this.state;
        modifyItem.title = text;
        this.setState({
            modifyItem: modifyItem,
        });
    }

    private onChangedContents = (text: string) => {
        const { modifyItem } = this.state;
        modifyItem.contents = text;
        this.setState({
            modifyItem: modifyItem,
        });
    }

    private onChangedPriority = (text: string) => {
        const { modifyItem } = this.state;
        modifyItem.priority = text;
        this.setState({
            modifyItem: modifyItem,
        });
    }

    private onChangedLastDate = (text: string) => {
        const { modifyItem } = this.state;
        modifyItem.LastDate = text;
        this.setState({
            modifyItem: modifyItem,
        });
    }

    private onChangedComplete = (text: string) => {
        const { modifyItem } = this.state;
        modifyItem.completed = 'true' === text;
        this.setState({
            modifyItem: modifyItem,
        });
    }

    private onCompleted = () => {
        const { onHandle, todoModifyReq } = this.props;
        const { modifyItem } = this.state;
        onHandle();
        todoModifyReq({ data: modifyItem });
    }
}


const mapStateProps = (state: RootState): ReduxProps => ({

});

const mapDispatchProps = (dispatch: Dispatch<TodoAction>) => ({
    todoModifyReq: (payload: TodoModifyReqPayload) => dispatch(todoModifyReq(payload)),
});

export const TodoModify = connect(mapStateProps, mapDispatchProps)(TodoModifyComponent);