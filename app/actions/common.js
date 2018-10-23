import axiosInstance from '../utils/ajax.js'
import history from '../history'
import {fetchStart, fetchEnd} from '../reducers'
import {getListAction} from '../reducers/content/loanBefore/getList'

export function fetchLogin(values) {
    return async function (dispatch) {
        try {
            dispatch(fetchStart())
            const response = await axiosInstance.post('manager/adminLogin.do', values)
            if (response.data.type == '1') {
                dispatch(fetchEnd())
                localStorage.setItem('token','1');
                history.push('/content/console');
            }else if(response.data.type == '-1'){
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
    axiosInstance.post('imageCode.do').then((res) => {
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
            }else{
                dispatch(fetchEnd());
            }
        } catch (e) {

        }
    }
    //startAction && dispatch(startAction());
    //dispatch(fetchStart());
}


