const initialState = {
    img: ''
}

export function getCodeAction(img) {
    return {
        type: 'getCode',
        img
    }
}


export function getCode(state = initialState, action) {
    switch (action.type) {
        case "getCode":
            return {
                img: action.img
            }
            break;
        default:
            return state
    }
}
