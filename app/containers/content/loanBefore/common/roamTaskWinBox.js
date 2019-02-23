import React, {Component} from 'react'
import {connect} from 'react-redux'
import {closeRoamTask} from "../../../../actions/common";

class roamTaskWinBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {roamTask, closeRoamTask} = this.props;
        const {attTypeInfos ,feeInfos,orderInfos,productInfos} = this.props.content
        return (
            <div className="winBox processForm_winBox" style={{display: roamTask ? 'block' : 'none'}}>
                <div className="winBox1">
                    <div className="winBox3">
                        <div className="dealrecord">
                            <div className="headerBox">
                                <span className="headerSpan">角色审批</span>
                                <i className="iconfont icon-wrong headerIcon" id="show" onClick={() => closeRoamTask()}></i>
                            </div>

                            <div className="resultBox">
                                <div className="centerBox" style={{maxHeight: '600px', overflowY: 'auto'}}>
                                    <div className="resultPadd formBox"
                                         style={{padding: '0px 17px 0px 20px'}}>
                                        <table className="resultTab approve" style={{marginTop: '20px'}}>
                                            <tbody className="role_list">
                                            <tr className="esa">
                                                <td><span style={{color: '#FF0404'}}>*</span>审核结果：</td>
                                                <td>
                                                    <label><input type="radio" name="faceResult" value="1"/>审核通过</label>
                                                    <label><input type="radio" name="faceResult" value="2"/>拒绝审核</label>
                                                </td>
                                            </tr>
                                            <table class="resultTab attachment" style="margin-top: 20px">
                                                <tbody>
                                                {attTypeInfos.map((item,index) =>(
                                                    <tr class="">
                                                        <td class="">{item.type_name}</td>
                                                        <td class="unload">
                                                            <div class="_result">
                                                                <label><input type="radio" {item.attachType=== 1? checked: ''}
                                                                              value="1" />正常</label>
                                                                <label><input type="radio" {item.attachType=== 2? checked: ''}
                                                                              value="2" />异常</label>
                                                            </div>
                                                            <em id="imgTerm_0" class="viewPic" data-id={item.attchment_type_id}
                                                                data-attachname={item.type_name}>上传图片</em>
                                                            <div class="imgArr minImg">
                                                                <span style={{display: 'none'}} class="_pre " ></span>
                                                                <div class="cover" style="overflow-y: hidden; height: 70px; margin: 0 24px;">
                                                                    <div id={`gallery${item.attchment_type_id}`} attachId={item.attchment_type_id}
                                                                         attachname={item.type_name}
                                                                         style="position: relative; left: 0;">
                                                                        {item.real_data.map(()=>(
                                                                            <li href="{{this}}"><img class="img_00" url="{{this}}" src="{{this}}/tupian_compress">
                                                                                <i class="delSingleAttach iconfont icon-minus">
                                                                                </i>
                                                                            </li>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <span style="display: none" class="_next " ng-if="item.isImg" ng-click="_next(key)"></span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    )
                                                )}

                                                {{/each}}
                                                </tbody>
                                            </table>
                                            {{/if}}
                                            {/*/!*{{#if admins.[0]}}*!/*/}
                                            {/*<tr className="role">*/}
                                            {/*<td><span style={{color: '#D5332C'}}>*</span>请选对象</td>*/}
                                            {/*<td className="tdSelect">*/}
                                            {/*<div className="se-re">*/}
                                            {/*<select id="role_select">*/}
                                            {/*<option value="">请选择{{role_name}}</option>*/}
                                            {/*/!*{{#each admins}}*/}
                                            {/*{{#if realName}}*!/*/}
                                            {/*<option value="{{id}}">{{realName}}</option>*/}
                                            {/*/!*{{/if}}*/}
                                            {/*{{/each }}*!/*/}
                                            {/*</select>*/}
                                            {/*</div>*/}
                                            {/*</td>*/}
                                            {/*</tr>*/}
                                            {/*<tr className="chooseRole" style={{display: 'none'}}>*/}
                                            {/*<td>已选择：</td>*/}
                                            {/*<td className="tdWei selPers">*/}
                                            {/*</td>*/}
                                            {/*</tr>*/}
                                            {/*/!*{{else}}*!/*/}
                                            {/*<tr className="role">*/}
                                            {/*<td><span style={{color: '#D5332C'}}>*</span>请选对象</td>*/}
                                            {/*<td className="tdSelect">*/}
                                            {/*<div className="se-re">*/}
                                            {/*<select id="role_select">*/}
                                            {/*<option value="">无</option>*/}
                                            {/*/!*{{#each admins}}*/}
                                            {/*{{#if realName}}*!/*/}
                                            {/*<option value="{{id}}">{{realName}}</option>*/}
                                            {/*/!*{{/if}}*/}
                                            {/*{{/each }}*!/*/}
                                            {/*</select>*/}
                                            {/*当前无审批人员，请联系管理员进行创建！*/}
                                            {/*</div>*/}
                                            {/*</td>*/}
                                            {/*</tr>*/}
                                            {/*/!*{{/if}}*!/*/}
                                            </tbody>
                                        </table>
                                        <div className="deleFooter">
                                            <div className="beizhu assBeizhu"><span>*</span>审核备注</div>
                                            <textarea className="approveRemark"></textarea>
                                            <div className="deleBtn">
                                                <button style={{background: '#E55A5B'}} id="roamTask">确定提交</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => {
       const {roamTask} = state.LoanBefore.roamTask;
       const {content} = state.LoanBefore;
       return {
           roamTask,
           content
       }
    }, {
        closeRoamTask
    }
)(roamTaskWinBox)
