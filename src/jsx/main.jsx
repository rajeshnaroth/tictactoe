"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'
import reducer from './reducers'
console.log(App)

var store = createStore(reducer)
console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('maincontent')
)
