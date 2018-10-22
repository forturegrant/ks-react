import axiosInstance from '../utils/ajax.js'
import {fetchStart, fetchEnd} from '../reducers'
import history from '../history'


export function fetchLogin(values) {
    return async function (dispatch) {
        try {
            const response = await axiosInstance.post('manager/adminLogin.do', values)
            if (response.data.type == '1') {
                dispatch(fetchEnd())
                localStorage.setItem('token','1');
                history.push('/content/console');
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

