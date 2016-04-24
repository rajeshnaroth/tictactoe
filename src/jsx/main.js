"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import GamePanel from './containers/gamePanel'
import reducer from './reducers'

var store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<GamePanel />
	</Provider>,
	document.getElementById('maincontent')
)
