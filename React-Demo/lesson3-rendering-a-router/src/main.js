import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import App from './components/app.jsx';
import About from './components/about.jsx';
import Repos from './components/repos.jsx';

var container = document.getElementById('app');

ReactDOM.render((
    /* comment: 
        Hash history works without configuring your server, 
        so if you're just getting started, go ahead and use it. 
        But, we don't recommend using it in production, 
        every web app should aspire to use browserHistory */
    //<Router history={hashHistory}>
    <Router history={browserHistory}> 
        <Route path="/test" component={App}/>
        {/* add the routes here */}
        <Route path="/test/repos" component={Repos}/>
        <Route path="/test/about" component={About}/>
    </Router>
), container);