import {combineReducers} from 'redux'
import {login} from './login.js'
import {getCode} from './getCode.js'

export const reducer = combineReducers({
    login: login,
    getCode: getCode
})


