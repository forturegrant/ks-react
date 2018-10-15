import axiosInstance from '../utils/ajax.js'
import {fetchStart} from '../reducers'
import {fetchEnd} from '../reducers'


export const fetchLogin = (values) => (dispatch) => {
    dispatch(fetchStart())
    //startAction && dispatch(startAction());
    axiosInstance.post('manager/adminLogin.do', values).then((res) => {
        //cal && cal(res);
        if(res.data.type == '1'){
            dispatch(fetchEnd())
        }else{
            dispatch(fetchEnd())
        }
        //endAction && dispatch(endAction());
    })
}

export const fetchGetCode = (endAction) => (dispatch) => {
    //startAction && dispatch(startAction());
    axiosInstance.post('imageCode.do').then((res) => {
        //cal && cal(res);
        endAction && dispatch(endAction(res.data.content.img,res.data.content.token));
    })
}

