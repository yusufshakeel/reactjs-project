import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={HomePage} />
                <Route path="/blog" component={BlogPage} />
            </div>
        </BrowserRouter>
    );
};

export default App;
