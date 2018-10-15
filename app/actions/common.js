import axiosInstance from '../utils/ajax.js'
import {fetchStart,fetchEnd} from '../reducers'
import history from '../history'



export const fetchLogin = (values) => (dispatch) => {
    //startAction && dispatch(startAction());
    //dispatch(fetchStart());
    axiosInstance.post('manager/adminLogin.do', values).then((res) => {
        //cal && cal(res);
        if(res.data.type == '1'){
            dispatch(fetchEnd())
            history.push('/content/console');
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

