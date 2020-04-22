import { v5 as uuidv5 } from 'uuid';
import { addImageToBoard } from '../actions/boardActions'

const COCO_NAMESPACE = 'bcc39d63-f630-43bc-becc-fa6821762aeb';


function getExtension(filename) {
    let parts = filename.split('.');
    return parts[parts.length - 1];
}

// check that file is an image, and is in a supported format
function isImage(filename) {
    var extension = getExtension(filename);
    switch (extension.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png':
        case 'heic': // High Efficiency Image File -- iPhone uses this format
            return true;
        default:
            return false;
    }
}

function generateImageID(file) {
    // generate unique identifier based on file name and current time
    let imageID = uuidv5(file.name + Date.now(), COCO_NAMESPACE);
    return imageID;
}

function processImage(image) {
    return new Promise(resolve => {
        resolve(URL.createObjectURL(image));
      });
}

export function handleFile(event) {
    event.preventDefault();
    return async dispatch => {
        if (isImage(event.target.files[0].name)) {
            let imageID = generateImageID(event.target.files[0]);
            let image = await processImage(event.target.files[0]);
            dispatch(addImageToBoard(imageID, image));
        } else {
            dispatch(uploadUnsuccessful("." + event.target.files[0].type + " files are not currently supported."));
        }
    }
}

export const uploadUnsuccessful = errorMessage => ({
    type: 'UPLOAD_UNSUCCESSFUL',
    errorMessage
});

export const closeUploadModal = event => ({
    type: 'CLOSE_UPLOAD_MODAL'
});

export const startUploadModal = event => ({
    type: 'START_UPLOAD_MODAL'
});





