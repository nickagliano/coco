const uploadModalReducer = (state = [], action) => {
    switch (action.type) {
        case 'CLOSE_UPLOAD_MODAL': // if user types in the search bar
            return { ...state, active: false }
        case 'START_UPLOAD_MODAL': // if user types in the search bar
            return { ...state, active: true }
        case 'UPLOAD_UNSUCCESSFUL':
            alert(action.errorMessage);
            return state;
        default:
            return state;
        }
}

export default uploadModalReducer;