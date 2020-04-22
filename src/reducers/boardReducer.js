const boardReducer = (state = [], action) => {
    switch (action.type) {
        case 'RIGHT_CLICK':
            return { ...state, contextMenuActive: true }
        case 'ZOOM_IN':
            console.log("zooming in")
            let newZoomIn = state.zoomPercentage;
            if (state.zoomPercentage < 125) {
                newZoomIn += 25;
            }
            console.log("new zoom: " + newZoomIn)
            return {...state, zoomPercentage: newZoomIn }
        case 'ZOOM_OUT':
            console.log("zooming out")
            let newZoomOut = state.zoomPercentage;
            if (state.zoomPercentage > 25) {
                newZoomOut -= 25;
            }
            console.log("new zoom: " + newZoomOut)
            return {...state, zoomPercentage: newZoomOut }
        case 'MOUSE_DOWN':
            alert("mouse down");
            return state
        case 'ADD_IMAGE_TO_BOARD':
            // get current images
            let newImagesObject = state.images;
            
            // add a new image to the highest layer
            newImagesObject[action.imageID] = { image: action.image, 
                layer: state.numLayers, height: 500, width: 500, 
                positionX: 0, positionY: 0 };
            return { ...state, images: newImagesObject }
        case "DRAGGING_UPDATE":
            // get current images
            let updateImageDragging = state.images;
            updateImageDragging[action.imageID] = { positionX: action.newImageX, 
                positionY: action.newImageY };
            return { ...state, translator: {dragging: true, oldX: action.oldX, oldY: action.oldY}, images: updateImageDragging }
        case "SET_DRAGGING":
            return state;
        case "MOUSE_UP":
            return {...state, translator: {dragging: false, oldX: 0, oldY: 0}}
        default:
            return state
        }
}

export default boardReducer;