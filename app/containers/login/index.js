import './index.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Row, Col, Spin, Input, Icon, Button} from 'antd'
import {fetchLogin} from "../../actions/common";
import {fetchGetCode} from "../../actions/common";
import {getCodeAction} from '../../reducers/login/getCode.js'
//import {startLogin, endLogin} from '../../reducers/login'

const FormItem = Form.Item


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            username: '',
            password: '',
            changeCode: ''
        }
        this.getUserName = this.getUserName.bind(this)
        this.getPassWord = this.getPassWord.bind(this)
        this.getImgCode = this.getImgCode.bind(this)
        this.getCode = this.getCode.bind(this)
        this.logIn = this.logIn.bind(this)
    }

    getUserName(e) {
        this.setState({
            username: e.target.value
        })
    }

    getPassWord(e) {
        this.setState({
            password: e.target.value
        })
    }

    getImgCode(e) {
        this.setState({
            changeCode: e.target.value
        })
    }

    getCode() {
        this.props.dispatch(fetchGetCode(getCodeAction))
        //return false;
    }

    logIn() {
        this.props.dispatch(fetchLogin({
            username: this.state.username,
            password: this.state.password,
            changeCode: this.state.changeCode,
            token: this.props.getCode.token
        }))
    }

    componentWillMount() {
        this.props.dispatch(fetchGetCode(getCodeAction))
    }

    render() {
        const {img} = this.props.getCode
        const {logined} = this.props.logined
        return (
            <div className="logIn-container position-view">
                <div className="logIn-center">
                    <div className="logIn-border">
                        <div className="logIn-content">
                            <div className="logIn-content-left"></div>
                            <div className="logIn-content-right">
                                <form role="form" id="login-form">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <input id="username" type="text"
                                                       className="form-control logIn-height logIn-defaultUser"
                                                       placeholder="用户名/员工号/手机号码" onChange={this.getUserName}/>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <input id="password" type="password"
                                                       className="form-control logIn-height logIn-defaultPsw"
                                                       placeholder="密码" onChange={this.getPassWord}/>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <input id="changeCode" type="text"
                                                       className="form-control logIn-height logIn-Code logIn-defaultInputCode"
                                                       placeholder="验证码" onChange={this.getImgCode}/>
                                                <span
                                                    className="btn btn-default logIn-height logIn-Code logIn-defaultCheckCode getCode"
                                                    onClick={this.getCode}>
                                                    <img className="logIncodeImg codeImg" src={img}/>
                                                </span>
                                                <span id="login-btn"
                                                      className="btn btn-default logIn-height logIn-btn logIn-hover"
                                                      onClick={this.logIn}>登录</span>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </form>


                                <div className="logIn-welcome">
                                    <span className="user"></span>
                                    <span>,欢迎您回来！正在为您跳转页面...</span>
                                    <span className="intervalSecond">3</span>
                                    <span>s</span>
                                </div>

                            </div>
                        </div>
                        <div className="logIn-bottomTitle">
                            Copyright © 2016~<span className="year">2018</span>深圳市凯盛资产管理有限公司 粤ICP备17016486号-1技术支持：<u><a
                            href="#" target="_blank">前海米奇（深圳）科技 </a></u>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    logined: state.login.login,
    getCode: state.login.getCode
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(login)