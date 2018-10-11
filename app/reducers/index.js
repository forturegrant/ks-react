import {combineReducers} from 'redux'
import {login} from './login.js'
import {getCode} from './getCode.js'
import {getCode} from './getCode.js'

const initialState = {
    isFetching: false
}

function fetchStart(){
    return{
        type:"FETCH_START"
    }
}

function fetchEnd(){
    return{
        type:"FETCH_END"
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_START":
            return {
                isFetching: true
            }
            break;
        case "FETCH_END":
            return {
                isFetching: false
            }
            break;
        default:
            return state
    }
}

export const reducer = combineReducers({
    globalState: reducer,
    login: login,
    getCode: getCode
})


