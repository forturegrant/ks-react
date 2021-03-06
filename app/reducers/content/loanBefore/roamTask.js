const initialState = {
    roamTask: false
}

export function openRoamTaskAction() {
    return {
        type: 'OPEN_ROAMTASK',
    }
}

export function closeRoamTaskAction() {
    return {
        type: 'CLOSE_ROAMTASK',
    }
}

export function roamTask(state = initialState, action) {
    switch (action.type) {
        case "OPEN_ROAMTASK":
            return {
                roamTask: true
            }
            break;
        case "CLOSE_ROAMTASK":
            return {
                roamTask: false
            }
            break;
        default:
            return state
    }
}
