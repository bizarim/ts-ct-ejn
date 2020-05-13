import React from 'react';
import { TodoSummary } from '../summary/TodoSummary';

interface Props {

}
interface State {

}

const list = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
];

export class TodoSummaryList extends React.Component<Props, State> {
    public state = {};

    public render() {
        return (
            <div className="search-container">
                <div className="search-container__title">
                    <span>Search</span>
                </div>
                <div className="search-container__body">
                    <div className="search-container__body__items">
                        {list.map(a => <TodoSummary item={a} />)}
                    </div>
                </div>
            </div>
        );
    }
}