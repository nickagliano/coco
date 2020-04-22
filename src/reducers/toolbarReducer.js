const toolbarReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPLOAD_IMAGE': // if user types in the search bar
            return { ...state, active: true }
        case 'SAVE_CANVAS': // if user presses the submit button
            return { ...state }
        default:
            return state
        }
}

export default toolbarReducer;