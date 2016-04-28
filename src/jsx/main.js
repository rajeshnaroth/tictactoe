"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from './utils'

import GamePanel from './containers/gamePanel'
import reducer from './reducers'

var store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<GamePanel />
	</Provider>,
	document.getElementById('maincontent')
)
