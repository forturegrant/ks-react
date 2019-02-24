const initialState = {
    content: {}
}

export function getNodeFromInfoAllByONidAction(content) {
    return {
        type: 'GET_NODEFROM',
        content
    }
}

export function getNodeFromInfoAllByONid(state = initialState, action) {
    switch (action.type) {
        case 'GET_NODEFROM':
            return {
                content: action.content
            }
        default:
            return state;
    }
}