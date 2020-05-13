import React from 'react';

export interface TextareaProps {
    text: string;
    placeHolder: string;
    onHandle(text: string): void;
}
interface State {
    value: string;
}

export class Textarea extends React.Component<TextareaProps, State> {
    public state = {
        value: this.props.text,
    };
    public render() {
        const { placeHolder } = this.props;
        const { value } = this.state;
        return (
            <textarea
                className="form-textarea"
                placeholder={placeHolder}
                value={value}
                onChange={this.onChange}>
            </textarea>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        const { onHandle } = this.props;
        this.setState({ value: value });

        if (onHandle)
            onHandle(value);
    };
}