import React from 'react';
import { TextInput } from '../..';

interface Props {
    label: string;
    value: string;
    placeHolder: string;
    onHandle(text: string): void;
}
interface State {

}

export class TodoTextInputElement extends React.Component<Props, State> {
    public state = {};
    public render() {
        const { label , value, placeHolder, onHandle } = this.props;
        return (
            <div className="todo-element">
                <span className="todo-element__label">{label}</span>
                <TextInput text={value} onHandle={onHandle} placeHolder={placeHolder}></TextInput>
            </div>
        );
    }
}