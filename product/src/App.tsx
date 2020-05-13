import React, { Component } from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { AppBody, AppHeader, ErrorWrapper } from './components';

const history = createBrowserHistory();

export class App extends Component {
    public state = {};

    public render() {
        return (
            <Router history={history}>
                <ErrorWrapper>
                    <AppHeader />
                    <AppBody />
                </ErrorWrapper>
            </Router>
        );
    }
}
