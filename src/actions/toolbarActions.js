// user uploads an image
// imageID generated
// user chooses a layer to place the image
// user (optionally) crops image
export const uploadImage = event => ({
    type: 'UPLOAD_IMAGE'
})

export const changeLayers = event => ({
    type: 'CHANGE_LAYERS'
})

export const saveCanvas = event => ({
    type: 'SAVE_CANVAS'
})
