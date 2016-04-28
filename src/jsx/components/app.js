import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {thunk} from '../utils'

import reducer from '../reducers'
import GamePanel from '../containers/gamePanel'

var store = createStore(reducer, applyMiddleware(thunk));

const App = React.createClass({
    render: function() {
        return <Provider store={store}>
            <GamePanel />
        </Provider>
    }
})

export default App