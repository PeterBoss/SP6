import React from 'react';
import ReactDOM from 'react-dom';
import App from './UsedCarsApp';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import UsedCarsView from './usedcarsview/UsedCarsView'
import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App}>
            <Route
                path="/"
                component={UsedCarsView}
            />
        </Route>
    </Router>

    , document.getElementById('root')
);
