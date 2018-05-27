import { combineReducers } from 'redux';
import addFailureReducer from './addFailureReducer';
import buildingReducer from './buildingReducer';
import roomReducer from './roomReducer';

export default combineReducers({
    addFailure: addFailureReducer,
    room: roomReducer,
    building: buildingReducer
});