import {combineReducers} from 'redux'
import {Login} from './login'
import {LoanBefore} from './content/loanBefore'

const initialState = {
    isFetching: false
}

export function fetchStart() {
    return {
        type: "FETCH_START"
    }
}

export function fetchEnd() {
    return {
        type: "FETCH_END"
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

export const allReducer = combineReducers({
    globalState: reducer,
    login: Login,
    LoanBefore: LoanBefore
})


