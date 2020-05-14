import React from 'react';
import { TodoDetailElement } from '../elements/TodoDetailElement';
import { TodoData } from '../../../store/modules/todo/types';
import { ePriority } from '../../../constants';

interface Props {
    item: TodoData;
    onHandle(): void;
}
interface State {

}

// todo
const title = '제목';
const contents = '내용';
const priority = '우선순위';
const lastDate = '마감기한';
const complete = '완료여부';


export class TodoDetails extends React.Component<Props, State> {


    public render() {
        const { item } = this.props;
        return (
            <div className="details">
                <div className="details__wrap">
                    <TodoDetailElement label={title} contents={item.title} />
                    <TodoDetailElement label={contents} contents={item.contents} />
                    <TodoDetailElement label={priority} contents={(ePriority[item.priority as ePriority]).toString()} />
                    <TodoDetailElement label={lastDate} contents={item.LastDate} />
                    <TodoDetailElement label={complete} contents={`${item.completed}`} />
                    <div className="details__wrap__foot">
                        <button className="btn btn-primary" onClick={this.onModify}> modify </button>
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