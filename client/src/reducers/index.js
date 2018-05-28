import { combineReducers } from 'redux';
import failureReducer from './failureReducer';
import buildingReducer from './buildingReducer';
import roomReducer from './roomReducer';

export default combineReducers({
    failure: failureReducer,
    room: roomReducer,
    building: buildingReducer
});