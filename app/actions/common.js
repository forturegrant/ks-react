import axiosInstance from '../utils/ajax.js'


export const fetchLogin = (startAction, values, cal, endAction) => (dispatch) => {
    //startAction && dispatch(startAction());
    axiosInstance.post('manager/adminLogin.do', values).then((res) => {
        //cal && cal(res);
        endAction && dispatch(endAction());
    })
}

export const fetchGetCode = (startAction, values, cal, endAction) => (dispatch) => {
    //startAction && dispatch(startAction());
    axiosInstance.post('imageCode.do').then((res) => {
        //cal && cal(res);
        endAction && dispatch(endAction(res.data.content.img));
    })
}

