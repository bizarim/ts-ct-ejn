import React from 'react';
import { Link } from 'react-router-dom';

export type TodoData = {
    id: number;
    title: string,
};

interface Props {
    item: TodoData;
}
interface State {

}

export class TodoSummary extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { item } = this.props;
        return (
            <div key={item.id} className="item">
                <div className="item__wrap">
                    <Link to={`/todos/${item.id}`}>
                        <div className="item__wrap__title">
                            <span>{'테스트 입니다.테스트 입니다.테스트 입니다.'}</span>
                        </div>
                        <div className="item__wrap__contents">
                            <span>{'테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.테스트 입니다.'}</span>
                        </div>
                        <div className="item__wrap__body">
                            <div className="item__wrap__body__left">
                                <span>{'우선순위: 높음'}</span>
                            </div>
                            <div className="item__wrap__body__left">
                                <span>{'D-100'}</span>
                            </div>
                            <div className="item__wrap__body__left">
                                <span>{'진행중'}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        );
    }
}