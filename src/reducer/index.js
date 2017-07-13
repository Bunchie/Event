import {combineReducers} from "redux";

export default function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'TEST': {
            return Object.assign({}, state, {
                header: {name: action.payload[0].header}
            });
        }
        case 'ISSUES_LOADED': {
            return Object.assign({}, state, {
                data_api_giphy: action.data
            });
        }

        default:
            return state;
    }
}
