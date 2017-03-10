import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from '../utils'

import reducer from '../reducers'
import GamePanel from '../containers/gamePanel'

let store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <GamePanel />
    </Provider>
)

export default App