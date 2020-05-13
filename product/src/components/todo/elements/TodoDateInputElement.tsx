import React from 'react';
import { DateInput } from '../../base/dateInput/DateInput';

interface Props {
    label: string;
    value: string;
    onHandle(text: string): void;
}
interface State {

}

export class TodoDateInputElement extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { label , value, onHandle } = this.props;
        return (
            <div className="todo-element">
                <span className="todo-element__label">{label}</span>
                <DateInput text={value} onHandle={onHandle} ></DateInput>
            </div>
        );
    }
}