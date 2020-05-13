import React from 'react';
import { Route, Switch } from 'react-router';
import { TodoSearchPage } from '../../../pages/todo/TodoSearchPage';
import { TodoDetailsPage } from '../../../pages/todo/TodoDetailsPage';
import { TodoAddPage } from '../../../pages/todo/TodoAddPage';

interface Props {

}
interface State {

}

export class AppBody extends React.Component<Props, State> {
    public render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path="/" component={TodoSearchPage} />
                    <Route exact={true} path="/todos" component={TodoSearchPage} />
                    <Route exact={true} path="/add" component={TodoAddPage} />
                    <Route exact={true} path="/todos/:id" component={TodoDetailsPage} />
                </Switch>
            </div>
        );
    }
}