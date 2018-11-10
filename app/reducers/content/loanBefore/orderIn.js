const initialState = {
    citylist : {
        cityList: []
    },
    areaList : {
        areaList: []
    },
}

const intialState = {
    areaList: []
}

export function getCityAction(cityList) {
    return {
        type: 'GETCITY',
        cityList
    }
}

export function getAreaAction(areaList) {
    return {
        type: 'GETAREA',
        areaList
    }
}

export function getCity(state = initialState.citylist, action) {
    switch (action.type) {
        case 'GETCITY':
            return {
                cityList: action.cityList
            };
        default:
            return state
    }
}

export function getArea(state = initialState.areaList, action) {
    switch (action.type) {
        case 'GETAREA':
            return {
                areaList: action.areaList
            };
        default:
            return state
    }
}