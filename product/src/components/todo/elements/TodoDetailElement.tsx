import React from 'react';

interface Props {
    label: string;
    contents: string;
}
interface State {

}

export class TodoDetailElement extends React.Component<Props, State> {
    public state = {};

    public render() {
        const { label, contents } = this.props;
        return (
            <div className="todo-element">
                <span className="todo-element__label">{label}</span>
                <span className="todo-element__contents">{contents}</span>
            </div>
        );
    }
}

