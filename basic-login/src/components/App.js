import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import LoginPage from './pages/LoginPage';
import LoggedInPage from './pages/LoggedInPage';

import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
));
// const store = createStore(rootReducer);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/loggedin" component={LoggedInPage} />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
