import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Tabs } from 'antd';
import {
    Link
} from 'react-router-dom'
import RoamTaskWinBox from './common/roamTaskWinBox'

import {fetchGetList} from "../../../actions/common";


class List extends Component {
    constructor(props) {
        super(props)
        //this.changeBgColor = this.changeBgColor.bind(this);
        this.state = {
            roamTask: false
        }
    }

    handleChange(e){
        if(e.target.value === 'reviewOrder'){
            this.setState({
                roamTask: true
            })
        }
    }

    render(){
        const {list} = this.props;
        const {url} = this.props.match;
        return(
            <div>
                <div className="bgSortScroll">
                {/*<!-- ngIf: HbHr.hr54 -->*/}
                <div className="public-bgContent">
                    {/*<!--表单搜索-->*/}
                    <div className="public-bgDate">
                                        <span><input type="text" id="PoInput-formDate" placeholder="开始时间"/><i
                                            className="iconfont icon-riqi"></i></span>
                        <em>&nbsp;&nbsp;~&nbsp;&nbsp;</em>
                        <span><input type="text" id="PoInput-toDate" placeholder="结束时间"/><i
                            className="iconfont icon-riqi"></i></span>
                        <div className="se-re">
                            <select id="seleNames" defaultValue={-1}>
                                <option value="-1" >选择字段</option>
                                <option value="1">借款编号</option>
                                <option value={2}>客户姓名</option>
                                <option value="5">手机号码</option>
                                <option value="3">身份证号码</option>
                                <option value="4">业务员姓名</option>
                            </select>
                            <span className="se-po"></span>
                        </div>
                        <span>
			<input type="text" id="inputNames" placeholder="请输入关键字"/>
		</span>
                        <div className="se-re">
                            <select defaultValue={-1}>
                                <option value="-1">分期</option>
                                <option label="1个月" value="1">1个月</option>
                                <option label="2个月" value="number:7">2个月</option>
                                <option label="3个月" value="number:8">3个月</option>
                                <option label="4个月" value="number:38">4个月</option>
                                <option label="5个月" value="number:32">5个月</option>
                                <option label="6个月" value="number:15">6个月</option>
                                <option label="7个月" value="number:35">7个月</option>
                                <option label="8个月" value="number:36">8个月</option>
                                <option label="9个月" value="number:16">9个月</option>
                                <option label="10个月" value="number:25">10个月</option>
                                <option label="11个月" value="number:37">11个月</option>
                                <option label="12个月" value="number:17">12个月</option>
                                <option label="14个月" value="number:41">14个月</option>
                                <option label="24个月" value="number:39">24个月</option>
                            </select>
                            <span className="se-po"></span>
                        </div>
                        <div className="se-re">
                            <select defaultValue={-1}>
                                <option value="-1">贷款方式</option>
                                <option value="1">按揭短拆</option>
                                <option value="2">红本抵押</option>
                                <option value="3">红本质押</option>
                            </select>
                            <span className="se-po"></span>
                        </div>
                        <button>
                            <i className="iconfont icon-sousuo"></i>
                        </button>
                    </div>
                    {/*<!--提示操作-->*/}
                    <div className="public-bghint">
                                        <span style={{cursor: 'pointer'}}>提示操作&nbsp;&nbsp;<i
                                            className="iconfont icon-icon-copy-copy"></i></span>
                        <span className="calNum">筛选<span></span>条结果</span>
                    </div>
                    <ul className="public-ulList">
                        <menu-content>
                            <li>显示拥有该栏目管理权限的数据；</li>
                            <li>拥有权限的管理员会显示对应的操作按钮；</li>
                            <li>业务员，只允许查看自己订单录入的数据，不能够查看到其他业务员的数据；</li>
                            <li>业务组长，可以查看到所辖业务员的所有数据；</li>
                        </menu-content>
                    </ul>
                    <div style={{height: '20px'}}></div>
                    {/*<!--tabel 列表-->*/}
                    <div className="table-box table-box-hidden">
                        <div className="table-scroll">
                            <table className="table public-table PoInput">
                                <thead>
                                <tr>
                                    {/*<!-- ngIf: !operation.examine -->*/}
                                    <td>选择</td>
                                    {/*<!-- end ngIf: !operation.examine -->*/}
                                    <td>创单时间</td>
                                    <td>借款编号</td>
                                    <td>产品</td>
                                    <td>客户姓名</td>
                                    <td>期限</td>
                                    <td>借款金额</td>
                                    <td>业务员</td>
                                    <td>部门</td>
                                    <td>状态</td>
                                    <td>操作</td>
                                </tr>
                                </thead>
                                <tbody>
                                {list.map((item, index) => (
                                    <tr className="table-tr-hover" key={index}>
                                        <td>
                                            <input type="checkbox" name="ch_id" value={item.id} />
                                        </td>
                                        <td>{item.found_time}</td>
                                        <td>{/*{{#IF_GT before_s_id node_id}}<span style="background: #e55a5b; padding: 3px 15px; color: #fff;">{{loan_number}}</span>{{else}}{{loan_number}}{{/IF_GT}}*/}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.personal_name}</td>
                                        <td>{item.term_name}</td>
                                        <td>{item.apply_money}</td>
                                        <td>{item.user_name}</td>
                                        <td>
                                            {item.d_name3 ? `<span></span>${item.d_name3}`: ''}
                                            {item.d_name2 ? item.d_name2: ''}
                                            {item.d_name ? item.d_name: ''}
                                        </td>
                                        <td>{item.s_name}</td>
                                        <td>
                                            <div className="se-re sel-blue">
                                                <select
                                                    className="tabHint" onChange={this.handleChange.bind(this)} defaultValue="-1">
                                                    <option value="-1">选择操作</option>
                                                    <option value="reviewOrder">马上流转</option>
                                                </select>
                                                <span className="se-po-blue"></span>
                                            </div>
                                            <button className="tabHint" id="{{id}}">
                                                操作记录
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="public-botPage">
                        {/*<!-- ngIf: operation.batch -->*/}
                        <div className="public-botPage-left">
                            <label id="ch_id_all">
                                &nbsp;&nbsp;&nbsp;<input type="checkbox" name="ch_id_all"/>
                                &nbsp;全选
                            </label>
                            <div className="se-re">
                                <select className="tabHint PoListSele" defaultValue={-1}>
                                    <option value={-1}>批量操作</option>
                                    {/*<!-- ngIf: HbHr.hr57 && operation._type =='orderList' -->*/}
                                    <option value={1}>删除所选</option>
                                    {/*<!-- end ngIf: HbHr.hr57 && operation._type =='orderList' -->*/}
                                    {/*<!-- ngIf: operation._type !=='orderList' -->*/}
                                </select>
                                <span className="se-po"></span>
                            </div>
                            {/*<!-- ngIf: HbHr.hr58 && operation._type=='orderList' -->*/}
                            <button className="tabHint">
                                <Link to={`${url}/productOrderIn`}>录入订单</Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
                <RoamTaskWinBox roamTask={this.state.roamTask} />
            </div>
    )
    }

    componentDidMount() {
        this.props.dispatch(fetchGetList({
            roleId: 21,
            audit_status: '',
            pageNum: 1,
            susp_status: 1
        }));
    }
}


const mapStateToProps = (state) => ({
    //isFetching: state.globalState.isFetching
    list: state.LoanBefore.getList.list
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

