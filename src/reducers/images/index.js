import {initialState} from "../../store/initial_state/index";

export default function data_api_giphy(state = initialState, action) {
    console.log("2342eraser", action);
    switch (action.type) {
        case 'IMG_LOADED': {
            return Object.assign({}, state, {
                data_api_giphy: action.data
            });
        }

        default:
            return state;
    }
}