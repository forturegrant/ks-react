import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'
import Console from './console/index.js'

export default class Content extends Component {
    render(){
        return(
            <div>
                <div className="">
                    {/*<!--此处作为更新视图容器-->*/}
                    <div className="nav-bg">
                        <div className="nav-left floatLeft">
                            <div className="nav-left-icon floatLeft"></div>
                            <div className="nav-left-title floatLeft">凯盛金融</div>
                            <div className="nav-left-bor floatLeft"></div>
                            <div className="nav-left-name floatLeft">金融管理系统</div>
                        </div>
                        <div className="nav-center floatLeft">
                            <ul>
                                <li className="index actives">
                                    <Link className="js-menu-item" to="/console">控制台</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/loanBefore">进件管理</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/loanLater">贷后</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/customer">客户</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/operationManager">运营管理</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/application">应用</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/set">设置</Link>
                                </li>
                                <li className="index">
                                    <Link className="js-menu-item" to="/detail">数据</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Route path="/console" component={Console} />
            </div>
        )
    }
}