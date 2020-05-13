import React from 'react';
import { Selectbox } from '../../base/selectbox/Selectbox';

interface Props {
    label: string;
    value: string;
    options: string[];
    onHandle(text: string): void;
}
interface State {

}

export class TodoSelectElement extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { label, value, options, onHandle } = this.props;
        return (
            <div className="todo-element">
                <span className="todo-element__label">{label}</span>
                <Selectbox answer={value} options={options} onHandle={onHandle} />
            </div>
        );
    }
}