import React from 'react'
import {Router, Route} from 'react-router-dom'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './store/configureStore'
import history from './history.js'
import App from './containers/index'


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
}