import React, {Component, PropTypes} from 'react'
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './login/index.js'
import Content from './content/index.js'
import '../style/style.less'
import './index.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {isFetching}= this.props
        return (
            <div>
                {isFetching && <div id="loading" className="mloading-container">
                    <div className="mloading active">
                        <div className="mloading-body">
                            <div className="mloading-bar" style={{marginTop: '0px', marginLeft: '-27.5px'}}>
                                <img className="mloading-icon"
                                     src={require('../images/loading.gif')}/>
                                <span className="mloading-text"></span></div>
                        </div>
                    </div>
                </div>}
                <Route path="/login" component={Login} />
                <Route path="/content" component={Content} />
                <div className="winBoxPlus">
                    {/*<!-- 加载弹窗盒子容器 -->*/}
                </div>
                <div className="mesFalse mes" style={{display:'none'}}>
                    <div>
                        <i className="iconfont icon-cuowu"></i>
                        <span className="errMes">错误信息提醒</span>
                    </div>
                </div>
                <div className="mesTrue mes" style={{display:'none'}}>
                    <div>
                        <i className="iconfont icon-zhengque"></i>
                        <span className="sucMes">登录成功</span>
                    </div>
                </div>
                <div className="mesI mes" style={{display:'none'}}>
                    <div>
                        <i className="iconfont icon-tips2"></i>
                        <span className="IMes">感叹号</span>
                    </div>
                </div>
                <div className="no-show">
                    <i className="iconfont icon-message clickIcon"></i>
                </div>
                <div className="all-messg" style={{display:'none'}}>
                    <div className="red-messg">
                        <span>消息提醒</span>
                        <span className="point-messg"><i className="iconfont icon-cuowu"></i></span>
                    </div>
                    <div className="show-messg">
                        <ul className="ul-messg">
                            <li className="li-messg down-messg">
                                <i className="iconfont icon-message"></i>
                                <span className="word-messg"></span>
                            </li>
                            <li className="li-messg down-messg" >
                                <i className="iconfont icon-message"></i>
                                <span className="word-messg">暂无消息</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.props.history.push('/login');
        }
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

