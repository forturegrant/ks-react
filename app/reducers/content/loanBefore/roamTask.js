const initialState = {
    roamTask: false,
}

export function openRoamTaskAction(list) {
    return {
        type: 'OPEN_ROAMTASK',
    }
}

export function closeRoamTaskAction(list) {
    return {
        type: 'CLOSE_ROAMTASK',
    }
}

export function roamTask(state = initialState, action) {
    switch (action.type) {
        case "OPEN_ROAMTASK":
            return {
                roamTask: true,
            }
            break;
        case "CLOSE_ROAMTASK":
            return {
                roamTask: false,
            }
            break;
        default:
            return state
    }
}
