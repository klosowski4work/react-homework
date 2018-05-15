export const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state };
        default:
            return state;
    }
};