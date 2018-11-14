import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Input, Button, Radio, Select} from 'antd'
import {fetchGetPCA} from "../../../actions/common";
import {fetchSaveOrder} from "../../../actions/common";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class orderIn extends Component {
    constructor(props) {
        super(props)
    }

    getCity(value) {
        this.props.dispatch(fetchGetPCA({parentId: value}, 'getCity'))
    }

    getArea(value) {
        this.props.dispatch(fetchGetPCA({parentId: value}, 'getArea'))
    }

    handleBlur(e) {
        let birthDate = e.target.value;
        //console.log(this.birthDateInput)
        //this.birthDateInput.focus()
        this.props.form.setFieldsValue({
            birthDate: birthDate.substring(6, 10) + '-' + birthDate.substring(10, 12) + '-' + birthDate.substring(12, 14)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            const {realName, idCard, birthDate, cellphone, sex, residProvince, residCity, residArea, residence, addrProvince} = values;
            const data = {
                loan_number: 'FD20181114112724656',
                product_id: this.props.location.state.product_id,
                apply_money: '20000',
                at_id: 6,
                lt_id: 21,
                repayment_way: 4,
                interest: 2,
                loan_way: 6,
                os_id: 9,
                feeInfos: {
                    fee_id: 1,
                    fee: 200
                },
                personalInfos: {
                    borrowers: {
                        realName,
                        idCard,
                        birthDate,
                        cellphone,
                        sex
                    }, perInfo: {
                        residProvince,
                        residCity,
                        residArea,
                        residence,
                        addrProvince,
                    }
                }
            }
            if (!err) {
                this.props.dispatch(fetchSaveOrder({frontData: JSON.stringify(data)}));
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {cityList, areaList} = this.props;
        return (
            <div className="bgSortScroll">
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="public-bgContent ">
                        <div className="public-PoBefore-title">填写借款申请</div>
                        <ul className="public-PoBefore-nav">
                            <li>
                <span>
                    <a data-type="PersonMess" href="javascript:void(0)" className="activePublic">
                        借款人信息
                    </a>
                </span>
                            </li>
                            <li>
                <span>
                    <a data-type="message" href="javascript:void(0)">
                        借款信息
                    </a>
                </span>
                            </li>
                            <li>
                <span>
                    <a data-type="dataList" href="javascript:void(0)">
                        资料清单
                    </a>
                </span>
                            </li>
                        </ul>


                        <div className="public-content" id="apply-PersonMess">
                            <div className="public-content-title ">
                                <span>选择已存在的客户</span>
                                <span style={{cursor: 'pointer'}} className="showPerson">
		 		<i className="iconfont icon-shaixuan shaixuan"></i>
		 	</span>
                            </div>
                            <table className="public-content-tab">
                                <thead>
                                <tr>
                                    <td colSpan="7">个人资料</td>
                                    <td><span id="addPerson" className="_btn _btn-size">添加借款人</span></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="personMess ">
                                    <td className=""><span>*</span>借款人1</td>
                                    <td colSpan="7" style={{textAlign: 'left'}}>
                <span className="pad">
                    <FormItem>

             {getFieldDecorator('realName', {

                 rules: [{required: true, message: '请输入姓名',}],
             })(
                 <Input type="text" autoComplete="off" placeholder="请输入借款人1" className="realName"/>
             )}
                    </FormItem>
                </span>

                                        <span className="pad">
                                                                <FormItem>
                    {getFieldDecorator('idCard', {

                        rules: [{required: true, message: '请输入身份证号码',}, {
                            pattern: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                            //type: 'email',
                            message: '请输入正确的身份证号码'
                        }],
                    })(
                        <Input type="text" style={{width: '220px'}} autoComplete="off" placeholder="输入身份证号码"
                               className="idCard" onBlur={this.handleBlur.bind(this)}/>
                    )}
                                                                </FormItem>
        </span>
                                        <FormItem>
                                            <label className="labelinput pad">
                                                {getFieldDecorator('birthDate', {

                                                    rules: [{required: true, message: '请输入生日',}]
                                                })(
                                                    <Input type="text" autoComplete="off" placeholder="请输入生日"
                                                           className="birthDate"/>
                                                )}
                                                <span>
                        <i className="iconfont icon-riqi"></i>

                    </span>
                                            </label>
                                        </FormItem>
                                        <span className="pad">
                                        <FormItem>{getFieldDecorator('cellphone', {

                                            rules: [{required: true, message: '请输入手机号码',}],
                                        })(
                                            <Input type="text" autoComplete="off" placeholder="请输入手机号码"
                                                   className="cellphone"/>
                                        )}
                                        </FormItem>
                </span>
                                        <span className="pad">
                                            <FormItem>
                                                {getFieldDecorator('sex', {

                                                    rules: [{required: true, message: '请选择性别',}],
                                                })(
                                                    <RadioGroup className="sex-radio">
                                                        <Radio value={1}>男</Radio>
                                                        <Radio value={2}>女</Radio>
                                                    </RadioGroup>
                                                )}

                                            </FormItem>
                </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>收款人</td>
                                    <td>
                                        <input id="payee" type="text" autoComplete="off" placeholder="收款人"/>
                                    </td>
                                    <td>收款帐号</td>
                                    <td colSpan="5" className="backBank">
                                        <input type="text" autoComplete="off" id="account"/>
                                        <input type="text" autoComplete="off" id="bank"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>*</span>户口所在地</td>
                                    <td colSpan="3" className="autocom">

                                        <div className="se-re tdSelect">
                                            <FormItem>
                                                {getFieldDecorator('residProvince', {
                                                    initialValue: '',
                                                    rules: [{required: true, message: '请选择居住区域',}],
                                                })(
                                                    <Select onChange={this.getCity.bind(this)} id="rprovince_list"
                                                            className="selectjia_a">
                                                        <Option value="">居住区域</Option>
                                                        <Option value={1}>北京市</Option>
                                                        <Option value={2}>天津市</Option>
                                                        <Option value={3}>河北省</Option>
                                                        <Option value={4}>山西省</Option>
                                                        <Option value={5}>内蒙古自治区</Option>
                                                        <Option value={6}>辽宁省</Option>
                                                        <Option value={7}>吉林省</Option>
                                                        <Option value={8}>黑龙江省</Option>
                                                        <Option value={9}>上海市</Option>
                                                        <Option value={10}>江苏省</Option>
                                                        <Option value={11}>浙江省</Option>
                                                        <Option value={12}>安徽省</Option>
                                                        <Option value={13}>福建省</Option>
                                                        <Option value={14}>江西省</Option>
                                                        <Option value={15}>山东省</Option>
                                                        <Option value={16}>河南省</Option>
                                                        <Option value={17}>湖北省</Option>
                                                        <Option value={18}>湖南省</Option>
                                                        <Option value={19}>广东省</Option>
                                                        <Option value={20}>广西壮族自治区</Option>
                                                        <Option value={21}>海南省</Option>
                                                        <Option value={22}>重庆市</Option>
                                                        <Option value={23}>四川省</Option>
                                                        <Option value={24}>贵州省</Option>
                                                        <Option value={25}>云南省</Option>
                                                        <Option value={26}>西藏自治区</Option>
                                                        <Option value={27}>陕西省</Option>
                                                        <Option value={28}>甘肃省</Option>
                                                        <Option value={29}>青海省</Option>
                                                        <Option value={30}>宁夏回族自治区</Option>
                                                        <Option value={31}>新疆维吾尔自治区</Option>
                                                        <Option value={32}>台湾省</Option>
                                                        <Option value={33}>香港</Option>
                                                        <Option value={34}>澳门</Option>
                                                        <Option value={35}>海外</Option>
                                                        <Option value={36}>其他</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                            {/*<span className="se-po se-po-inputTem"></span>*/}
                                        </div>
                                        <div className="se-re tdSelect">
                                            <FormItem>
                                                {getFieldDecorator('residCity', {
                                                    initialValue: '',
                                                    rules: [{required: true, message: '请选择市',}],
                                                })(
                                                    <Select id="rcity_list" onChange={this.getArea.bind(this)}
                                                            initialValue="" className="selectjia_a">
                                                        <Option value="">选择市</Option>
                                                        {
                                                            cityList.map((item, index) => (
                                                                <Option value={item.ID}>{item.name}</Option>
                                                            ))
                                                        }
                                                    </Select>
                                                )}
                                            </FormItem>
                                            {/*<span className="se-po se-po-inputTem"></span>*/}
                                        </div>
                                        <div className="se-re tdSelect">
                                            <FormItem>
                                                {getFieldDecorator('residArea', {
                                                    initialValue: '',
                                                    rules: [{required: true, message: '请选择区县',}],
                                                })(
                                                    <Select id="rarea_list" className="selectjia_a">
                                                        <Option value="">选择区县</Option>
                                                        {
                                                            areaList.map((item, index) => (
                                                                <Option value={item.ID}>{item.name}</Option>
                                                            ))
                                                        }
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                        <FormItem>
                                            {getFieldDecorator('residence', {
                                                initialValue: '',
                                                rules: [{required: true, message: '请输入详细地址',}],
                                            })(
                                                <Input id="residence" style={{width: '240px !important'}} type="text"
                                                       autoComplete="off" placeholder="请输入详细地址"/>
                                            )}
                                        </FormItem>
                                    </td>
                                    <td><span>*</span>居住地址</td>
                                    <td colSpan="3" className="autocom">
                                        <div className="se-re tdSelect">
                                            <FormItem>
                                                {getFieldDecorator('addrProvince', {
                                                    initialValue: '',
                                                    rules: [{required: true, message: '请选择居住城市',}],
                                                })(
                                                    <Select id="province_list"
                                                            className="ng-pristine ng-untouched ng-valid ng-empty selectjia_a">
                                                        <Option value="">居住区域</Option>

                                                        <Option value={1}>北京市</Option>
                                                        <Option value={2}>天津市</Option>
                                                        <Option value={3}>河北省</Option>
                                                        <Option value={4}>山西省</Option>
                                                        <Option value={5}>内蒙古自治区</Option>
                                                        <Option value={6}>辽宁省</Option>
                                                        <Option value={7}>吉林省</Option>
                                                        <Option value={8}>黑龙江省</Option>
                                                        <Option value={9}>上海市</Option>
                                                        <Option value={10}>江苏省</Option>
                                                        <Option value={11}>浙江省</Option>
                                                        <Option value={12}>安徽省</Option>
                                                        <Option value={13}>福建省</Option>
                                                        <Option value={14}>江西省</Option>
                                                        <Option value={15}>山东省</Option>
                                                        <Option value={16}>河南省</Option>
                                                        <Option value={17}>湖北省</Option>
                                                        <Option value={18}>湖南省</Option>
                                                        <Option value={19}>广东省</Option>
                                                        <Option value={20}>广西壮族自治区</Option>
                                                        <Option value={21}>海南省</Option>
                                                        <Option value={22}>重庆市</Option>
                                                        <Option value={23}>四川省</Option>
                                                        <Option value={24}>贵州省</Option>
                                                        <Option value={25}>云南省</Option>
                                                        <Option value={26}>西藏自治区</Option>
                                                        <Option value={27}>陕西省</Option>
                                                        <Option value={28}>甘肃省</Option>
                                                        <Option value={29}>青海省</Option>
                                                        <Option value={30}>宁夏回族自治区</Option>
                                                        <Option value={31}>新疆维吾尔自治区</Option>
                                                        <Option value={32}>台湾省</Option>
                                                        <Option value={33}>香港</Option>
                                                        <Option value={34}>澳门</Option>
                                                        <Option value={35}>海外</Option>
                                                        <Option value={36}>其他</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="se-re tdSelect">
                                            <FormItem>
                                                {getFieldDecorator('addrCity', {
                                                    initialValue: '',
                                                    rules: [{required: true, message: '请选择居住市',}],
                                                })(
                                                    <Select id="city_list" className="selectjia_a">
                                                        <Option value="">选择市</Option>
                                                        {
                                                            cityList.map((item, index) => (
                                                                <Option value={item.ID}>{item.name}</Option>
                                                            ))
                                                        }
                                                    </Select>
                                                )}

                                            </FormItem>
                                        </div>
                                        <div className="se-re tdSelect">
                                            <FormItem>
                                                {getFieldDecorator('addrArea', {
                                                    initialValue: '',
                                                    rules: [{required: true, message: '请选择居住区',}],
                                                })(
                                                    <Select id="area_list" className="selectjia_a">
                                                        <Option value="">选择区县</Option>{
                                                        areaList.map((item, index) => (
                                                            <Option value={item.ID}>{item.name}</Option>
                                                        ))
                                                    }
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                        <FormItem>
                                            {getFieldDecorator('address', {
                                                initialValue: '',
                                                rules: [{required: true, message: '请输入详细地址',}],
                                            })(
                                                <Input id="address" style={{width: '240px !important'}} type="text"
                                                       autoComplete="off" placeholder="请输入详细地址"/>
                                            )}
                                        </FormItem>
                                    </td>
                                </tr>
                                <tr>
                                    <td>住宅类型</td>
                                    <td colSpan="3" className="PersonCol3" id="house">
                                        <input type="radio" value="1" name="houseType" va="自建"/>自建
                                        <input type="radio" value="2" name="houseType" va="自购"/>自购
                                        <input type="radio" value="3" name="houseType" va="单位购房"/>单位购房
                                        <input type="radio" value="4" name="houseType" va="租房"/>租房
                                        <input type="text" autoComplete="off" id="monthRent"/>
                                    </td>
                                    <td>起始居住时间</td>
                                    <td>
                                        <label className="bord-sol-DDD">
                                            <input id="beginTime" className="datepicker beginTime" placeholder="请选择"
                                                   type="text" autoComplete="off"/>
                                            <span>
		 						<i className="iconfont icon-riqi"></i>
		 					</span>
                                        </label>
                                    </td>
                                    <td>来本地时间</td>
                                    <td>
                                        <label className="bord-sol-DDD">
                                            <input id="localTime"
                                                   className="datepicker localTime ng-pristine ng-untouched ng-valid ng-empty"
                                                   placeholder="请选择" type="text" autoComplete="off"/>
                                            <span><i className="iconfont icon-riqi"></i></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>住宅电话</td>
                                    <td>
                                        <input id="homephone" type="text" autoComplete="off"
                                               onkeyup="value=value.replace(/[^\d]|[a-f]/g,'')" placeholder="住宅电话"
                                               className="ng-pristine ng-untouched ng-valid ng-empty"/>
                                    </td>
                                    <td>教育程度</td>
                                    <td className="sanji">
                                        <div className="se-re">
                                            <select id="education_list">
                                                <option value="">请选择</option>
                                                <option value="1">小学</option>
                                                <option value="3">初中</option>
                                                <option value="4">本科</option>
                                                <option value="6">高中</option>
                                                <option value="7">硕士</option>
                                                <option value="8">中专</option>
                                                <option value="9">大专</option>
                                            </select>
                                            <span className="se-po se-po-inputTem"></span>
                                        </div>
                                    </td>
                                    <td>婚姻状况</td>
                                    <td className="sanji">
                                        <div className="se-re">
                                            <select id="marry_list">
                                                <option value="">请选择</option>
                                                <option value="1">未婚</option>
                                                <option value="2">已婚</option>
                                                <option value="3">离异</option>
                                                <option value="4">丧偶</option>
                                            </select>
                                            <span className="se-po se-po-inputTem"></span>
                                        </div>
                                    </td>
                                    <td>子女数量</td>
                                    <td>
                                        <input id="child" type="text" autoComplete="off" placeholder="子女数量"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="public-bgBotBtn">
                            <Button id="save">保存</Button>
                            <Button id="submit" htmlType="submit">提交</Button>
                        </div>

                    </div>
                </Form>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.location.state.product_id);
    }
}

const mapStateToProps = (state) => ({
    cityList: state.LoanBefore.getCity.cityList,
    areaList: state.LoanBefore.getArea.areaList,
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

const orderInForm = Form.create({})(orderIn);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(orderInForm)


