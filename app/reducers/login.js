const initialState = {
    loaded: false
}

export function startLogin(text) {
    return {
        type: 'startLogin'
    }
}

export function endLogin(text) {
    return {
        type: 'endLogin'
    }
}

export function login(state = initialState, action) {
    switch (action.type) {
        case "startLogin":
            return {
                loading: true
            }
            break;
        case "endLogin":
            return {
                loading: false
            }
            break;
        default:
            return state
    }
}
