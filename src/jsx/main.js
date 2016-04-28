"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from './components/app'

// No need for routes but this will serve well as a reference
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('maincontent')
)
