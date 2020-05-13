import React from 'react';
import { Textarea } from '../../base/textarea/Textarea';

interface Props {
    label: string;
    value: string;
    placeHolder: string;
    onHandle(text: string): void;
}
interface State {

}

export class TodoTextareaElement extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { label, value, placeHolder, onHandle } = this.props;
        return (
            <div className="todo-element">
                <span className="todo-element__label">{label}</span>
                <Textarea text={value} onHandle={onHandle} placeHolder={placeHolder} />
            </div>
        );
    }
}