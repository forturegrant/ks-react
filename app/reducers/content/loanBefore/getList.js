const initialState = {
    list: []
}

export function getListAction(list) {
    return {
        type: 'GET_LIST',
        list
    }
}

export function getList(state = initialState, action) {
    switch (action.type) {
        case "GET_LIST":
            return {
                list:action.list
            }
            break;
        default:
            return state
    }
}
