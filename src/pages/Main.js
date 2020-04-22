import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BoardPage from './BoardPage';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/board' component={BoardPage}></Route>
        </Switch>
    );
}

export default Main;