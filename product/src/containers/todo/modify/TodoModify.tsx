import React from 'react';
import { ePriority } from '../../../constants';
import {
    TodoTextInputElement,
    TodoTextareaElement,
    TodoSelectElement,
    TodoDateInputElement,
    TodoData,
} from '../../../components';

interface Props {
    item: TodoData;
    onHandle(): void;
}
interface State {

}

export class TodoModify extends React.Component<Props, State> {
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