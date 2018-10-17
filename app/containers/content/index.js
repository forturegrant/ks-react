import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'
import Console from './console/index.js'
import LoanBefore from './loanBefore/index.js'
import './index.less'
import './new-index.css'
import './public-content.css'

const menu = [
    {menuUrl: 'console', menuName: '控制台'},
    {menuUrl: 'loanBefore', menuName: '进件管理'},
    {menuUrl: 'loanLater', menuName: '贷后'},
    {menuUrl: 'customer', menuName: '客户'},
    {menuUrl: 'operationManager', menuName: '运营管理'},
    {menuUrl: 'application', menuName: '应用'},
    {menuUrl: 'set', menuName: '设置'},
    {menuUrl: 'detail', menuName: '数据'}
]

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: 0
        }
        //this.changeBgColor = this.changeBgColor.bind(this);
    }

    changeBgColor(index) {
        this.setState({
            bgColor: index
        })
    }

    render() {
        var {url} = this.props.match;
        return (
            <div>
                <div className="" style={{overflow:'hidden'}}>
                    {/*<!--此处作为更新视图容器-->*/}
                    <div className="nav-bg">
                        <div className="nav-left floatLeft">
                            <div className="nav-left-icon floatLeft"></div>
                            <div className="nav-left-title floatLeft">凯盛金融</div>
                            <div className="nav-left-bor floatLeft"></div>
                            <div className="nav-left-name floatLeft">金融管理系统</div>
                        </div>
                        <div className="nav-center floatLeft">
                            <ul id="nav-parent">
                                {
                                    menu.map((item, index) =>
                                        (<li key={index} className={`index ${this.state.bgColor === index ? "actives" : ""}`}
                                             onClick={this.changeBgColor.bind(this, index)}>
                                            <Link className="js-menu-item"
                                                  to={`${url}/${item.menuUrl}`}>{item.menuName}</Link>
                                        </li>)
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path={`${url}/console`} component={Console}/>
                    <Route path={`${url}/loanBefore`} component={LoanBefore}/>
                    <Route path="/console" component={Console}/>
                    <Route path="/console" component={Console}/>
                    <Route path="/console" component={Console}/>
                    <Route path="/console" component={Console}/>

                </Switch>
            </div>
        )
    }

    componentDidMount() {
        //console.log(this.props);
    }

}