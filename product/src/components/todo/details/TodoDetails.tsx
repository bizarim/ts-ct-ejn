import React from 'react';
import { TodoDetailElement } from '../elements/TodoDetailElement';
import { TodoData } from '../../../store/modules/todo/types';

interface Props {
    item: TodoData;
    onHandle(): void;
}
interface State {

}

export class TodoDetails extends React.Component<Props, State> {


    public render() {

        return (
            <div className="details">
                <div className="details__wrap">
                    <TodoDetailElement label={'제목'} contents={'테스트 입니다.테스트 입니다.테스트 입니다.'} />
                    <TodoDetailElement label={'내용'} contents={'테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.'} />
                    <TodoDetailElement label={'우선순위'} contents={'높음'} />
                    <TodoDetailElement label={'마감기한'} contents={'2020-05-05'} />
                    <TodoDetailElement label={'완료여부'} contents={'진행중'} />
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