export default function (state, action) {
    switch (action.type) {
        case 'MUSIC':
            return action.payload;
        default:
            return state;
    };
}
