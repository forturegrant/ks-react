import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class LoanBefore extends Component {
    render(){
        return(
            <div className="loanBefore-container position-view"  style={{marginTop:'66px'}}>
                <div className="temleft">
                    <ul className="loanBeforeList temList">
                        {/*!-- ngIf: HbHr.hr12 -->*/}<li className="light">
                        <i className="redCir"></i>
                        订单录入
                    </li>{/*<!-- end ngIf: HbHr.hr12 -->*/}
                        {/*<!-- ngIf: HbHr.hr14 -->*/}<li>
                        <i className="redCir"></i>
                        订单面审
                    </li>{/*<!-- end ngIf: HbHr.hr14 -->*/}
                        {/*<!-- ngIf: HbHr.hr15 -->*/}<li>
                        <i className="redCir"></i>
                        风控专员
                    </li>{/*<!-- end ngIf: HbHr.hr15 -->*/}
                        {/*<!-- ngIf: HbHr.hr16 -->*/}<li>
                        <i className="redCir"></i>
                        风控组长
                    </li>{/*<!-- end ngIf: HbHr.hr16 -->*/}
                        {/*<!-- ngIf: HbHr.hr17 -->*/}<li>
                        <i className="redCir"></i>
                        门店经理
                    </li>{/*<!-- end ngIf: HbHr.hr17 -->*/}
                        {/*<!-- ngIf: HbHr.hr19 -->*/}<li>
                        <i className="redCir"></i>
                        区域经理
                    </li>{/*<!-- end ngIf: HbHr.hr19 -->*/}
                        {/*<!-- ngIf: HbHr.hr22 -->*/}<li>
                        <i className="redCir"></i>
                        最终审核
                    </li>{/*<!-- end ngIf: HbHr.hr22 -->*/}
                    </ul>
                </div>
                <div className="temright">
                            {/*<!-- ngInclude: loanBefore -->*/}<div className="includeStyle">{/*<!--定位div容器-->*/}
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
                        <div className="bgSortScroll">
                            {/*<!-- ngIf: HbHr.hr54 -->*/}<div className="public-bgContent">
                            {/*<!--表单搜索-->*/}
                            <div className="public-bgDate">
                                <span><input type="text" id="PoInput-formDate" placeholder="开始时间" /><i className="iconfont icon-riqi"></i></span>
                                <em>&nbsp;&nbsp;~&nbsp;&nbsp;</em>
                                <span><input type="text" id="PoInput-toDate" placeholder="结束时间" /><i className="iconfont icon-riqi"></i></span>
                                <div className="se-re">
                                    <select id="seleNames">
                                        <option value="" selected="selected">选择字段</option>
                                        <option value="1">借款编号</option>
                                        <option value="2">客户姓名</option>
                                        <option value="5">手机号码</option>
                                        <option value="3">身份证号码</option>
                                        <option value="4">业务员姓名</option>
                                    </select>
                                    <span className="se-po"></span>
                                </div>
                                <span>
			<input type="text" id="inputNames" placeholder="请输入关键字" />
		</span>
                                <div className="se-re">
                                    <select><option value="" className="" selected="selected">分期</option><option label="1个月" value="number:6">1个月</option><option label="2个月" value="number:7">2个月</option><option label="3个月" value="number:8">3个月</option><option label="4个月" value="number:38">4个月</option><option label="5个月" value="number:32">5个月</option><option label="6个月" value="number:15">6个月</option><option label="7个月" value="number:35">7个月</option><option label="8个月" value="number:36">8个月</option><option label="9个月" value="number:16">9个月</option><option label="10个月" value="number:25">10个月</option><option label="11个月" value="number:37">11个月</option><option label="12个月" value="number:17">12个月</option><option label="14个月" value="number:41">14个月</option><option label="24个月" value="number:39">24个月</option></select>
                                    <span className="se-po"></span>
                                </div>
                                <div className="se-re">
                                    <select>
                                        <option value="" selected="selected">贷款方式</option>
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
                                <span style={{cursor: 'pointer'}}>提示操作&nbsp;&nbsp;<i className="iconfont icon-icon-copy-copy"></i></span>
                                <span className="calNum">筛选<span>364</span>条结果</span>
                            </div>
                            <ul className="public-ulList"><menu-content>
                                <li>显示拥有该栏目管理权限的数据；</li>
                                <li>拥有权限的管理员会显示对应的操作按钮；</li>
                                <li>业务员，只允许查看自己订单录入的数据，不能够查看到其他业务员的数据；</li>
                                <li>业务组长，可以查看到所辖业务员的所有数据；</li>
                            </menu-content></ul>
                            <div style={{height: '20px'}}></div>
                            {/*<!--tabel 列表-->*/}
                            <div className="table-box table-box-hidden">
                                <div className="table-scroll-content">
                                    <table className="table public-table PoInput">
                                        <thead>
                                        <tr>
                            {/*<!-- ngIf: !operation.examine -->*/}<td>选择</td>{/*<!-- end ngIf: !operation.examine -->*/}
                                            <td>创单时间</td>
                                            <td>借款编号</td>
                                            <td>客户姓名</td>
                                            <td>期限</td>
                                            <td>借款金额</td>
                                            <td>业务员</td>
                                            <td>部门</td>
                                            <td>状态</td>
                                        </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                                <div className="table-scroll-right">
                                    <table className="table public-table PoInput">
                                        <thead>
                                        <tr>
                                            <td className="lastTd">操作</td>
                                        </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="public-botPage">
                            {/*<!-- ngIf: operation.batch -->*/}<div className="public-botPage-left">
                                <label id="ch_id_all">
                                    &nbsp;&nbsp;&nbsp;<input type="checkbox" name="ch_id_all"/>
                                    &nbsp;全选
                                </label>
                                <div className="se-re">
                                    <select className="tabHint PoListSele">
                                        <option value="-1" selected="selected">批量操作</option>
                            {/*<!-- ngIf: HbHr.hr57 && operation._type =='orderList' -->*/}<option value="1">删除所选</option>{/*<!-- end ngIf: HbHr.hr57 && operation._type =='orderList' -->*/}
                            {/*<!-- ngIf: operation._type !=='orderList' -->*/}
                                    </select>
                                    <span className="se-po"></span>
                                </div>
                            {/*<!-- ngIf: HbHr.hr58 && operation._type=='orderList' -->*/}<button className="tabHint">
                                录入订单
                            </button>{/*<!-- end ngIf: HbHr.hr58 && operation._type=='orderList' -->*/}
                            </div>{/*<!-- end ngIf: operation.batch -->*/}
                            </div>
                        </div>{/*<!-- end ngIf: HbHr.hr54 -->*/}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}