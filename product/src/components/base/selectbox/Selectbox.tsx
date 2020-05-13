import React from 'react';

export interface SelectboxProps {
    answer: string;
    options: string[];
    onHandle(text: string): void;
}
interface State {
    value: string;
}

// todo 언어설정
const disabledMsg = '선택해주세요';

export class Selectbox extends React.Component<SelectboxProps, State> {
    public state = {
        value: '',
    };

    public render() {
        const { options, answer } = this.props;

        return (
            <div className={`base-selectbox ${answer === '' ? 'no-value' : ''}`}>
                <div className="select-wrapper">
                    <select className="form-control" value={answer} onChange={this.handleChange}>
                        <option value="" disabled={true} >{disabledMsg}</option>
                        {options.map((option, index) => {
                            return (
                                <option key={index} id={`${index}`} value={option}>{option}</option>
                            );
                        })}
                    </select>
                    <i className="fa arrow"></i>
                </div>
            </div>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { onHandle } = this.props;
        const text = event.target.value;
        this.setState({ value: text });
        if (onHandle)
            onHandle(text);
    }
}