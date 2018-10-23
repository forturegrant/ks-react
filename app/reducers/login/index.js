import {combineReducers} from 'redux'
import {login} from './login'
import {getCode} from './getCode.js'

export const Login = combineReducers({
    login,
    getCode
})