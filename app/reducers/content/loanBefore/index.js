import {combineReducers} from 'redux'
import {getList} from './getList'
import {getProductList} from './getProductList.js'
import {getCity} from './orderIn'
import {getArea} from './orderIn'
import {getNodeFromInfoAllByONid} from './getNodeFromInfoAllByONid'

export const LoanBefore = combineReducers({
    getList,
    getProductList,
    getCity,
    getArea,
    getNodeFromInfoAllByONid
})