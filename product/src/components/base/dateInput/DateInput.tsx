import React from 'react';

export interface DateInputProps {
    text: string;
    onHandle(text: string): void;
}
interface State {
    value: string;
}

export class DateInput extends React.Component<DateInputProps, State> {
    public state = {
        value: this.props.text,
    };
    public render() {
        const { value } = this.state;
        return (
            <div className="date-input">
                <input
                    name="input-date"
                    type="date"
                    value={value}
                    onChange={this.onChange}
                />
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const { onHandle } = this.props;
        this.setState({ value: value });

        if (onHandle)
            onHandle(value);
    };
}