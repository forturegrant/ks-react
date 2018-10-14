import React from 'react'
import { HashRouter as Router , Route, IndexRoute ,hashHistory} from 'react-router-dom'
import App from './containers/index'
import Login from './containers/login/index'
/*import Register from './containers/register/console'*/
import history from './history';


export default () =>(
    <Router history={history}>
        <div>
            <Route path="/" component={App} />
        </div>
    </Router>
)
