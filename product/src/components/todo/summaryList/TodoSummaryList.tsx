import React from 'react';
import { TodoSummary } from '../summary/TodoSummary';
import { TodoData } from '../../../store/modules/todo/types';

interface Props {
    datas: TodoData[];
}
interface State {

}


export class TodoSummaryList extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { datas } = this.props;
        return (
            <div className="search-container">
                <div className="search-container__title">
                    <span>Search</span>
                </div>
                <div className="search-container__body">
                    <div className="search-container__body__items">
                        {datas.sort((a, b) => (a.id > b.id ? -1 : 1)).map((data, index) => <TodoSummary key={data.id} item={data} />)}
                    </div>
                </div>
            </div>
        );
    }
}