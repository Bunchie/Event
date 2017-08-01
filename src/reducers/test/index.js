import {initialState as init} from "../../store/initial_state/index";

export default function header(state = init, action) {
    console.log(state);
    switch (action.type) {
        case 'TEST': {
            return Object.assign({}, state, {
                header: {name: action.payload[0].header}
            });
        }
        default:
            return state;
    }
}