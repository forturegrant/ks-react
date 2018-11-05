import {combineReducers} from 'redux'
import {getList} from './getList'
import {getProductList} from './getProductList.js'

export const LoanBefore = combineReducers({
    getList,
    getProductList
})