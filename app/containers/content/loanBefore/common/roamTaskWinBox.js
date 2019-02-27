import React, {Component} from 'react'
import {connect} from 'react-redux'
import {closeRoamTask} from "../../../../actions/common";
import {fetchRoamTask} from "../../../../actions/common";

class roamTaskWinBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {roamTask, closeRoamTask} = this.props;
        const {attTypeInfos, feeInfos, orderInfos, productInfos} = this.props.content
        return (
            <div className="winBox processForm_winBox" style={{display: roamTask ? 'block' : 'none'}}>
                <div className="winBox1">
                    <div className="winBox3">
                        <div className="dealrecord">
                            <div className="headerBox">
                                <span className="headerSpan">角色审批</span>
                                <i className="iconfont icon-wrong headerIcon" id="show"
                                   onClick={() => closeRoamTask()}></i>
                            </div>

                            <div className="resultBox">
                                <div className="centerBox" style={{maxHeight: '600px', overflowY: 'auto'}}>
                                    <div className="resultPadd formBox"
                                         style={{padding: '0px 17px 0px 20px'}}>

                                        {attTypeInfos ?
                                            <table className="resultTab attachment" style={{marginTop: '20px'}}>
                                                <tbody>
                                                {attTypeInfos.map((item, index) => (
                                                        <tr className="">
                                                            <td className="">{item.type_name}</td>
                                                            <td className="unload">
                                                                <em id="imgTerm_0" className="viewPic"
                                                                    data-id={item.attchment_type_id}
                                                                    data-attachname={item.type_name}>上传图片</em>
                                                                <div className="imgArr minImg">
                                                                    <span style={{display: 'none'}}
                                                                          className="_pre "></span>
                                                                    <div className="cover" style={{
                                                                        overflowY: 'hidden',
                                                                        height: '70px',
                                                                        margin: '0 24px'
                                                                    }}>
                                                                        <div id={`gallery${item.attchment_type_id}`}
                                                                             attachId={item.attchment_type_id}
                                                                             attachname={item.type_name}
                                                                             style={{position: 'relative', left: '0'}}>
                                                                            {item.real_data ? item.real_data.map((item, index) => (
                                                                                <li href="{{this}}">
                                                                                    <img className="img_00" url={item}
                                                                                         src={`${item}/tupian_compress`}/>
                                                                                    <i className="delSingleAttach iconfont icon-minus">
                                                                                    </i>
                                                                                </li>
                                                                            )) : null}
                                                                        </div>
                                                                    </div>
                                                                    <span style={{display: 'none'}}
                                                                          className="_next "></span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                                </tbody>
                                            </table> : null
                                        }

                                        <table className="resultTab approve" style={{marginTop: '20px'}}>
                                            <tbody className="role_list">
                                            <tr className="esa">
                                                <td><span style={{color: '#FF0404'}}>*</span>审核结果：</td>
                                                <td>
                                                    <label><input type="radio" name="faceResult" value="1"/>审核通过</label>
                                                    <label><input type="radio" name="faceResult" value="2"/>拒绝审核</label>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <div className="deleFooter">
                                            <div className="beizhu assBeizhu"><span>*</span>审核备注</div>
                                            <textarea className="approveRemark"></textarea>
                                            <div className="deleBtn">
                                                <button style={{background: '#E55A5B'}}
                                                        onClick={() => this.props.fetchRoamTask(attTypeInfos,{test:1})}>确定提交
                                                </button>
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
        const {content} = state.LoanBefore.getNodeFromInfoAllByONid;
        return {
            roamTask,
            content
        }
    }, {
        closeRoamTask,
        fetchRoamTask
    }
)(roamTaskWinBox)
