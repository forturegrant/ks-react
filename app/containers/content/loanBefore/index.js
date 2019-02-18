import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Link,
    Route,
    Switch
} from 'react-router-dom'
import List from './list'
import ProductOrderIn from './productOrderIn'
import OrderIn from './orderIn.js'
import RoamTaskWinBox from './common/roamTaskWinBox'
/*import {fetchQueryNodeFromInfoAllByONid} from '../../../actions/common';*/

export default class LoanBefore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: 0,
            roamTask: false
        }
    }

    changeRoamTask(){
        this.setState({
            roamTask: !this.state.roamTask
        })
    }

    render() {
        const {url} = this.props.match;
        return (
            <div className="loanBefore-container position-view" style={{marginTop: '66px'}}>
                <div className="temleft">
                    <ul className="loanBeforeList temList">
                        {/*!-- ngIf: HbHr.hr12 -->*/}
                        <li className="light">
                            <i className="redCir"></i>
                            订单录入
                        </li>
                        {/*<!-- end ngIf: HbHr.hr12 -->*/}
                        {/*<!-- ngIf: HbHr.hr14 -->*/}
                        <li>
                            <i className="redCir"></i>
                            订单面审
                        </li>
                        {/*<!-- end ngIf: HbHr.hr14 -->*/}
                        {/*<!-- ngIf: HbHr.hr15 -->*/}
                        <li>
                            <i className="redCir"></i>
                            风控专员
                        </li>
                        {/*<!-- end ngIf: HbHr.hr15 -->*/}
                        {/*<!-- ngIf: HbHr.hr16 -->*/}
                        <li>
                            <i className="redCir"></i>
                            风控组长
                        </li>
                        {/*<!-- end ngIf: HbHr.hr16 -->*/}
                        {/*<!-- ngIf: HbHr.hr17 -->*/}
                        <li>
                            <i className="redCir"></i>
                            门店经理
                        </li>
                        {/*<!-- end ngIf: HbHr.hr17 -->*/}
                        {/*<!-- ngIf: HbHr.hr19 -->*/}
                        <li>
                            <i className="redCir"></i>
                            区域经理
                        </li>
                        {/*<!-- end ngIf: HbHr.hr19 -->*/}
                        {/*<!-- ngIf: HbHr.hr22 -->*/}
                        <li>
                            <i className="redCir"></i>
                            最终审核
                        </li>
                        {/*<!-- end ngIf: HbHr.hr22 -->*/}
                    </ul>
                </div>
                <div className="temright">
                    {/*<!-- ngInclude: loanBefore -->*/}
                    <div className="includeStyle">{/*<!--定位div容器-->*/}
                        <div className="bgSortTwo">
                            <div className="public-top">
                                <i className="iconfont icon-shouyeshouye"></i>
                                <span>您的位置：&gt;已录列表</span>
                                <span></span>
                            </div>
                            {/*<!--订单录入-->*/}
                            <div className="public-bgContent">
                                <div className="public-bgListNav">
                                    <span className="public-input">订单录入</span>
                                    {/*<!-- ngIf: HbHr.hr54 -->*/}<span className="public-List publicListHover">已录列表</span>{/*<!-- end ngIf: HbHr.hr54 -->*/}
                                    <span className="public-List">客户列表</span>
                                </div>
                            </div>
                            {/*<!--滚动div   -->*/}
                            <Switch>
                                <Route exact path={`${url}/`} render={props=><List {...props} changeRoamTask={this.changeRoamTask.bind(this)}/>}/>
                                <Route path={`${url}/productOrderIn`} component={ProductOrderIn} />
                                <Route path={`${url}/orderIn`} component={OrderIn} />
                            </Switch>

                            <RoamTaskWinBox roamTask={this.state.roamTask} changeRoamTask={this.changeRoamTask.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


/*export default connect(
    (state,ownProps) => ({
        content: state.loanBefore,
    }),{
        fetchQueryNodeFromInfoAllByONid
    }
)(LoanBefore)*/
