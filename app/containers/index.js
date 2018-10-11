import React, {Component, PropTypes} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Login from './login/index.js'
import '../style/style.less'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        if (!token) {
            history.pushState({}, 0, 'http://' + window.location.host + '/#/login');
        }
    }

    render() {
        const {isFetching}= this.props
        return (
            <div>
                {isFetching && <div id="loading" style={{display: 'none'}} className="mloading-container">
                    <div className="mloading active">
                        <div className="mloading-body">
                            <div className="mloading-bar" style={{marginTop: '0px', marginLeft: '-27.5px'}}>
                                <img className="mloading-icon"
                                     src={require('../images/loading.gif')}/>
                                <span className="mloading-text"></span></div>
                        </div>
                    </div>
                </div>}
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.globalState.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)