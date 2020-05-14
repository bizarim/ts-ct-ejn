import React from 'react';
import { Link } from 'react-router-dom';
import { TodoData } from '../../../store/modules/todo/types';
import { getDDay } from '../../utill';

interface Props {
    item: TodoData;
}
interface State {

}

// todo
const complete = '완료';
const ing = '진행중';

export class TodoSummary extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { item } = this.props;
        return (
            <div key={item.id} className="item">
                <div className="item__wrap">
                    <Link to={`/todos/${item.id}`}>
                        <div className="item__wrap__title">
                            <span>{item.title}</span>
                        </div>
                        <div className="item__wrap__contents">
                            <span>{item.contents}</span>
                        </div>
                        <div className="item__wrap__body">
                            <div className="item__wrap__body__left">
                                <span>{item.priority}</span>
                            </div>
                            <div className="item__wrap__body__left">
                                <span>{getDDay(item.LastDate)}</span>
                            </div>
                            <div className="item__wrap__body__left">
                                <span>{item.completed ? complete : ing}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        );
    }
}