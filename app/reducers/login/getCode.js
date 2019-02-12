const initialState = {
    img: ''
}

export function getCodeAction(img,token) {
    return {
        type: 'getCode',
        img,
        token
    }
}

export function getCode(state = initialState, action) {
    switch (action.type) {
        case "getCode":
            return {
                img: action.img,
                token:action.token
            }
            break;
        default:
            return state
    }
}
