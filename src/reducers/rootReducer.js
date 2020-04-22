import { combineReducers } from 'redux';
import toolbarReducer from './toolbarReducer';
import boardReducer from './boardReducer';
import uploadModalReducer from './uploadModalReducer';

const rootReducer = combineReducers({
    toolbarReducer,
    boardReducer,
    uploadModalReducer
});


export default rootReducer;