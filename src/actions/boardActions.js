export const rightClick = (event) => ({
    type: 'RIGHT_CLICK'
})

export function keyBindHandler(event) {
    event.preventDefault();
    return dispatch => {
        if ((event.key === "z" || event.key === "Ω") && event.altKey && !event.shiftKey) {
            alert("pressed alt + z");
        } else if ((event.which === 90) && event.altKey && event.shiftKey) {
            alert("pressed alt + shift + z");
        } else if ((event.key === "=" || event.key === "≠") && event.altKey) {
            dispatch(zoomIn());
        } else if ((event.key === "-" || event.key === "–") && event.altKey) {
            dispatch(zoomOut());
        }
    }
}

export function mouseDown(event, props) {
    let images = props.images;
    // get the current mouse position
    let mx = parseInt(event.clientX);
    let my = parseInt(event.clientY);

    // test each rect to see if mouse is inside
    let draggingImageID = null;
    for (let imageID in images) {
        let image = [images[imageID]];
        if (mx > image.positionX && mx < image.positionX + image.width && my > image.positionY && my < image.positionX + image.height) {
            console.log("dragging image");
            draggingImageID = imageID;
            break;
        }
    }
    
    // save the current mouse position
    if (draggingImageID) {
        return dispatch => {
            dispatch(setDragging(draggingImageID, mx, my))
        }
    }
}

export function mouseMove(event, boardReducer) {
    // get the imageID of the image that isDragging
    let imageID = boardReducer.translator.dragging;
    
    // get the current mouse position
    var mx = parseInt(event.clientX);
    var my = parseInt(event.clientY);

    // calculate the distance the mouse has moved
    // since the last mousemove
    var dx = mx - boardReducer.translator.oldX;
    var dy = my - boardReducer.translator.oldY;
    
    // move the image that isDragging 
    // by the distance the mouse has moved
    // since the last mousemove
    let draggingImage = boardReducer.images[imageID];
    let newImageX = draggingImage.positionX + dx;
    let newImageY = draggingImage.positionY + dy;
    return dispatch => {
        dispatch(draggingUpdate(imageID, newImageX, newImageY, mx, my));
    };
}

export const setDragging = (imageID, oldX, oldY) => ({
    type: 'SET_DRAGGING',
    imageID,
    oldX,
    oldY
})

export const mouseUp = () => ({
    type: 'MOUSE_UP'
})

export const draggingUpdate = (imageID, newImageX, newImageY, oldX, oldY) => ({
    type: 'DRAGGING_UPDATE',
    imageID,
    newImageX,
    newImageY,
    oldX,
    oldY
})

export const zoomIn = (event) => ({
    type: 'ZOOM_IN'
})

export const zoomOut = (event) => ({
    type: 'ZOOM_OUT'
})

export const addImageToBoard = (imageID, image) => ({
    type: 'ADD_IMAGE_TO_BOARD',
    imageID,
    image
})
