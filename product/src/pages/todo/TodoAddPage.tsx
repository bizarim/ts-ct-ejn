import React from 'react';
import { TodoAdd } from '../../containers';

interface Props {

}
interface State {

}

export class TodoAddPage extends React.Component<Props, State> {
    public state = {};

    public render() {
        return (<TodoAdd />);
    }
}