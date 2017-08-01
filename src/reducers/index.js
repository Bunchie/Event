// import header from "./test";
// import {combineReducers} from "redux";
// import data_api_giphy from "./images";

export default function reducer(state, action) {
    switch (action.type) {
        case 'TEST': {
            return Object.assign({}, state, {
                header: {name: action.payload[0].header}
            });
        }
        case 'IMG_LOADED': {
            return Object.assign({}, state, {
                data_api_giphy: action.data
            });
        }

        default:
            return state;
    }
}


// export default combineReducers({header, data_api_giphy});
