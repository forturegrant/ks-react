import axiosInstance from '../utils/ajax.js'
import history from '../history'
import {fetchStart, fetchEnd} from '../reducers'
import {getListAction} from '../reducers/content/loanBefore/getList'
import {getProductListAction} from '../reducers/content/loanBefore/getProductList'
import {getCityAction} from '../reducers/content/loanBefore/orderIn'
import {getAreaAction} from '../reducers/content/loanBefore/orderIn'
import {getNodeFromInfoAllByONidAction} from "../reducers/content/loanBefore/getNodeFromInfoAllByONid";
import {openRoamTaskAction} from "../reducers/content/loanBefore/roamTask";
import {closeRoamTaskAction} from "../reducers/content/loanBefore/roamTask";
import {ajax} from "../utils/index";

export function fetchLogin(values) {
    return async function (dispatch) {
        try {
            dispatch(fetchStart())
            const response = await axiosInstance.post('manager/adminLogin.do', values)
            if (response.data.type == '1') {
                dispatch(fetchEnd())
                localStorage.setItem('token', '1');
                history.push('/content/console');
            } else if (response.data.type == '-1') {
                dispatch(fetchEnd())
            }
        } catch (e) {

        }
    }
    //startAction && dispatch(startAction());
    //dispatch(fetchStart());
}

export const fetchGetCode = (endAction) => (dispatch) => {
    //startAction && dispatch(startAction());
    axiosInstance.get('imageCode.do').then((res) => {
        //cal && cal(res);
        endAction && dispatch(endAction(res.data.content.img, res.data.content.token));
    })
}

export function fetchGetList(values) {
    return async function (dispatch) {
        try {
            dispatch(fetchStart())
            const response = await axiosInstance.post('manager/selectOrderPageList.do', values)
            if (response.data.type === 1) {
                dispatch(fetchEnd())
                dispatch(getListAction(response.data.content.list))
                //localStorage.setItem('token','1');
                //history.push('/content/console');
            } else {
                dispatch(fetchEnd());
            }
        } catch (e) {

        }
    }
    //startAction && dispatch(startAction());
    //dispatch(fetchStart());
}

export function fetchGetProductList() {
    return async function (dispatch) {
        try {
            dispatch(fetchStart())
            const response = await axiosInstance.post('manager/orderInfoProduct.do')
            if (response.data.type === 1) {
                dispatch(fetchEnd())
                dispatch(getProductListAction(response.data.content.list))
                //localStorage.setItem('token','1');
                //history.push('/content/console');
            }
        } catch (e) {

        }
    }
}

export function fetchGetPCA(value, type) {
    return async function (dispatch, getState) {
        try {
            dispatch(fetchStart());
            const response = await axiosInstance.post('manager/ajaxqueryRegion.do', value)
            if (response.data) {
                dispatch(fetchEnd())
                if (type === 'getCity') {
                    dispatch(getCityAction(response.data));
                } else if (type === 'getArea') {
                    dispatch(getAreaAction(response.data));
                }
            } else {
                dispatch(fetchEnd());
            }
        } catch (e) {

        }
    }
}

export function fetchSaveOrder(values) {
    return async function (dispatch) {
        try {
            dispatch(fetchStart())
            const response = await axiosInstance.post('manager/insertOrderPublicNew.do', values)
            if (response.data.type === 1) {
                dispatch(fetchEnd())
                ///dispatch(getProductListAction(response.data.content.list))
                //localStorage.setItem('token','1');
                //history.push('/content/console');
            } else if (response.data.type === -1) {
                dispatch(fetchEnd())
            }
        } catch (e) {

        }
    }
}

export function fetchQueryNodeFromInfoAllByONid(values) {
    return async function (dispatch) {
        try {
            dispatch(fetchStart())
            const response = await axiosInstance.post('manager/queryNodeFromInfoAllByONid.do', values)
            if (response.data.type === 1) {
                dispatch(fetchEnd())
                dispatch(openRoamTaskAction());
                dispatch(getNodeFromInfoAllByONidAction(response.data.content))
                ///dispatch(getProductListAction(response.data.content.list))
                //localStorage.setItem('token','1');
                //history.push('/content/console');
            } else if (response.data.type === -1) {
                dispatch(fetchEnd())
            }
        } catch (e) {
            console.log(e);
        }
    }
}

/*async function request(url, item){
    const response = await axiosInstance.post(url, item);
    if (response.ok) {
        const responseBody = response.json();
        if (responseBody.type === -1) {
            throw new Error(responseBody.msg);
        } else {
            return responseBody;
        }
    }
}*/

export function fetchRoamTask(attTypeInfos,values) {
    return async function (dispatch) {
        try {
            dispatch(fetchStart());
            let ajaxArray = attTypeInfos.map((item,index) => axiosInstance.post('manager/insertAttachment.do', item))
            const response = await Promise.all(ajaxArray);
            console.log(response);
            let if_success = true;
            response.forEach((item) => {
                if(item.data.type === -1){
                    if_success = false;
                }
            })
            if(if_success){
                const response = await axiosInstance.post('manager/roamTask.do', values)
                if (response.data.type === 1) {
                    dispatch(fetchEnd())
                    dispatch(openRoamTaskAction());
                    dispatch(getNodeFromInfoAllByONidAction(response.data.content))
                    ///dispatch(getProductListAction(response.data.content.list))
                    //localStorage.setItem('token','1');
                    //history.push('/content/console');
                } else if (response.data.type === -1) {
                    dispatch(fetchEnd())
                }
            }else{
                dispatch(fetchEnd());
            }
        } catch (e) {
            console.log(e);
        }
    }
}


export function openRoamTask() {
    return function(dispatch){
        dispatch(openRoamTaskAction())
    }
}

export function closeRoamTask() {
    return function(dispatch){
        dispatch(closeRoamTaskAction())
    }
}
