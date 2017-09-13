import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/app.jsx';
import About from './components/about.jsx';
import Repos from './components/repos.jsx';

var container = document.getElementById('app');

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), container);