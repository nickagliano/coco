import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initState = {
        boardReducer: {
            contextMenuActive: false,
            zoomPercentage: 50,
            images: {},
            numLayers: 0,
            translator: {
                dragging: false, // false if not dragging, imageID if dragging
                oldX: 0,
                oldY: 0
            }
        },
        toolbarReducer: {
            
        },
        uploadModalReducer: {
            active: false,
            handledSuccessfully: false,
            imageID: null
        },
};

export default function configureStore(initialState=initState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}