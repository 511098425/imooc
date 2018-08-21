import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from  'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/boss/bossinfo';
import GeniusInfo from './container/genius/geniusinfo';
import AuthRoute from './component/authRoute/authRoute';
import Dashboard from './component/dashboard/dashboard';
import reducers from './reducer';
import './config';
import './index.css'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    composeWithDevTools()
))

ReactDOM.render(
    (<Provider store = {store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path="/bossinfo" component={BossInfo}/>
                    <Route path="/geniusinfo" component={GeniusInfo}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
