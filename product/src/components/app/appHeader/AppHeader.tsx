import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}
interface State {

}

export class AppHeader extends React.Component<Props, State> {
    public state = {};

    public render() {
        return (
            <div className="app-header">
                <div className="app-header__wrap">
                    <div className="app-header__wrap__left">
                        <img src={require('../../../assets/logo.svg')} alt="logo"></img>
                        <Link to="/" className="app-header__wrap__left__title">Todo List</Link>
                    </div>
                    <div className="app-header__wrap__right">
                        <Link to="/add" className="app-header__wrap__right__title">Add</Link>
                        <Link to="/todos" className="app-header__wrap__right__title">Todos</Link>
                    </div>
                </div>
            </div>
        );
    }
}