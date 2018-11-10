const initialState = {
    logined: false
}

export function loginIn(text) {
    return {
        type: 'loginIn'
    }
}

export function login(state = initialState, action) {
    switch (action.type) {
        case "loginIn":
            return {
                logined: true
            }
            break;
        default:
            return state
    }
}
