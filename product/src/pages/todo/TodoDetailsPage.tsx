import React from 'react';
import { TodoModify } from '../../containers';
import { TodoDetails } from '../../components';


interface Props {

}
interface State {
    isModify: boolean;
}

const data = { id: 1, title: '1' };

export class TodoDetailsPage extends React.Component<Props, State> {
    public state = {
        isModify: false,
    };

    public render() {
        const { isModify } = this.state;
        return isModify
            ? (<TodoModify item={data} onHandle={this.onModify} />)
            : (<TodoDetails item={data} onHandle={this.onModify} />);
    }

    private onModify = () => {
        const { isModify } = this.state;
        this.setState({ isModify: !isModify });
    }
}